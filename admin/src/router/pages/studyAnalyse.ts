//路由信息

export default {
  path: 'studyAnalyse',
  name: 'StudyAnalyse',
  meta: {  //用来面包屑
    title: ['数据分析模块', '学习分析']  //嵌套的
  },
  component: () => import('../../views/StudyAnalyse/index.vue')
}
