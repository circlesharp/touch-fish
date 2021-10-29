const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

server.get('*', (req, res) => {
  const app = new Vue({
    template: `<div>The visited URL is: {{ url }}</div>`,
    data: {
      url: req.url,
    },
  });

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internet Server Error');
      return;
    }

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Hello</title>
        </head>
        <body>${html}</body>
      </html>
    `);
  });
});

server.listen(8000);
