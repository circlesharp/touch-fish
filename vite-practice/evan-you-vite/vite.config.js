import path from 'path';
import { gatherRemovedExportsPlugin } from './track-deps/gatherRemovedExportsPlugin';

export default {
  root: path.resolve(process.cwd(), './src'),
  build: {
    outDir: path.resolve(process.cwd(), './dist'),
  },
  resolve: {
    alias: {
      '@style': '/assets/style',
      '@script': '/assets/script',
      '@images': '/assets/images',
    },
  },
  plugins: [gatherRemovedExportsPlugin()],
};
