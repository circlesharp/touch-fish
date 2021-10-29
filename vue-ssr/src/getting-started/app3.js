// 双模板

const Vue = require('vue');
const server = require('express')();

const template = require('fs').readFileSync('./index.template.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template, // 大模板
});

const context = {
  title: 'hello ssr',
  meta: `
    <meta charset="UTF-8">
    <meta name="keyword" content="vue,srr">
    <meta name="description" content="vue srr demo">
  `,
};

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: `<div>The visited URL is: {{ url }}</div>`, // 小模板
  });

  renderer.renderToString(app, context, (err, html) => {
    console.log(html);
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }

    res.end(html);
  });
});

server.listen(8000);
