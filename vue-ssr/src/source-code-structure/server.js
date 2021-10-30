// server.js

const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('./app');

server.get('*', (req, res) => {
  const context = { url: req.url };
  const app = createApp(context);

  renderer.renderToString(app, (err, html) => {
    res.end(html);
  });
});

server.listen(8000);
