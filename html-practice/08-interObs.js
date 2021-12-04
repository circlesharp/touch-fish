const targetEle = document.querySelector('#target');
const tailEle = document.querySelector('#tail');

function interObjCb(entries) {
  const ids = entries.map((entry) => entry.target.getAttribute('id'));
  console.log(entries, ids);
}

const interObs = new IntersectionObserver(interObjCb);

interObs.observe(targetEle);
interObs.observe(tailEle);
