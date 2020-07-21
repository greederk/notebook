###### 特点： 

​	以事件驱动，同js一样，以客户的操作，触发事件去调动资源处理。

实现异步的方式： 事件回调      事件监听      发布/订阅 （类比事件监听，但能获取所有的事件）

在终端中运行js文件     node    js文件名

###### node搭建环境：

​	mongdb



node 基础>>>>>>>>



控制台输出：

 console.log('xxx')   console.error('输出错误')   node app.js 2 > error.log  ===> 将错误日志保存到error.log文件夹

console.dir()  输出对象的内容

console.time() console.timeEnd()  两个自定义（任意字符串）参数必须相同，输出之间的代码块的执行耗费时间毫秒数

console.trace('自定义任意字符串')  查看当前栈信息

console.assert('表达式') 对表达式的结果进行评估，如果为false则抛出异常

全局对象####

global   包含了如下属性

global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {

    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }

其中setTimeout(function(){},1000), setInterval() 和js的效果一样

clearTimeout(xxx) 取消指定的定时器的回调函数执行

定时器对象的unref方法会停止该定时器调用，（会对程序性能产生负面影响）

定时器对象的ref方法会恢复该定时器的调用



与模块相关的全局函数，对象####

require() 

使用require函数来加载模块

var foo = require('../foo.js')

or     var http = require('http')

require()函数使用一个参数，值可以是完整路径的模块文件名，或者模块名

延伸：导入导出

b.js  var test = 'this is test'   exports.testmodules = test

a.js var textM = require('./b.js')  console.log(textM.testmodules)

ps： 在加载模块时，会运行模块文件中的每一个代码

require.resolve() 查看完整模块名 

require.cache  定义了一个对象，包含缓存了已被加载的所有模块，



__filename __dirname变量

在任何模块内部，可以使用__filename 获取当前模块文件带有完整绝对路径的文件名

__dirname 与filename相比，只会返回当前.js模块文件的父级文件夹



node事件处理机制：

EventEmitter类的各种方法：##img/node/eventemitter.png

EventEmitter本身拥有两个事件newLIstener和removeListener

当事件对象取消处理函数时都将触发removeListener事件：

emitter.on('removeListener',function(e,f){

e==被取消的事件函数名，f==>被取消的事件处理函数

})



在命令行窗口使用调速器：

运行 node debug  x.js  会进入调试状态，将执行在第一行代码之前暂停

输入c / cont  (continue) 将执行





4.1 核心模块和文件模块

在node.js中，模块是非常重要的概念，他允许我们将第三方类库引入到应用程序

使用exports.x  导出

require()导入，使用y.x获取

当被导出的对象是一个类时，可以使用module.exports = x导出



8.1http服务器

var http = require('http')

var server = http.createServer(function(req,res){

​	req.writeHeader('200,{'Content-Type':'text/html'}')

​	req.write('<head><meta charset="utf-8" /></head><body><span>空白窗口</span></body>')

​	req.end()

})

server.listen(8089,'127.0.0.1')

server.on('connection',function(){

//当客户端和服务器连接时要执行的操作



})

//浏览器在访问服务器时会发出两次请求，url,favaicon.ico

//可以设置服务器的超时时间setTimeout,当超过时间时，客户端不能继续利用本次已建立的连接，下次再向http发出请求时必须重新连接。默认超时为120s

server.setTimeout(time,callback)

server.on('timeout',function(socket){

//当超时时执行的回调函数，socket是监听客户端请求的socket对象

})

server.timeout = 120000   直接设置服务器超时时间为120s



 if(req.url !=='favicon.ico'){

​        var out = fs.createWriteStream('./request.log')

​        out.write('客户端请求的方式:'+req.method+'\r\n')

​        out.write('客户端请求的url字符串为:'+req.url+'\n\r')

​        out.write('客户端请求头对象为:'+JSON.stringify(req.headers)+'\n\r')

​        out.end('客户端请求http版本是'+req.httpVersion)

​    }



http的data和end事件####

 if(req.url !== 'favicon.ico'){

​        req.on('data',function(data){

​            console.log('服务端接收到的数据是'+decodeURIComponent(data))

​            var out = fs.createWriteStream('../log/request.log',{

​                'flags  ':'as+'

​            })

​            out.write('客户端请求的数据：'+decodeURIComponent(data))

​        })

​        req.on('end',function(){

​            console.log('客户端请求数据已全部接收完毕')

​        })

​        

​    }



字符串查询#####

一个完整的url地址，从？之后就是查询字符串，可以使用如下方法，

对其进行转化

url.parse()      ===>./img/node/url.parse()方法解析地址字符串.png



服务端响应流#######

res.writeHead()  可以设置多个响应头参数， =====》  img/node/writeHead().png

也可以用setHeader(name,value)  单独多次设置相应流，name是相应字段，value是值

res.getHeader('name')  获取指定字段的值



res.setTimeout(time,[callback])   如果在指定时间内服务器没有做出反应（可能是网络连结，服务器故障，防火墙，），则相应超时，

res.on(‘timeout，function(){})



8. 2  http 客户端 

   8.2.1 向其他网站请求数据



8.2.2 向本地服务器请求数据



8.3 https 和 http

http 服务器与浏览器是明文数据传输，https是经过ssl安全加密的密文传输。https通常是443端口



9

dns

var dns = require('dns')

dns.resolve('www.google.com','A',function(e,r){

​    if(e) console.log(e)

​    else console.log(r)    得到的是谷歌网站的iPv4地址

})