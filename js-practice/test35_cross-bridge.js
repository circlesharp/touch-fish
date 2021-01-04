/* DP - 小孩过桥 */

/*
假如四个小孩，过桥时间分别为1，2，5，10。

每次过桥最多只能两个小孩过去，
过桥时间为两个小孩当中较慢的那个，
再一个小孩回来接另一个小孩回去，
求所有小孩都过桥的最小总时间。

例：1，2，5，10；
每次都是1和其他小朋友过去，然后1回来，这样所有小朋友过桥的总时间是19
（不是最优答案，最优答案是17）
*/

// const options = [1, 2, 5, 10, 12, 14];
const options = [1, 2, 5, 10];

const crossBridge = p => { 
  const len = p.length;
  /* 改造 options, 多加一个占0位的0 */
  p.unshift(0);

  /* 不超过2人 */
  if (len <= 2)
    return p[len];

  /* 超过2人 */
  const resolve = [0, p[1], p[2]];
  const steps = [{
    step: 1,
    route: [ [null, [1, 2]] ] 
  }];

  for (let i = 3; i <= len; i++) {
    const timeM1 = resolve[i - 1] + p[1] + p[i];
    const timeM2 = resolve[i - 2] + p[1] + p[i] + p[2] + p[2];
    /* 1 不需要解决方案 */
    // resolve[i] = Math.min(timeM1, timeM2);

    /* 2 需要解决方案 */
    if (timeM1 < timeM2) {
      const info = {
        step: 1,
        route: [ [1, [1, i]] ], // 一个来回
      };
      steps.push(info);
      resolve[i] = timeM1;
    }
    else {
      const info = {
        step: 2,
        route: [ [1, [ i - 1, i ]], [ 2, [1, 2] ] ], // 两个来回
      };
      steps.push(info);
      resolve[i] = timeM2;
    }
  }

  return [resolve[len], steps];
}

wrapCrossBridge = p => {
  const [time, steps] = crossBridge(p);
  console.log(`the totil time: ${time}.\n`);
  
  const stack = [];
  let n = steps.length - 1;
  while(n >= 0) {
    const info = steps[n];
    /* 顺序不能换，先压后面的步骤，后进先出 */
    if (info.route[1])
      stack.push(info.route[1]);
    stack.push(info.route[0]);
    n -= info.step;
  }
  
  while (stack.length) {
    const step = stack.pop();
    /* 如果有 back 的步骤，打印 */
    if (step[0] != null) console.log(`t: ${p[step[0]]}\t<= ${step[0]} =`);
    /* 打印 go 的步骤 */
    console.log(`t: ${p[step[1][1]]}\t= ${step[1][0]}, ${step[1][1]} =>`);
  }
}

wrapCrossBridge(options);
