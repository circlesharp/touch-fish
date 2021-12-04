const targetEle = document.querySelector('#target');

function helper() {
  console.log(targetEle.getBoundingClientRect());
}

const throttledHelper = _.throttle(helper, 1000);

document.body.onscroll = throttledHelper;
