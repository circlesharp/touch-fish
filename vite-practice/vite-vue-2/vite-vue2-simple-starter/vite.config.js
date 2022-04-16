import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import resolveExtensionVue from 'vite-plugin-resolve-extension-vue';

const HOST = '0.0.0.0';
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: './',
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT,
        },
        {
          find: 'src/',
          replacement: REPLACEMENT,
        },
      ],
    },
    plugins: [createVuePlugin(/* options */), resolveExtensionVue()],
  });
};
