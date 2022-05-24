/** http сервер. */
import http, {ServerResponse, IncomingMessage} from 'http';

http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method)
  console.log(req.url)
  res.end('test')
}).listen(3000)