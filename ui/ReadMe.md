# rh-react-micro-template

## QUICK START

```sh
git clone git@github.com:RHCommerceDev/rh-react-micro-template.git
cd rh-react-micro-template
npm install
npm run start
```

Will run on [http://localhost:3000/rh-checkout-v3](http://localhost:3000/rh-checkout-v3)

# Routes

since this will probably live in rhapsody it will be a sub route on a domain and will not the root.
So / home will be /rh-checkout-v3 like this
http://localhost:3000/rh-checkout-v3

That is because of the way react router works and the site url will be something like this:
https://staging.internal.rhapsodynonprod.com/rh-checkout-v3/

your app will never get the / home route... something with hos rhapsody nginx is setup.
No worries. Just rename `rh-checkout-v3` to the name of your app and enjoy.

See router.tsx basename.

## Create React App

This template contains a script that can copy this project to new directory.
It will git init and replace `rh-react-micro-template` with `your-project-name`

```sh
git clone git@github.com:RHCommerceDev/rh-react-micro-template.git
node ./rh-react-micro-template/scripts/create-react-app.js your-project-name
cd your-project-name
npm i
```

## USAGE:

Install the deps the first time

```sh
npm i
```

Run the Dev Server

```sh
npm start
```

## Build:

```sh
npm run build
```

## Testing

```sh
npm test
```

## Docker

```sh
docker build -t rh-react-micro-template .
docker run -dit --rm --name rh-react-micro-template -p 8080:80 rh-react-micro-template
```

# LINKS

### Git Repos

[REPO](https://github.com/RHCommerceDev/rh-react-micro-template)

### Jenkins Jobs

[Jenkins](https://jenkins.internal.rhapsodydevops.net/job/eCommerce/job/rh-react-micro-template/)

### Deployment:

[DEPLOYMENT](http://development.internal.rhapsodynonprod.com/rh-checkout-v3)

### Design:

### READING:

https://developer.mozilla.org/en-US/docs/Web/API/FileReader

[cortex.yaml](https://restorationhardware.jira.com/wiki/spaces/AR/pages/2568028221/Onboarding+into+Cortex)

[jenkins-rhapsody-libraries](https://github.com/RHCommerceDev/jenkins-rhapsody-libraries)

### TERMS
