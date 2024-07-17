# Nextjs Cors

`Nextjs-Cors` is a node.js package to provide a middleware that can be used to enable CORS with various options in nextjs applications.

[![CI](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml/badge.svg)](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml)
<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/v/nextjs-cors" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/l/nextjs-cors" alt="Package License" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/dm/nextjs-cors" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/badge/Github%20Page-nextjs.cors-yellow?style=flat-square&logo=github" /></a>

## Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install nextjs-cors@latest

# Using yarn
yarn add nextjs-cors@latest

# Using pnpm
pnpm add nextjs-cors@latest
```

## Usage

nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors

> pages/api/whoami.{ts,js}

```ts
import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}
```

## License

`nextjs-cors` under [License.](LICENSE)
