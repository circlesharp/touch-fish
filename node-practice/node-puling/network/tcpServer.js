const net = require('net');

const server = net.createServer(socket => {
  // socket.write('233, createServer')

  socket.on('data', data => {
    socket.write(`233, get ${data.toString()}`);
  });

  socket.on('end', () => {
    console.log('233, client end.');
  });
});

server.listen(8124, () => {
  console.log('233, tcp server bound');
});