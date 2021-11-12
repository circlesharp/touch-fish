import createBtns from './createBtns';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then((component) => {
  const { preFetchBtn, showTimeBtn } = createBtns();
  document.body.appendChild(component);
  document.body.appendChild(preFetchBtn);
  document.body.appendChild(showTimeBtn);
});
