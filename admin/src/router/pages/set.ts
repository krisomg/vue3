//路由信息

export default {
  path: 'set',
  name: 'Set',
  meta: {  //用来面包屑
    title: ['设置']
  },
  component: () => import('../../views/Set/index.vue')
}
