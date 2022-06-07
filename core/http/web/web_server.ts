import {createServer} from 'http';
import {readFile} from 'fs';
import {join} from 'path';

enum MethodHttp {
  GET = 'GET',
  POST = 'POST'
}

const server = createServer((req, res) => {
  if (req.method === MethodHttp.GET) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    if (req.url === '/') {
      readFile(join(__dirname, 'index.html'), 'utf-8', (error, content) => {
        if (error) throw error;
        res.end(content);
      });
    } else if (req.url === '/about') {
      readFile(join(__dirname, 'about.html'), 'utf-8', (error, content) => {
        if (error) throw error;
        res.end(content);
    })};
  } else if (req.method === MethodHttp.POST) {
    const body: Array<Buffer> = [];

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    req.on('data', data => {
      body.push(Buffer.from(data));
    });

    req.on('end', () => {
      const message = body.toString().split('=')[1];
      res.end(`
        <h1>Сообщение: ${message}</h1> 
      `)
    });

  }
});

server.listen(3000, () => {
  console.log('Сервер запущен.')
});