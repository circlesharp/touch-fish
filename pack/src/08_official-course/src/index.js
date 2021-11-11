import _, { divide } from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  const myIconFont = document.createElement('span');
  myIconFont.innerHTML = '&#xe606';

  element.appendChild(myIcon);
  element.appendChild(myIconFont);

  return element;
}

document.body.appendChild(component());
