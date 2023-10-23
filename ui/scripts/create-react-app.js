// @ts-check
const fs = require("fs");
const path = require("path");
const { clunk } = require("clunk");

const color = {
  main: () => {
    console.log("\x1b[32m"); // Change terminal color while running script
  },
  error: () => {
    console.log("\x1b[31m"); // Red
  },
  reset: () => {
    console.log("\x1b[0m"); // resets color back to terminal color
  },
};

// Recursive folder copier
const recursiveCopy = (source, destination, projectName) => {
  if (fs.lstatSync(source).isFile()) {
    // If is file, copy as is
    // fs.copyFileSync(source, destination);
    console.log("COPY ...", destination)
    const content = fs
      .readFileSync(source, "utf-8")
      .replace(/rh-react-micro-template/g, projectName);
    fs.writeFileSync(destination, content, "utf-8");
  } else {
    // If is folder, recursive copy
    // Make destination folder
    fs.mkdirSync(destination);
    // iterate over elements in source folder
    fs.readdirSync(source).forEach((element) => {
      // recursive copy each item and let it decide if it is a folder or not
      recursiveCopy(
        path.join(source, element),
        path.join(destination, element),
        projectName
      );
    });
  }
};

// Child Process Command Runner
const exec = require("child_process").exec;
const run = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      resolve(stdout || stderr);
    });
  });
};

const hyphenate = (string) =>
  string
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

const camelCase = (string) =>
  string.replace(/-([a-z])/g, (letter) => letter[1].toUpperCase());

const createReactApp = async () => {
  try {
    // Set main color
    color.main();

    // get project name argument
    const {
      inputs: [projectNameInput],
    } = clunk();

    if (!projectNameInput) {
      console.error("APP Name Required");
      console.error("example: ");
      console.error(
        "$ node ./rh-react-micro-template/scripts/create-react-app.js my-new-app"
      );
      color.reset();
      process.exit();
    }

    // ensure hyphenation
    const projectName = hyphenate(projectNameInput);
    // os safe project path
    const projectDir = path.join(projectName);
    // Make new folder
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir);
    } else {
      // Exit early
      color.error();
      console.log("Project directory already exists");
      color.reset();
      process.exit();
    }

    console.log("Creating New Project");

    const sourceDir = path.join(__dirname, "..");
    const sourceFiles = fs.readdirSync(sourceDir);

    const exclude = ["node_modules", "scripts", ".git", "dist"];
    sourceFiles.forEach((item) => {
      // ignore exluded directories an files
      if (!exclude.includes(item)) {
        const sourceElementPath = path.join(sourceDir, item);
        const destinationElementPath = path.join(projectDir, item);
        // Make new package.json
        if (item === "package.json") {
          // Set project name as package name
          const packageData = JSON.parse(fs.readFileSync(sourceElementPath, "utf-8") || "{}");
          packageData.name = projectName;
          delete packageData.main;
          delete packageData.scripts["create-react-app"];
          packageData.private = true;
          packageData.version = "0.0.0";
          packageData.homepage = "/"+projectName+"-v1"
          fs.writeFileSync(
            destinationElementPath,
            JSON.stringify(packageData, null, 2),
            "utf8"
          );
        } else if (item === "webpack.config.js") {
          // Set project name as title
          let webpackConfig = fs.readFileSync(sourceElementPath, "utf8");
          webpackConfig = webpackConfig.replace(
            /rh-react-micro-template/g,
            projectName
            // camelCase(projectName)
          );
          fs.writeFileSync(destinationElementPath, webpackConfig, "utf8");
        } else {
          recursiveCopy(sourceElementPath, destinationElementPath, projectName);
        }
      }
    });

    // Change into project directory
    process.chdir(path.resolve(projectDir));

    // Initialize a new git repo
    await run("git init");
    // Add files
    await run("git add .");
    // Commit files
    await run('git commit -m "Created React App from rh-react-micro-template"');
    console.log("Done");
  } catch (error) {
    color.error();
    console.log(error);
  }
  color.reset();
};

createReactApp();
