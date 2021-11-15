import moment from 'moment';

function createBtns() {
  const preFetchBtn = document.createElement('button');
  preFetchBtn.innerText = 'pre fetch moment.js';
  // preFetchBtn.onclick = handlePreFetchBtnClick;

  const showTimeBtn = document.createElement('button');
  showTimeBtn.innerText = 'log the time';
  showTimeBtn.onclick = handleShowTimeBtnClick;

  const eleBtns = document.createElement('div');
  eleBtns.appendChild(preFetchBtn);
  eleBtns.appendChild(showTimeBtn);

  return eleBtns;
}

// ! 注释掉 prefetch 的逻辑
// async function handlePreFetchBtnClick() {
//   const { default: moment } = await import(/*webpackPrefetch: true*/ 'moment');
//   window.$moment = moment;
// }

// async function handleShowTimeBtnClick() {
//   if (window.$moment == null) {
//     console.warn('还没有加载 moment.js');
//     return;
//   }

//   const time = window.$moment().format('MMMM Do YYYY');
//   console.log(time);
// }

function handleShowTimeBtnClick() {
  const time = moment().format('MMMM Do YYYY');
  console.log(time);
}

export default createBtns;
