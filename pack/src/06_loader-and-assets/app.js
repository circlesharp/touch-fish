import createLayer from './layer/layer';
import './index.less';

const { name, template, createTpl } = createLayer();

console.log(`app.js, reading from layer.js.`);
console.log('name', name);
console.log('template', template);
console.log('createTpl', createTpl);

const containerHtml = document.querySelector('#containerHtml');
const containerTpl = document.querySelector('#containerTpl');

containerHtml.innerHTML = template;
containerTpl.innerHTML = createTpl({
  name: 'name of tpl',
  arr: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
});
