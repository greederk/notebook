原生ajax

var ajax = new XMLHttpRequest()

ajax.open('GET','http://127.0.0.1:8018')

ajax.onreadystatechang = function(){

​	if(ajax.readyState == 4){

​		if(ajax.status == 200){

​			xxxxxxxx  ajax.responseText

​		}

​	}

}

ajax.send(null)





#### ###栈

是一种数据结构，具有后入先出的特点

push()、pop() 和 peek() 是栈的 3 个主要方法，但是栈还有其他方法和属性。clear() 方法 

清除栈内所有元素，length 属性记录栈内元素的个数。我们还定义了一个 empty 属性，用 

以表示栈内是否含有元素，不过使用 length 属性也可以达到同样的目的



#####JavaScript 中的对象

javascript是一种面向对象的语言，对象简单的说就是包含了一堆属性和值得集合，函数也是其中一种特殊的对象。对象的值有三种属性（原始类型（null,boolean,nember,undefined,string,symbol,），对象类型，函数类型）

v8内部实习函数可调用特性：v8为函数添加了两个隐藏属性（name,code),name就是函数名，如果是匿名函数则为anonymous,code就是函数代码，以字符串形式存储在内存中，当v8执行到函数调用时，会从函数对象中取出code值，解释执行code

函数的作用域链和闭包的产生原因：

在v8执行一个函数时，会为它维护一个作用域链，在函数体中使用了某个变量，但是在这个函数中没有定义，就会沿着作用域链去外部查找改变量，

function foo(){

​	var t1 = 0;

​	function bar(){

​		var t2 = 1;

​		var t = t1 + t2;

​	}

​	return bar;

}

foo()

解析：当函数内部使用了一个外部的变量，使用这个函数进行赋值，传参，或者返回值，需要保证这些被引用的参数是存在的，如上，即使foo函数执行结束了，t1变量也不能被销毁（产生内存泄漏），因为bar函数引用了该变量，	把这种将外部变量和函数绑定的方式叫做闭包，

