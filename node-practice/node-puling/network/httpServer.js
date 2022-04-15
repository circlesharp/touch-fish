const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write(new Date().toString());
  setTimeout(() => {
    res.write(new Date().toString());
    res.end(`Server: Hello World`);
  }, 3000);
})

server.on('connection', () => {
  console.log('Server: 连接建立');
})

const [ip, port] = ['127.0.0.1', '1337'];
server.listen(port, ip);
console.log(`Server running on http://${ip}:${port}`);