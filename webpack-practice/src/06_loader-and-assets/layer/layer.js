import template from './layer.html';
import createTpl from './layer.tpl';
import './layer.less';

function createLayer() {
  return {
    name: 'layer',
    template,
    createTpl,
  };
}

export default createLayer;
