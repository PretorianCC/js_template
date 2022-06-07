import {createServer} from 'http';

enum MethodHttp {
  GET = 'GET',
  POST = 'POST'
}

const server = createServer((req, res) => {
  if (req.method === MethodHttp.GET) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(`
      <h1>Form</h1>
      <form method="post" action="/">
        <input name="title" type="text" />
        <button type="submit">Send</button>
      </form>
    `);
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