import path from 'path';
import url from 'url';
import myExample from './plugin';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  input: 'src/index.js',
  output: [
    {
      file: path.resolve(__dirname, './dist/index.es.js'),
      format: 'es',
    },
    // {
    //   file: path.resolve(__dirname, './dist/index.cjs.js'),
    //   format: 'cjs',
    // },
  ],
  plugins: [new myExample()],
};
