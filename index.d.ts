import { CorsOptions, CorsOptionsDelegate } from 'cors';
interface More {
    [key: string]: any;
}
declare const NextCors: (req: More, res: More, options?: CorsOptions | CorsOptionsDelegate) => Promise<unknown>;
export default NextCors;
