// ! Rendering a Vue Instance
// ! vue => string

// step 1: Create a Vue instance
const Vue = require('vue');
const app = new Vue({
  template: `<div>Hello World</div>`,
});

// step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer();

// step 3: Render the Vue instance of HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;

  console.log(html);
});

renderer
  .renderToString(app)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error(err);
  });
