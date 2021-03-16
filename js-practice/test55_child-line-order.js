/*
  有N个小孩排成一队，分别重量为a1,a2,a3...aN。 此外每个孩子报数了前面有b1,b2,b3...bN个人比自己重，因此产生一条唯一的数列[[a1,b1],[a2,b2]...[aN,bN]]。
  当前该数列被打乱，请重新排序得到原数列。
  提示：输入必然为有效的数列。
  0<N<=1000
  0<ai<=100000（可以重复）
  0<=bi<N

  例如： 输入 [[8,1],[4,4],[5,0],[8,0],[6,1],[5,2]] 
  排序后 [[5,0],[8,0],[5,2],[6,1],[4,4],[8,1]]
  注意不存在其它结果，例如：[[5,0],[8,0],[6,1],[5,2],[4,4],[8,1]], [5,2]是不满足条件的。
*/

const disorderArr = [[8, 1], [4, 4], [5, 0], [8, 0], [6, 1], [5, 2]]
const solve = (arr) => {
  // 1 双因素排序 先按照身高倒序，在按照个数升序
  let swapTemp;
  arr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] === arr[j][0] && arr[i][1] > arr[j][1]) {
        // 身高相等 位置不对
        swapTemp = arr[i];
        arr[i] = arr[j];
        arr[j] = swapTemp;
      }
    }
  }

  // 2 扫描，身高从高到矮调整位置，矮的不影响高的
  let insertTemp;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] === i)
      continue;
    insertTemp = arr.splice(i, 1)[0];
    arr.splice(insertTemp[1], 0, insertTemp);
  }
}

solve(disorderArr);
console.log(disorderArr);
