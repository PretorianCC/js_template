import {users} from './users';
import express from 'express';
import crypto from 'crypto';
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
  for (const user of users) {
    if (req.body.login === user.login && req.body.password === user.password) {
      const head = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'jwt' })).toString('base64');
      const body = Buffer.from(JSON.stringify(user)).toString('base64');
      const signature = crypto.createHmac('SHA256', tokenKey).update(`${head}.${body}`).digest('base64');
      const token: JWTToken = {
        id: user.id,
        login: user.login,
        token: `${head}.${body}.${signature}`,
      };
      return res.status(200).json(token);
    }
  }
  return res.status(404).json({ message: 'User not found' });
});

app.get('/user', (req: any, res: any) => {
  if (req.user) return res.status(200).json(req.user);
  else return res.status(401).json({ message: 'Not authorized' });
});

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
