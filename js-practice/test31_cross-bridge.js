const childs = [1, 2, 5, 10];

/*
start [1, 2, 5, 10] => []
go [1, 2] > 5, 10 > [5, 10]; goTime = 10
back [1, 2, 5] < 5 < [10]; backTime = 5
end [] => [1, 2, 5, 10]
*/

/**
 * 返回全员过桥时间
 * @param {Array} childs 有序的int数组
 */
const crossBirdge = childs => {
  /* tick 表示完成一次 go-back 的周期 */
  let tick = true;

  /* 临界条件 */
  if (tick && childs.length == 0)
    return 0
  if (tick && childs.length == 1)
    return childs[0];
  if (tick && childs.length == 2)
    return childs[1];

  /* 动态规划 */
  if (childs.length > 2) {
    
  }
};

console.log(crossBirdge(childs));
