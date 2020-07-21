####第一章
	JavaScript基本语句
判断语句
if(){}  else{}
switch(){
  case '':
  	xxx ;
  	break;
  default:
  xxxx;
}
循环语句
for(let i = 0; i< xxxx.length;i++){}
while(条件){
  xxx
}     >>>>>如果希望在条件为真时执行，就可以选择while循环

	javascript作用域
var 声明的变量是全局变量，可以在全文访问，如果在定义之前使用，则获得结果是undeifined
let 具有代码块级作用域，不能在声明之前使用，适合在局部中使用，减少内存占比

	javascript的递归函数
在一个函数中调用自己，这就是递归函数。当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起。

####数组
	定义
是一种特殊的对象
	由字符串生成数组
str.split()
	对数组的整体操作
当把一个数组赋给另外一个数组时，只是为被赋值的数组增加了一个新的引用。当
你通过原引用修改了数组的值，另外一个引用也会感知到这个变化

​	数组的可变元素

push() 和 unshift()。  向最后和最前添加元素

pop() 和shift()    向最后和最前删除元素

splice() 向数组的任意位置添加元素  参数：

• 起始索引（也就是你希望开始添加元素的地方）； 

• 需要删除的元素个数（添加元素时该参数设为 0）； 

• 想要添加进数组的元素

reverse（）数组翻转

数组排序

function compare(num1, num2) { 

return num1 - num2; 

}

var nums = [3,1,2,100,4,200]; 

nums.sort(compare); 

print(nums); // 1,2,3,4,100,200