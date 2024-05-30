
export let layoutStore = {
  namespaced: true,//空间命名法
  state: {
    show: true  //layout页面 收缩与展示  true：代表目前是展开，显示收缩   false：表示目前是收缩，显示展开
  },
  getters: {

  },
  mutations: {
    changeShow(state: any) { //参数1 
      // console.log(state.show, 'before'); //true 'before'

      state.show = !state.show
      // console.log(state.show, 'after');//false 'after'
    }
  },
  actions: {

  },
}