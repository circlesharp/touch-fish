import path from 'path';

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
};
