//路由信息
export default {
  path: 'home',
  name: 'Home',
  meta: {  //用来面包屑
    title: ['首页']
  },
  component: () => import('../../views/Home/index.vue')
}
