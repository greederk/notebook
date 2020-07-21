#### ####tag1  javascript基础

​	javasctript的实现：包含了三个对象（ecma(js语法层),dom,bom）

​	ecma:（规范）定义了js语言的基础，规定了JS的组成部分（语法，类型，句子，关键字，保留字，对象）

​	dom:(文档对象模型 Document Object Model)   dom把整个页面映射为一个多层节点结构（树形），添加了鼠标事件，用户页面操作事件

​	bom:(浏览器对象模型 Browser Object Model)  浏览器对象，包含了一些关于操作浏览器的扩展（弹出新浏览器窗口，移动，缩放，关闭，提供浏览器详细信息的navigator对象，对象cookies支持）  

#########tag2   html中引入js

​	<script>  :通常放在body的内容之后，避免加载时间过长影响浏览器响应速度

#### ####tag3   js语法

​	3.1：js的函数名，变量名，对象名和操作符都会区分大小写

​	3.2：标识符，函数或者变量，属性的名字，第一个字符必须是字母，下划线-，$

​	3.3:注释    单行：//     多行：  /*****/

​	3.4:严格模式，在代码顶部添加’use strict‘   ，为js定义不同的解析与执行环境，对不确定的行为会得到处理，不安全的操作会抛出错误。

​	3.5:变量：ecma的变量时松散数据类型，可以用来保存任何类型的数据，如果定义了未初始化，则会保存一个特殊的值（underfined)   ;在函数中定义的变量，在函数外访问是undefined;但是如果函数中没有写var关键字，则这个变量时全局变量，在函数外部可以访问（不推荐，难维护，代码混乱，在严格模式会抛出错误）

​	3.6：数据类型：简单数据类型（undefined,null,number,string,boolean,symbol）复杂数组类型Object（引用类型）

​		简单数据类型保存在栈内存中，是按值传递，可以直接操作保存在内存中实际的值

​		复杂数据类型保存在堆内存中，js不能直接访问内存中的位置，不能直接操作对象的内存空间，在操作对象时，是在操作对象的引用而不是对象本身，所以引用类型的值是按引用传递的。(当复制一个保存对象的变量时，操作的是对象的引用，但是为对象添加属性是操作的是实际的对象)



​	3.7：typeof 值     ，对一个值使用typeof时，会得到它的数据类型 （特殊，typeof 对象或者 null  == object；typeof  函数  == function）

​	3.8:数据类型特殊点  null == undefined  

​	隐式转换    布尔类型    Boolean(任何非空字符串)  =》 true    Boolean(0和NaN) => false  

​	数值转换：

​		将非数值转换为数值 Number()   parseInt()  parseFloat()



​	3.9:string 类型

​		特殊的字符字面量   ’\n  换行‘ ； ’   ‘\b 空格’    ‘\r 回车’   '\t 制表'   ‘\\ \  ’

​		转换字符串    toString()

​	3.10:操作符

​		一元操作符   ++num ,  --num; num++, num--      方法：符号在前面就先加（减）

​		布尔操作符   ！逻辑非，将值转换为布尔值，然后再取反

​		逻辑与 &&   true &&true ==> true    true&&false ==> flase

​		逻辑或||  true|| false ==> true

​		求余   %     26%5 = 1

​		条件操作符（）  num1>num2 ? num1 : num2

​	3.11  语句

​		if(){}   if(条件（条件可是任意表达式，会自动调用Boolean（）将结果转为布尔）)

​		do{} while()      while(条件)   与if语句不同是do的循环体代码最少会执行一次

​		while(){}   前测试循环语句  只有当条件满足时，才会进入循环体

​		for(){}    前测试循环语句  

​		for( propetry in expression){} 枚举对象的属性

​	3.12 退出循环体的关键字

​		break:退出整个循环，continue:退出本次循环，进行下一次循环

​	3.13  函数 

​		由function关键字声明，如果存在return关键字，则后面的代码不会执行，立即返回。

​		注意：不能把函数名和参数命名为 eval  ,arguments;

#### ####4变量，作用域

​	4.1变量

​	js的数据类型包括简单数据类型（按值传递）6种（number,string, null,undefined,boolean,symbol） 和复杂数据类型（按引用传递）object;

​	复杂数据类型保存在堆内存中，js不能直接访问内存中的位置，不能直接操作对象的内存空间，

 	在操作对象时，是在操作对象的引用而不是对象本身，所以引用类型的值是按引用传递的。

