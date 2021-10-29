const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

server.get('*', (req, res) => {
  const app = new Vue({
    template: `<div @click="test">{{ value }}</div>`,
    data: {
      value: 'current valu',
    },
    created() {
      console.log(123, this.value);
      setTimeout(() => {
        this.value = 'next one';
      }, 1000);
    },
    methods: {
      test() {
        console.log(233);
      },
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
