
//用户只要在 viewsAy 文件夹下创建 页面级组件(动态)  --自动生成路由信息表



//vite -- 提供的全局方法  -- 路径import.meta.globEager


// const files: any = import.meta.globEager('./pages/*.ts')
const files: any = import.meta.glob('../../viewsAy/**/*index.vue', { eager: true })
console.log(files, 111);
let ayRouteList: any = []

Object.keys(files).forEach((fileName) => {
  let name = fileName.replace(/\..\/|\.vue/g, '').replace(/index/, '').replace(/viewsAy/, '').replace(/\//g, '')
  // console.log(fileName, 222); //../../viewsAy/orderM/index.vue 222
  // console.log(name, 555);    //orderM 555

  ayRouteList.push({
    path: name,
    name: name,
    component: () => import(fileName),
  })
})


export default ayRouteList