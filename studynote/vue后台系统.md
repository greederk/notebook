路由守卫：(路由跳转时，判断是否存在token)

​	router.beforeEach( (to,form,next) => {

​		const  isLogin = locaStorage.tokenName  ? true  : false   (设置登录状态，如果token存在，则为true)		

​		if(  to.path == './Login'  ||  to.path == './register'){    (如果请求的页面是登录或者注册，则让请求通过)

​			next()   (可以正常访问)			

​		}else{

​			isLogin ? next()  : next('./Login')   ( 如果isLogin是true，则正常跳转，如果是假则跳转到登录页面)

​		}

​	})