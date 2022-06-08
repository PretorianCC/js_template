import {Request, Response, NextFunction} from 'express';

export function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`method: ${req.method}, path: ${req.path}`);
  next();
}