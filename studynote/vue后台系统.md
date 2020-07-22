路由守卫：(路由跳转时，判断是否存在token)

​	router.beforeEach( (to,form,next) => {

​		const  isLogin = locaStorage.tokenName  ? true  : false   (设置登录状态，如果token存在，则为true)		

​		if(  to.path == './Login'  ||  to.path == './register'){    (如果请求的页面是登录或者注册，则让请求通过)

​			next()   (可以正常访问)			

​		}else{

​			isLogin ? next()  : next('./Login')   ( 如果isLogin是true，则正常跳转，如果是假则跳转到登录页面)

​		}

​	})





#### 按需加载  element-ui

安装主体 npm i element-ui -S

插件 npm install babel-plugin-component -D

babel.config.js  修改为：

module.exports = {

  presets: [

​    '@vue/cli-plugin-babel/preset'

  ],

  "plugins": [

​    [

​      "component",

​      {

​        "libraryName": "element-ui",

​        "styleLibraryName": "theme-chalk"

​      }

​    ]

  ]

}