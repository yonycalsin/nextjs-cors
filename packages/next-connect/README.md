# @next-cors/next-connect

`@next-cors/next-connect` is a node.js package to provide a middleware that can be used to enable CORS with various options in nextjs applications.

[![CI](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml/badge.svg)](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml)
<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/@next-cors/next-connect" target="_blank">
<img src="https://img.shields.io/npm/v/nextjs-cors" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/@next-cors/next-connect" target="_blank">
<img src="https://img.shields.io/npm/l/nextjs-cors" alt="Package License" /></a>
<a href="https://www.npmjs.com/@next-cors/next-connect" target="_blank">
<img src="https://img.shields.io/npm/dm/nextjs-cors" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/nextjs-cors"><img src="https://img.shields.io/badge/Github%20Page-nextjs.cors-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yony%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonycalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"></a>

## Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install @next-cors/next-connect@latest

# Using yarn
yarn add @next-cors/next-connect@latest

# Using pnpm
pnpm add @next-cors/next-connect@latest
```

## Usage

nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors

> pages/api/whoami.{ts,js}

```ts
// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { createRouter, expressWrapper } from 'next-connect'
import { nextCors } from '@next-cors/next-connect'

const router = createRouter<NextApiRequest, NextApiResponse>()

router
  // A middleware example
  .use(nextCors())
  .get((req, res) => {
    const user = getUser(req.query.id)
    res.json({ user })
  })

export const config = {
  runtime: 'edge',
}

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack)
    res.status(err.statusCode || 500).end(err.message)
  },
})
```

## Support for

`@next-cors/next-connect` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](https://twitter.com/yonycalsin).

## Stay in touch

- Github [@yonycalsin](https://github.com/yonycalsin)
- Twitter [@yonycalsin](https://twitter.com/yonycalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## License

`@next-cors/next-connect` under [License.](LICENSE)
