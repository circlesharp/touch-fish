import createText from './components/createText';
import createBtns from './components/createBtns';
// import createChart from ;

(async function () {
  // 按需引入的
  const eleText = await createText();

  // prefetch
  const eleBtns = createBtns();

  // preload 强调与父级 bundle 一起加载
  const { default: createChart } = await import('./components/createChart');
  const eleChart = createChart();

  document.body.appendChild(eleText);
  document.body.appendChild(eleBtns);
  document.body.appendChild(eleChart);
})();
