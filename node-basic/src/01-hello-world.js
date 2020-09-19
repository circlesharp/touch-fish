const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || '1234';

/* 
1. createServer creates a new HTTP server and returns it.
2. whenever a new request is received, the request event is called, providing 2 objects:
  2.1. a request(an http.IncomingMessage object),
  2.2. a response(an http.ServerResponse object),
  those 2 objects are essential to handle the HTTP call.
3. 

*/
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n'); // close the response, adding the content as an argument to end();
});

/*
1. the server is set to listen on the specified port and host name.
*/
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
