import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(btn);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  return element;
}

document.body.appendChild(component());
