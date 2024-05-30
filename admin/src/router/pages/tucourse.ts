//路由信息
export default {
  path: 'tucourse',
  name: 'Tucourse',
  meta: {  //用来面包屑
    title: ['课程管理', '图文课程']
  },
  component: () => import('../../views/Tucourse/index.vue')
}
