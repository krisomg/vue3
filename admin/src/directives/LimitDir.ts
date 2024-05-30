//按钮级自定义指令 处理的方法





// //创建一个全局自定义指令 在main.ts 中创建
// app.directive('focus', {
//   //几个属性
//   mounted: (el) => {
//     el.focus()
//   }
// })




//创建自定义指令

//插件机制 --app.use

//app.use（方法）  -- 会立即执行，并且这个方法的第一个参数 就是当前vue的实例
// export function limitAn(app: any) {
//   console.log(app, 8886);
//   //创建自定义指令
//   app.directive()
// }

//app.use（{对象的话}） -- 一定要写一个属性，install 他的属性值--是一个方法，并且这个方法的第一个参数 当前vue的实例

//写一个权限的自定义指令表 ---他也是一个插件

// let limitAns = [
//   //首页的按钮级权限的  
//   {
//      pages: 'home', //这个页面有多少个按钮级权限都清除
//     an1:['boss'],
//     an2: ['boss', 'zhuguan'],
//     an3: ['boss', 'zhuguan', 'yuangong']
//   } 
// ]

function findLimits(dom: any, bind: any) {
  let show = bind.findIndex((item: any) => {
    return item == limit
  })
  if (show > -1) {

  } else {
    dom.remove()
  }
}

//存放数据
//我是直接在 页面中写按钮级组件 -- 这个按钮级组件，哪些权限可以看到，我就直接写到上面
function findLimit(dom: any, bind: any) {
  let show = bind.findIndex((item: any) => {
    return item == limit
  })
  if (show > -1) {

  } else {
    dom.remove()
  }
}


let limit = 'zhuguan'
export let limitAn = {
  install(app: any) { //app 当前vue的实例对象
    // console.log(app);
    app.directive('limit', { //limit自定义指令
      mounted: (el: any, bind: any) => {
        // console.log(el, bind.value); //  拿到  <button>员工</button>   ['home','boss']
        //没有  boss权限可以看到很多
        findLimit(el, bind.value)
      }
    })
  }
}

// 初体验 简单版
// let limit = 'boss'
// export let limitAn = {
//   install(app: any) { //app 当前vue的实例对象
//     console.log(app);
//     app.directive('limit', { //limit自定义指令
//       mounted: (el: any, bind: any) => {
//         console.log(el, bind.value); //  拿到  <button>员工</button>   ['home','boss']
//         //没有  boss权限可以看到很多
//         if (bind.value == limit) { //如果相等 就显示

//         } else { //如果登录的权限不是boss 那么就删除自己
//           el.remove()
//         }
//       }
//     })
//   }
// }