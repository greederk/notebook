// node 的模块化

/*

*node的模块分为两种，系统模块（核心）和自定义模块（文件模块）

*自定义模块：把单独的更能抽离出来成一个文件，通过exports或者module.exports暴露出去，

*在外部通过require（文件地址）来获取暴露的对象

*通过exports暴露的对象  export.a = b, require x = ./  , 使用时  x.a = b;

*

*通过module.exports 暴露的对象    module.exports  obj;  require x = ./ ; 使用时   x = obj;

*

*自定义模块有两种，用户自己定义使用，加载第三方模块（包）

*

*完全符合commonjs规范的包目录应该包含下面4个目录文件    包由许多个自定义模块互相依赖组成；

*packate.json包描述文件

*bin存放二进制文件的目录

*lib存放js代码目录

*doc存放文档目录

*******node.js 几乎所有的包都放在了npmjs网站上，可以通过npm命令下载。

*生成package.json文件方式   npm init --yes

*

*npm install xxx --save   --save 能把这个安装信息写入到package.json文件的dep中

*

*

*/

/*包大全

*md5   加密字符

*silly-datetime   格式化日期

*

*

*

*

*

*

*/

/****

 * * 系统模块

 * http

 * url

 * fs

 * *

 * *

 * *

 * *

 * *

 * */

 /**

  * **  fs模块

  * var fs = require('fs')

  * 检测是文件还是目录

  * fs.stat('xxx指定文件名称',(error,stats)=>{

  *     if(error){

  *         console.log(error)

  *     }else{

  *         console.log(`'文件:'+${stats.isFile()}`)    

  *         console.log(`'目录:'+${stats.isDirectory()}`)    

  *     }

  *     

  * })

  * **

  * 创建目录

  * fs.mkdir("xxxx指定目录名称",(error)=>{

  *     if(error){

  *         如果失败了

  *     }eles{

  *         创建目录成功

  *     }

  * })

  * **

  * fs.writeFile('xxx指定文件名称','xxxx指定写入内容',(error如果失败了，失败时调用)=>{

  *    如果目标文件不存在会创建，如果存在就会覆盖原文件内容

  * })

  * **

  * fs.appendFile('xxx','xxx内容',(err)=>{

  *     追加文件内容

  * })

  * **

  * fs.readFile('xxx文件名称',(err,data成功返回读取文件的内容)=>{

  *     console.log(data.toString())

  * })

  * **

  * fs.readdir('xxx目录名称',(err,data成功时返回的目录内容){

  * })

  * *

  * **

  * fs.rename('xxx','xxx要改成的目录',(err)=>{

  * 

  * })

  * **

  * fs.rmdir('xxx',(err)=>{

  *     删除指定目录

  * })

  * 

  * fs.unlink('xxx',(err)=>{

  * })

  * 

  * 

  * 

  * 文件流

  * 流读取

  * var stream = fs.createReadStream('指定文件')

  * 当文件比较大时，会分多次读取，

  * var str = '';   用于获取读取的数据

  * var count = 0 ; 用于获取读取的次数

  * 

  * stream.on('data',(chunk)=>{

  *     'data' 读取时的钩子

  *     chunk是读取到的数据，

  *     str += chunk;

  *     count += 1;

  * })

  * stream.on('end',(chunk)=>{

  *     'end'   读取完成时的钩子

  *     console.log(str)   获取读取完成的数据   count  读取完成时的读取次数

  * })

  * stream.on('error',(err)=>{

  *     err 读取失败的钩子

  * })

  * 

  * 

  * 写入流

  * var stream = fs.createWriteStream('指定文件')

  * 

  * var str = '写入的内容'

  * stream.write(str,'urt8')        

  * stream.end()   标记文件末尾

  * stream.on('finish',function(){

  *     'finish'所有文件被写入完成时触发

  * })

  * stream.on('error',function(){

  *     'error' 写入失败时触发

  * })

  * 

  * /