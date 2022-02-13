const containerId = 'chart_container';
const myChartId = 'my_chart';
const loadingId = 'chart_loading';

function createChart() {
  const eleChart = document.createElement('div');
  eleChart.setAttribute('id', containerId);

  // 按钮 点击按钮以展示 chart
  const eleBtn = document.createElement('button');
  eleBtn.innerText = 'show chart';
  eleBtn.onclick = showChart.bind(null, eleChart);
  eleChart.appendChild(eleBtn);

  return eleChart;
}

async function showChart(eleParent) {
  // loading
  const eleLoading = document.createElement('p');
  eleParent.appendChild(eleLoading);
  eleLoading.setAttribute('id', loadingId);
  eleLoading.innerText = 'Loading...';

  // 图表
  const eleMyChart = document.createElement('div');
  eleParent.appendChild(eleMyChart);
  eleMyChart.setAttribute('id', myChartId);
  eleMyChart.setAttribute('style', 'width: 600px; height: 400px;');

  await renderChart(eleMyChart);
}

async function renderChart(eleParent) {
  const eleLoading = document.getElementById(loadingId);
  const echarts = await import(/* webpackPreload: true */ 'echarts');
  eleLoading.innerText = 'Finished';
  const myChart = echarts.init(eleParent);
  const option = createOption();
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

function createOption() {
  const option = {
    title: {
      text: 'ECharts My Chart',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return option;
}

export default createChart;
