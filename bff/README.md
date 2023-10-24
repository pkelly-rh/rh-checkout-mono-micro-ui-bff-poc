# NodeJS MicroService Starter

Micro service starter using fastify

![flavorite](https://raw.githubusercontent.com/patomation/vanilla-starter/master/public/favicon.ico)

## Install

```
npm install
```

## Test

```
npm run test
```

Tip: Run verbose tests to see console.logs

```
npm run test -- --verbose
```

supports naming convention: moduleName.test.ts
Check out [ava](https://github.com/avajs/ava)



# Limitations

type-graphql@^1.1.1 requires graphql@^15.3.0 not 16
We can have graphql@16 if we install type-graphql 2 beta. Apollo server latest wants 16.


node 16 does not have fetch
where as node 18 does implement native fetch.
In the mean time, since the rest of the company is on node 16 lets install node-fetch
We can always get rid of node-fetch when we go to node 18