async function createText() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

export default createText;
