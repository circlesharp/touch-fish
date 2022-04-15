const net = require('net');

const client = net.connect({port: 8124}, () => {
  setTimeout(() => {
    console.log('client connect');
    client.write('hi, I am client');
  }, 2000);
})

client.on('data', data => {
  console.log(data.toString());
  client.end();
})

client.on('end', () => {
  console.log('client disconnect');
})

