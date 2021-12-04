const interObj = new IntersectionObserver((entries) => {
  // const targets = entries.map((i) => i.target);

  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      console.log(entry.target.getAttribute('id'));
      entry.target.innerText = 'Already';
      interObj.unobserve(entry.target);
    }
  });
});

const elements = Array(20)
  .fill(null)
  .map((ele, idx) => {
    ele = document.createElement('div');
    ele.setAttribute('class', 'feed');
    ele.setAttribute('id', idx);
    ele.innerText = idx;
    return ele;
  });

elements.forEach((ele) => {
  document.body.append(ele);
});

elements.forEach((ele) => {
  interObj.observe(ele);
});
