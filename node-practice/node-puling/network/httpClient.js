const http = require('http');

const options = {
  port: 1337,
  path: '/',
  method: 'GET',
};

const req = http.request(options, res => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  res.on('data', chunk => {
    console.log('data', chunk);
  })
})

req.end();