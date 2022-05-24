/** http сервер. */
import http, {ServerResponse, IncomingMessage} from 'http';

http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.write('<h1>Hello</h1>');
  res.write('<h2>world</h2>');
  res.end(`
  <div style="background: red; width: 200px; height: 200px;">
    <h3>Red</h3>
  </div>
  `);
}).listen(3000)