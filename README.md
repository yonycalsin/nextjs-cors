# nextjs-cors

CORS middleware for Next.js API routes.

[![CI](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml/badge.svg)](https://github.com/yonycalsin/nextjs-cors/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/nextjs-cors)](https://www.npmjs.com/package/nextjs-cors)
[![npm downloads](https://img.shields.io/npm/dm/nextjs-cors)](https://www.npmjs.com/package/nextjs-cors)
[![license](https://img.shields.io/npm/l/nextjs-cors)](LICENSE)

## Installation

```bash
npm install nextjs-cors
# or
yarn add nextjs-cors
# or
pnpm add nextjs-cors
```

## Usage

```ts
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  // Run CORS middleware
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  // Your API logic
  res.json({ message: "Hello NextJs Cors!" });
}
```

## Options

This package uses the [cors](https://github.com/expressjs/cors) package. See the [cors documentation](https://github.com/expressjs/cors#configuration-options) for all available options.

## License

[MIT](LICENSE)
