"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
function initMiddleware(middleware) {
    return function (req, res, options) {
        return new Promise(function (resolve, reject) {
            middleware(options)(req, res, function (result) {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
    };
}
var NextCors = initMiddleware(cors_1.default);
exports.default = NextCors;
