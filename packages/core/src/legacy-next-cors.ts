import cors, { type CorsOptions, type CorsOptionsDelegate } from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware: typeof cors) {
  return async (req: NextApiRequest, res: NextApiResponse, options?: CorsOptions | CorsOptionsDelegate) =>
    await new Promise((resolve, reject) => {
      middleware(options)(req, res, (result: Error | unknown) => {
        if (result instanceof Error) {
          reject(result)

          return
        }

        resolve(result)
      })
    })
}

// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const legacyNextCors = initMiddleware(cors)

export default legacyNextCors
