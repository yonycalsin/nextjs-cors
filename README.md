# Nextjs Cors

`Nextjs-Cors` is a function that allows you to enter an object, by means of points, and very easily, and is compatible with **typescript**

<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/v/nextjs-cors" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/l/nextjs-cors" alt="Package License" /></a>
<a href="https://www.npmjs.com/nextjs-cors" target="_blank">
<img src="https://img.shields.io/npm/dm/nextjs-cors" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/nextjs-cors" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/badge/Github%20Page-nextjs.cors-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yony%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonycalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install --save nextjs-cors

# Using yarn
yarn add nextjs-cors
```

## 🌎 Usage

nextjs-cors uses the cors package, so we invite you to check the documentation https://www.npmjs.com/package/cors

> pages/api/whoami.{ts,js}

```js
import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://www.npmjs.com/package/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json({ message: 'Hello Everyone!' });
}
```

## ⭐ Support for

`nextjs-cors` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](https://twitter.com/yonycalsin).

## 🎩 Stay in touch

-  Github [@yonycalsin](https://github.com/yonycalsin)
-  Twitter [@yonycalsin](https://twitter.com/yonycalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`nextjs-cors` under [License MIT.](LICENSE)
