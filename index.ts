import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';

interface More {
   [key: string]: any;
}

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
   return (req: More, res: More, options?: CorsOptions | CorsOptionsDelegate) =>
      new Promise((resolve, reject) => {
         middleware(options)(req, res, (result) => {
            if (result instanceof Error) {
               return reject(result);
            }
            return resolve(result);
         });
      });
}

// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const NextCors = initMiddleware(cors);

export default NextCors;
