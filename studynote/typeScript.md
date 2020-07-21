typescript : 是谷歌开发的javascript的超集，主要添加了静态类型

最终还是要编译成javascript来被文件引用。

编辑器中把ts编译成js的命令  ：

​	安装   npm install typesctipt -g

​	编写.ts  文件  ，终端输入命令 tsc 文件名   ，（热更新模式 tsc -w 文件名）

vscode编译器 自动配置成js设置  ：

​	在项目中  tsc --init  生成配置文件 config.json    找到OutDir: './js'  生成的文件放到同目录

初步使用体验： 对变量的限制很大，容易提示错误，定义变量时必须添加类型，使代码更规范，后期维护方便

如果用let 定义并赋值，后面不能用let 去重复定义并赋值，但是var可以

let 定义变量并赋值，这个变量可以被直接修改，但不能被再次定义



变量的类型不能被修改

ts的变量类型： 

​	boolean : 

​	number:

​	string:

​	数组array：定义数组的两种方式；限定了元素的类型

​		var  arr：number[] = [1,2,3] 

​		var  arr:Array<number> = [1,2,3]

​		如果有元素不是数字类型，会在编辑器汇中报错，但能编译到浏览器中运行

​	元组类型tuple： 上面的只能定义数组或者字符串，  不能同时出现，但元组类型可以指定每项元素的类型，如果每项的类型不匹配，会报错，var arr:[string,number] = ['123',22]



​	任意类型：any   不限类型，类似   var   arr=[]     ,值可以是任意类型

​				var  arr:any=[]	

​	

​	枚举类型：enum  :为变量设置为枚举类型，能更清楚的阅读代码。

​		enum   Color{ blue,red,  orange}       ||            enum  Color{blue=1, red=2,orange=3}

​			var   c1:  Color = Color.red         console.log(c1)    打印的c1是red的下标1     ||   2 

​			如果标识符没有赋值，那么值等于下标，否则等于具体值。



​	空和未定义类型   null   undefined  

​	var   str: undefined   

​	

一个元素可能是多种类型

​	var  a: number | null |  string     用| 把类型连接 



void   定义一个没有返回值的方法

​	function run():void {

​		console.log('gg' )   

}

如果方法有返回类型，可以指定返回值的类型

​	function run(): number {

​	return 12345

}

never 代表其他类型，包括了null和undefined  是从不会出现的值，用他声明的变量不能被改变

​	var a:undefined

​	a = null    会报错



​	var b:never

​	b=134    会报错



定义函数   function as(): number  {   return  12345       }

匿名函数   var   as =function(): string { return 'go' }

定义方法的传参类型    function go(name:string,age：number):string{

​	return 'zfc'

}

es5之前的方法参数的实参和形参可以不一样，数量不同，

但ts必须一样，负责需要配置 ：

function run(name:string,age?:number){

​	/添加？将其参数设置为可选参数，可传可不传/

}



剩余参数   function sum(...result:number[]):number{

var su = 0

for(let i = 0 ; i < result.length; i==)   {

​	sum += result[i]

}

return sum

}

su(1,2,3,4,5,6,7,8)

不管有多少实参，都以数组的形式传递给result，在...result前面还可以添加指定形参a:number,b:number,对应第一个和第二个实参。



方法的重载   es5中没有重载概念，重载是Java的，具有相同名字的两个或者多个方法，接收的参数不一样，并且后面的方法不会覆盖前面的函数，ts可以通过给参数定义不同类型，让函数具有重载特性

​	function retu(name:string):string;  可以暂时不写函数体

​	function retn(age:number):string;

​	function retn(say:any):any{

​	通过判断参数类型，执行不同的函数体

​	if(typeof str === 'string'){

​		return   'str'

​	}

}



关于ts中类；

​	es5中的类，构照函数和原型链  

​	function  Person(name,age){

​		this.name = name;

​		tihs.age = age;

​		this.run=function(){

​			alert(this.name+'运动')
​		}

​	} 

​	原型链的方法 Person.prototype.sex = '男'

​	Person.protype.work = function(){

​		alert(this.name+ '工作')

​	}

​	可以添加静态方法；

​	Person.getinfo=function(){

​		alert('静态方法')

​	}



​	es5中的继承：  原型链继承  ，对象冒充

