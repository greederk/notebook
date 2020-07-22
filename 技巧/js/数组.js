// 普通数组
// const arr1 = [1, 2, 3, 4, 5 , 8 ,9],
//   arr2 = [5, 6, 7, 8, 9];

// // 交集
// const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })
// console.log(intersection)
// // 对象数组
// const arr3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
// const arr4 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const result = arr4.filter(function (v) {
//   return arr3.some(n => JSON.stringify(n) === JSON.stringify(v))
// })
// console.log(result);


//并集
// 普通数组
// const arr5 = [1, 2, 3, 4, 5, 8, 9]
// const arr6 = [5, 6, 7, 8, 9];
// const result1 = arr5.concat(arr6.filter(v => !arr1.includes(v)))
// console.log(result1)

// 对象数组
// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// let arr3 = arr1.concat(arr2);
// let result = [];
// let obj = [];
// result = arr3.reduce(function (prev, cur, index, arr) {
//   obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
//   return prev;
// }, []);
// console.log(result);




//差集
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const diff = arr1.filter(item => !new Set(arr2).has(item))
console.log(diff)