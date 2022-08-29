const { webpack } = require('../../.yalc/webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
compiler.run((e) => console.error(e));