​	function Web(){

​		Person.call(this)   // 在这里把person中的this指向为Web函数，相当于web函数具有了person函数的属性和方法，但是不能继承原型链上的属性和方法。解决方法： Web.prototype = new Person() 

​	}



但是会出现实例化子类的时候无法给子类传参：

​	Web.protorype = new Person()

​	var w1 = new Web('张三',20)

​	w1()     //  输出  undefined运动，  参数传递不到Web父类



解决的方法  组合继承

​	function Web(name,age){

​		Person.call(this,name,age)   //对象冒充继承，实例化子类可以给父类传参

​	}

​	Web.prototype = new person()

​	var w1  = new Web('张三'，20)   



ts中的类  关键字  class

​	class Person{

​		name1:string;

​		construstor(name:string){ //构造函数，实例化的时候触发的方法

​			this.name1 = name			

​		}

​		getname(name:string):string{

​			return this.name

​		}

​		setname(name:string):void{

​			this.name= name

​		}

​	}



​	var p = new Person('张三')

​	alert·（p.getname())    //  打印张三

​	p.setname('李四')   

​	alert(p.getname())    //打印李四



ts实现继承    extends    super

​	class person{

​		name1:string

​		constructor(name:string){

​			this.name1 = name

​		}

​		getrun(){

​			return   this.nam1+'跑步'

​		}

​	}

​	class Web extends  Person{

​		constructor(name:string){

​			super(name)   //super调用父类的构照函数，

​		}

​	}

​	var w  =  new Web('张武')



​	ts的类属性修饰词   ：

​		public    公有属性  在类里面，子类，类外面都可以访问，可以省略

​		protected  保护类型 在类，子类里面可以访问，外面不可以访问（ts中会报错，但是编译成js没问题）

​		private    私有类型   只能在父类中访问



​	ts的类方法修饰词  static  静态方法

​	class Per{

​		public  age:num

​		constructor(age:num){

​			this.age  = age

​		}

​		static   work (){   //定义静态方法，在静态方法里面不能访问这个类的属性，只能调用静态属性  static  age:num

​			alert（‘静态方法’）

​		}

​	}



ts的多态，属于继承  父类定义方法不去实现，有继承的子类去实现，每个子类表现不一样

​	

抽象类abstract和抽象方法用于定义标准，这个类不能别实例化，给子类提供基类

​	abstract  class Pro{

​		abstract  eat():any  //这个  抽象方法不用在这里实现

​	}

​	class Web extends Pro {

​		eat() {  //抽象类的子类必须实现抽象类的抽象方法

​		}

​	}



​	ts接口的概念，对动作和行为 规范和标准，限制子类的参数 对批量方法进行约束  关键字  interface  

​	属性接口   对传入的参数完全匹配定义的接口

​		interface   Fullname{

​			firstname:string

​			secondname:string

​		}

​		function web (name:Fullname){    //给传入参数定义接口

​			console.log(name.firstname + '-----'+name.secondname)			

​		}

web({   1用这种方法直接传入参数时，参数必须完全一致

firstname:'张',

secondname:'五'

})

//2  用下面这种方法时，可以包含其他参数，

var obj ={

​	age:10,

​	firstname:'张',

​	secondname:'无'

}

web(obj )

inteface   JIeko{

​	(key;string，value:string):string

}

var md5:JIeko =function(key:string,value:string):string{

​	return key+'---'value

​	} 



接口的类实现   class Web  implements  Person{}

泛型：解决接口，类，方法的复用性，对不特定数据的支持

定义泛型，  function per<T>(value:T):T{ 限定传入参数his泛型，返回也是泛型，他们是同一种类型  return value

} 

调用时  per<number>(12345)





ts中的模块，把公有的变量。。。单独抽离成一个文件，通过export 暴露，通过import引用里面的变量。。。

暴露    export{

a,//变量

getdata //方法

}

引用    import {  a,getdata as get } form './js/ts文件名'

每个模块只有一个  default  可以导出， exprot default  getdata

import getdata form '.js/ts'



命名空间  namespace  A{  自己写的代码}    如果有命名冲突和重复，使用命名空间包裹起来，就不会冲突,可以把命名空间当成一个模块暴露

​		namespace  B{  别人写的代码}

​	从A中访问B的方法   var c = new B.run('str')