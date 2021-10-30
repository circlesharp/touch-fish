# A simple project would look like this:

```sh
src
├── components
│   ├── Foo.vue
│   ├── Bar.vue
│   └── Baz.vue
├── App.vue
├── app.js # universal entry
├── entry-client.js # runs in browser only
└── entry-server.js # runs on server only
```

# app.js

```js
import Vue from 'vue';
import App from './App.vue';

export function createApp() {
  const app = new Vue({
    render: h => h(App);
  });

  return { app };
}
```

# entry-client.js

```js
import { createApp } from './app.js';

// client-specific bootstrapping logic...

const { app } = createApp();

app.$mount('#app');
```

# entry-server.js

```js
import { createApp } from './app.js';

export default (context) => {
  const { app } = createApp();
  return app;
};
```
