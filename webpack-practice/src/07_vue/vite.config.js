import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import gatherRemovedExportsPlugin from './rollupPlugin';

const HOST = '0.0.0.0';

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    root: __dirname,
    base: './',
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    plugins: [createVuePlugin(), gatherRemovedExportsPlugin()],
  });
};
