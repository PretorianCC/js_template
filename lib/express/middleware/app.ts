import express, {Request, Response} from "express";
import {logger} from './logger';
import {users} from './users';


const port = 3000;
const app = express();
app.use(express.json());
app.use(logger);

app.get('/', (req: Request, res: Response): void => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Прослушивается порт ${port}`)
});
