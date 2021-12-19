function solution(arr) {
  const converts = arr.map((i) => {
    const tArr = i.split(':');
    const [_s, _n] = tArr[2].split('.');
    tArr[2] = _s;
    tArr[3] = _n;
    const [h, m, s, n] = tArr.map((i) => Number.parseInt(i, 10));

    console.log(h, m, s, n);
    return {
      label: i,
      value: h * 3600000 + m * 60000 + s * 1000 + n,
    };
  });

  converts.sort((a, b) => a.value - b.value);

  return converts.map((i) => i.label);
}

console.log(solution(['01:42:8.00009', '01:41:8.9', '01:41:8.09']));
