import _ from 'lodash';

function createText() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

export default createText;
