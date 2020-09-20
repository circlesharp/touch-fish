const https = require('https');

/* https://apitesttool.desire2learnvalence.com/ */
const options = {
  hostname: 'devcop.brightspace.com',
  port: 443,
  path: '/d2l/api/versions/',
  method: 'GET',
  appId: '31brpbcCLsVim_K4jJ8vzw',
  appKey: 'sagYSTT_HOts39qrGQTFWA',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d)
  })
});

req.on('error', error => {
  console.error(error)
});

req.end();
