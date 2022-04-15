const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
})

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listing: ${address.address}:${address.port}`);
})

server.bind(41234);