const arr = [1, 2, [3, 4, [5, 6, [], [[], [], 7, 8]]]];

// 默认只能打平一级嵌套
console.log(arr.flat(Infinity));

const sentences = ['hello world', 'good morning'];

// 把 flatMap 想象成通用的 map, 将输入数组中的一个元素映射为输出数组中的多个元素
console.log(sentences.flatMap((i) => i.split(' ')));
