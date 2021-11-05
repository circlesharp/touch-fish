import createLayer from './layer/layer';

const { name } = createLayer();

console.log(`app.js, reading from layer.js, name: ${name}`);
