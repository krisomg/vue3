//创建路由表

import { createRouter, createWebHistory } from 'vue-router'
import ayRouteList from "./pagesAy/index";


//动态获取打 路由模块化中的路由信息 --
//自动帮我 -- 获取到pages下面写的文件里面写的路由信息
//在 webpack中 用 require.context
//在viet中  用 import.meta.globEager('./*.ts')
// const files: any = import.meta.globEager('./pages/*.ts')
const files: any = import.meta.glob('./pages/*.ts', { eager: true })
const untilFuns: any = []
// console.log(files); // 得到{./pages/home.ts: ƒ, ./ pages / play.ts: ƒ }  对象的属性就是我们需要的文件的路径
Object.keys(files).forEach((fileName) => {
  // const name = fileName.replace(/\.\/|\.ts/g, '');
  // console.log(name);  //pages/home pages/play

  untilFuns.push(files[fileName].default)
})
// console.log(untilFuns, 111);   //  [{…}, {…}, {…}]  获取到pages下面的 // { path: 'home', name: 'Home', component: ƒ }等3个


//2 创建路由表 -- 根据路由信息找到组件 关系表

//在工作中写项目   页面组件很多  
//根据模块进行抽离 

let routes = [

  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../views/Login/ayindex.vue') },
  {
    path: '/layout',
    redirect: '/layout/home',
    //路由懒加载  特点
    //用户首次进入项目 不会加载   这个采用路由懒加载的组件代码  只有用户进入到这个页面
    //组件菜会加载这个组件代码
    //本质 promis 异步方法来进行处理
    component: () => import('../layout/index.vue'),
    //  嵌套路由的特点 
    children: [
      // {
      //   path: 'home',
      //   name: 'Home',
      //   component: () => import('../views/Home/index.vue')
      // }
      ...untilFuns,
      //实现了页面路由信息一一对应， -- 动态获取路由信息--如果需要添加路由信息 ，只需要在pages下添加XX.ts 即可
      ...ayRouteList
    ]
  },

]


//3 创建路由实例对象 -- 底层方法
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// console.log(router);

export default router  //需要到 main.ts 中进行注册-- 如果不注册。在这个项目的.vue 文件
//不能使用 import{useRouter,useRoute} from 'vue-router'
