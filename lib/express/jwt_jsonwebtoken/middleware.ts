import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { users, User } from './users';

export const tokenKey = '1a2b-3c4d-5e6f-7g8h';

interface RequestUser extends Request {
  user: User;
}

export const auth = (req: RequestUser, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], tokenKey, (err, payload) => {
      if (err) next();
      else if (typeof payload === 'object') {
        for (const user of users) {
          if (user.id === payload.id) {
            req.user = user;
            next();
          }
        }
        if (!req.user) next();
      }
    });
  }
  next();
}