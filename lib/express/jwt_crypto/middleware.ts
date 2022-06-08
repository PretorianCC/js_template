import crypto from 'crypto';
import {Request, Response, NextFunction} from 'express';

export const tokenKey = '1a2b-3c4d-5e6f-7g8h';

export interface RequestUser extends Request {
  user: String;
}

export const auth = (req: RequestUser, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const tokenParts = req.headers.authorization.split(' ')[1].split('.');
    const signature = crypto.createHmac('SHA256', tokenKey).update(`${tokenParts[0]}.${tokenParts[1]}`).digest('base64');
    if (signature === tokenParts[2]) {
      req.user = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString('utf-8'));
    }
  }
  next();
}