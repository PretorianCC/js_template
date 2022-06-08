import {users} from './users';
import express from 'express';
import jwt from 'jsonwebtoken';
import {auth, tokenKey} from './middleware';

interface JWTToken {
  id: number;
  login: String;
  token: String;
}

const host = '127.0.0.1';
const port = 3000;

const app = express();
app.use(express.json());
app.use(auth as any);

app.post('/auth', (req: any, res: any) => {
  for (let user of users) {
    if ( req.body.login === user.login && req.body.password === user.password) {
      const token: JWTToken = {
        id: user.id,
        login: user.login,
        token: jwt.sign({ id: user.id }, tokenKey),
      };

      return res.status(200).json(token)
    }
  };

  return res.status(404).json({ message: 'User not found' })
});

app.get('/user', (req: any, res: any) => {
  if (req.user) return res.status(200).json(req.user);
  else return res.status(401).json({ message: 'Not authorized' });
});

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
