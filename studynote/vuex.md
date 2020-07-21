vuex:   vue的状态（数据信息）管理共享

安装： npm install vuex --save

引入： import Vuex from 'vuex'

使用： Vue.use(Vuex)

创建vuex实例： const  store = Vuex.Store({

​	保存的数据:   state:{

​		count: 0

​	}

​	计算属性：   getters:{

​		自定义操作state保存的数据是方法,传递一个数据库（state）参数： getStateCount（state）{

​			返回需要通过计算得到的值  return  state.count+1

​		}

​	}

​	修改state（数据库）中保存的数据   mutations:{

​		对具体的数据的修改方法,传递一个数据库state参数： addCount(state){

​			state.count = state.count++

​		}

​	}

​	

​	Action 提交的是 mutation，而不是直接变更状态(不同于mutations的直接改变数据，而是操控mutations来改变数据)，类似于methods，可包含任意的异步操作  actions:{

​		方法： addFun (context){   //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象,context参数相当于$sotre, 可直接调用context.state; context.getters

​			context.commit('addCount')  //传递一个在mutations中保存的方法名，直接调用这个方法

​		}				

​	}

})

导出vuex  export default store

在main.js 中 引入store  :  import store from './store'

new Vue({

el:'#app',

store,

})

在子页面中使用this.$store.state.count  可以得到0；

在子页面中使用this.$store.getters.getStateCount  可以得到1；

mutations 的使用方法： 子页面中：

​	methods:{

​		changeCount(){

​			this.$store.commit('addCount')  //传递一个在mutations中保存的方法名，直接调用这个方法

​		}

​	}

actions的使用方法 ： 

methods:{

​		changeCount(){

​			this.$store.dispatch('addFun ')  //参数是保存在actions中的方法名，相当于this.$store.commit('addCount')  把commit提交mutations，修改为使用dispatch来提交actions   ；  actions的实现最终是通过mutations；

​		}

}

简写： 把 this.$store.state.count   =>   count

引入  import { mapState,mapActions,mapGetters }  form 'vuex'

computed：{

...mapState({

​		count: state=> state.count //  页面使用count是，就可以有直接使用count 代表this.$store.state.count

​	})

}

mutations和actions的区别， mutations是同步执行的。