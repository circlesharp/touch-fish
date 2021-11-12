function createBtns() {
  const preFetchBtn = document.createElement('button');
  preFetchBtn.innerText = 'pre fetch moment.js';
  preFetchBtn.onclick = handlePreFetchBtnClick;

  const showTimeBtn = document.createElement('button');
  showTimeBtn.innerText = 'log the time';
  showTimeBtn.onclick = handleShowTimeBtnClick;

  return { preFetchBtn, showTimeBtn };
}

async function handlePreFetchBtnClick() {
  const { default: moment } = await import('moment');
  window.$moment = moment;
}

async function handleShowTimeBtnClick() {
  if (window.$moment == null) {
    console.log('还没有加载 moment.js');
    return;
  }

  const time = window.$moment().format('MMMM Do YYYY');
  console.log(time);
}

export default createBtns;
