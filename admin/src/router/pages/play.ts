//路由信息

export default {
  path: 'play',
  name: 'Play',
  meta: {  //用来面包屑
    title: ['课程管理', '直播']
  },
  component: () => import('../../views/Play/index.vue')
}
