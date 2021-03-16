let array = [1,2,3,3,1,2,1,2,3,2];

//数组去重 方法一
let uniqueArray = Array.from(new Set(array));

console.log(uniqueArray);

//数组去重 方法二
let uniqueArray1 = [...new Set(array)];

console.log(uniqueArray1);

//数组中替换指定的值
array.splice(0,2, 5, 6,7);

console.log(array);

let arrays = [[1,2,3],[4,5,6]];

