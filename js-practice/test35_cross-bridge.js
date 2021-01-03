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

const options = [1, 2, 5, 10];

const crossBridge = p => { 
  const len = p.length;

  /* 不超过2人 */
  if (len <= 2)
    return p[len - 1];

  /* 超过2人 */
  const resolve = [0, p[0], p[1]];
  const steps = [{
    step: 1,
    route: [ [null, [0, 1]] ] 
  }];

  for (let i = 3; i <= len; i++) {
    const timeM1 = resolve[i - 1] + p[0] + p[len - 1];
    const timeM2 = resolve[i - 2] + p[0] + p[len - 1] + p[1] + p[1];
    /* 1 不需要解决方案 */
    // resolve[i] = Math.min(timeM1, timeM2);

    /* 2 需要解决方案 */
    if (timeM1 < timeM2) {
      const info = {
        step: 1,
        route: [ [0, [0, len - 1]] ], // 一个来回
      };
      steps.push(info);
      resolve[i] = timeM1;
    }
    else {
      const info = {
        step: 2,
        route: [ [0, [ 1, len - 1 ]], [ 1, [0, 1] ] ], // 两个来回
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
    if (info.route[1])
      stack.push(info.route[1]);
    stack.push(info.route[0]);
    n -= info.step;
  }
  
  while (stack.length) {
    const step = stack.pop();
    if (step[0] != null) console.log(`t: ${p[step[0]]}\t<= ${step[0]} =`);
    console.log(`t: ${p[step[1][1]]}\t= ${step[1][0]}, ${step[1][1]} =>`);
  }
}

wrapCrossBridge(options);

// console.log(crossBridge(options));
