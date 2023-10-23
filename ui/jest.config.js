const path = require("path");

module.exports = {
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  modulePaths: ["<rootDir>", "src"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  roots: ["<rootDir>", path.resolve("src")],
  setupFiles: ["jest-localstorage-mock", "./jest.setup.js"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
