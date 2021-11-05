import createLayer from './layer/layer';
import './index.less';

const { name } = createLayer();

console.log(`app.js, reading from layer.js, name: ${name}`);
