import { createStore } from 'vuex'
import { layoutStore } from './modules/layoutStore';

//创建仓库

let store = createStore({
  // state: () => {  //存放数据 -- 这个数据是响应式的 -- vue.reactive进行代理
  //   nums: 1
  // },
  // getters: {  //相当于 计算属性 ，具有缓存机制

  // },
  // mutations: { //定义方法 唯一修改state 中的数据，写同步，订阅发布者模式

  // },
  // actions: { //就是获取到异步的数据，在触发mutations中定义方法

  // },
  modules: { //当我们项目很大，有很多的模块
    layout: layoutStore

  }
})

export default store //暴露出去  然后要在main.ts中引入注册
