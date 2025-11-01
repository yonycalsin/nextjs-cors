import cors, { CorsOptions, CorsOptionsDelegate } from "cors";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * CORS middleware for Next.js API routes
 * @param req - Next.js API request object
 * @param res - Next.js API response object
 * @param options - CORS configuration options (see https://github.com/expressjs/cors#configuration-options)
 * @returns Promise that resolves when CORS middleware completes
 */
export default function NextCors(
  req: NextApiRequest,
  res: NextApiResponse,
  options?: CorsOptions | CorsOptionsDelegate
): Promise<void> {
  return new Promise((resolve, reject) => {
    cors(options)(req, res, (result: Error | unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve();
    });
  });
}
