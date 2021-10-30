// app.js

const Vue = require('vue');

module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url,
    },
    template: `<div>The visited URL is: {{ url }}</div>`,
  });
};
