
//交集
var a1 = [1,2,3,4,5,6,7],
a2 = [4,5,7,9]
var  result1 = a1.filter(v => a2.indexOf(v) > -1)
console.log(result1)
var a3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
var a4 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
var result2 = a3.filter(v => {
    return a4.some(n => {
        return JSON.stringify(n) === JSON.stringify(v) 
    })
})
console.log(result2)



//并集
const arr5 = [1, 2, 3, 4, 5, 8, 9]
const arr6 = [5, 6, 7, 8, 9];
var result3 = arr5.concat(arr6.filter(v => {return !arr5.includes(v) }))
console.log('result3:'+result3)
const a7 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 },{ name: 'name5', id: 5 }];
const a8 = [{ name: 'name1', id: 1 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }];
var result4 = a7.concat(a8)
console.log(result4)
var obj = []
var result41 = []
result41=result4.reduce(function (prev, cur, index, arr) {
    obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
    return prev;
  }, []);
console.log(result41)