​	(当复制一个保存对象的变量时，操作的是对象的引用，但是为对象添加属性是操作的是实际的对象，两个对象都指向同一个对象，当一个改变时，另一个也会改变)

​	参数传递：按值传递，把被传入的值赋值给参数

​	4.2：作用域，在es6中出现了let ,块级作用域； 

​	为什么出现？在if  和for 中没有块级作用域，他们中声明的变量会变成全局变量；在if或者for中var声明的变量会进行提升，覆盖外部变量，所以出现了let,在if或者for中使用let的变量是块级变量，不会进行作用域提升。



########5引用类型

​	5.2：数组

​		var arr = new Array()

​		方法：  Array.isArray(val)    判断某个值是不是数组   

​		排序方法：   arr.reverse()     数组翻转       

​		顺时针排序   function sort(val1,val2){ return val1>val2 }  该变为val1<val2  则是逆时针排序

​	      	数组合并   	var arr1=arr.concat()   

​		综合操作方法   splice()        都会改变原始数组，返回的是被改变的项

​			删除    arr.splice(a,b)       删除 a+ 下标开始   ，删除b个数量

​			插入   arr.splice(a,0,c)     从a+下标开始，删除0个元素，c是插入的项，可以插入任意多项

​			替换   arr.splice(a,b,c)     从a+   下标开始，b替换原项目的数量，c替换的元素，可以是任意数量

​		数组查找   indexOf()        查找指定的项，返回的是下标，如果没有则返回-1    ，可选第二参数从第几项开始查



​		迭代方法：   

​				every()        arr.every(function(item,index.array){  return     })        对数组的每一项进行判定，如果全部为真，则返回结果是true，

​				filter()         arr.filter(function(item,index.array){ return }  )            对数组的每一项进行过滤，返回符合条件的新数组 	

​				forEach()   arr.forEach(function（item,index){}})               对数组的每一项进行操作，没有返回值，类似for循环的操作

​				map()     arr.map(function(item,indx){})     返回对每一个项进操作后的新数组

​				some()   arr.soem(function(item,index){})     对每一项进行操作，只要有一项是true，则返回结果是true

​		归并方法；
​			arr.reduce(function(prev,cur,index.array){return } )     prev是第一项，cur是第二项    把计算的返回值传给prev,依次到最后一项  



​	5.3Date   时间函数

​		var dateUs = new Date()

console.log(dateUs)   //获取到时间比北京时间少8h

console.log('getFullYear:'+dateUs.getFullYear())   //获取年份

console.log('getMonth:'+dateUs.getMonth())             //获取月份，使用时需要+1

console.log('getDate:'+dateUs.getDate())            //获取日期

console.log('getDay:'+dateUs.getDay())             //获取星期，0-6，0时星期天

console.log('getTime:'+dateUs.getTime())            //获取时间戳，从1970-现在的毫秒数

console.log('getHours:'+dateUs.getHours())           //获取当前小时数

console.log('getMinutes:'+dateUs.getMinutes())       //获取当前分钟数

console.log('getSeconds:'+dateUs.getSeconds())       //获取当前秒数

console.log('tolocaleDateString:'+dateUs.toLocaleDateString())     //获取日期格式   2020/6/23

console.log('tolocaleTimeString:'+dateUs.toLocaleTimeString())     //获取时间格式  上午11:12:54

console.log('tolocaleString:'+dateUs.toLocaleString())             //获取日期和时间格式  2020/6/23   上午11:12:54



​	5.4RegExp    正则表达式

​		匹配支持   g (全局)  i (不区分大小写)   m（多行模式）   在不设置/g的情况下每次匹配都会返回相同的值，

​	//RegExp  正则表达式   

var reg =  /me/gi

console.log(reg)

var str = 'comeandgetit'

//正则实例方法exec()      reg.exec(str)有一个返回结果res,res有index,input属性, 如果没有匹配则返回null,   index是匹配下标，input是目标

var res = reg.exec(str)

console.log(res,res.index)



​	5.5function

​		函数在js中也是一个对象，因此函数名也是一个指向函数对象的指针

​	 	声明式函数存在作用域提升，

​	5.5.4函数的属性   arguments,this 

​		arguments.callee == 函数名	

​		this,谁调用函数，this就指向谁。在网页的全局作用域中调用函数，this指向window。在严格模式下，除非明确把函数添加到某个对象下调用，否则this都是undefined;

​		length     函数的length属性，可以获取函数的形参个数

​		prototype属性保存了引用类型的所有属性和方法，不可被遍历

​		call(),apply()    bind()    都能改变函数内this的指向    bind会创建一个函数实例