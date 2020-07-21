###### webpack的出现

​	在互联网早期，页面并不复杂，使用iframe 和 falsh 和 服务器进行交互， 但是ifreme和falsh过于复杂，没有推广，在04年，谷歌推出了Gmail，XMLHTTTREQUEST 技术开始流行，他是使用方便，兼容性良好的服务器通信接口。从此开始，我们的页面开始玩出各种花来了，前端一下子出现了各种各样的库，[Prototype](http://prototypejs.org/)、[Dojo](https://dojotoolkit.org/)、[MooTools](http://mootools.net/)、[Ext JS](https://www.sencha.com/products/extjs/)、[jQuery](https://jquery.com/)…… 我们开始往页面里插入各种库和插件，我们的 js 文件也就爆炸了。下载速度慢，对 js 文件的压缩和合并的需求越来越强烈，当然这里面也有把代码混淆了不容易被盗用等其他因素在里面

###### webpack4进阶

npm install 的作用：把代码上传到github时，一般都会在 `.gitignore` 里指定忽略 node_modules 目录和里面的文件，别人拉取的代码没有node_modules文件，通过npm install 它会读取 `package.json` 中的 `devDependencies` 和 `dependencies` 字段，把记录的包的相应版本下载下来。