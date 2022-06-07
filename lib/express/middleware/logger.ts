import {Request, Response, NextFunction} from 'express';

export function logger(res: Request, req: Response, next: NextFunction) {
  console.log(`method: ${res.method}, path: ${res.path}`);
  next();
}