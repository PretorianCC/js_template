/** http сервер. */

const http = require('http')

http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)
  res.end('test')
}).listen(3000)