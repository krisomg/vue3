

//实现路由守卫

// 路由守卫是路由实例对象里面的 引入router


import router from "./index";
//引入路由进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


//全局进度条的配置
NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 1000,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


//  1.前置路由守卫
router.beforeEach((to, from, next) => {
  //进到页面 此时添加路由进度条效果
  NProgress.start()

  //判断内部页面和外部页面
  beForePages(to, next)

})



//当进入到这个页面 -- 后置路由守卫
router.afterEach(() => {
  NProgress.done()
})


// 3 将这个代码在main.js 中引入  import './router/routerBeforeEach'    才能执行 


//外部路由表 =》 你的项目有多个外部页面，不用登录也能看的
let noLoginPages = [
  '/',
  '/login'
]
const beForePages = (to: any, next: any) => {
  // console.log(to, 55);
  if (noLoginPages.findIndex((item) => item == to.fullPath) > -1) {  //就是表示外部页面
    next()
  } else { //内部页面
    //判断token
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
}