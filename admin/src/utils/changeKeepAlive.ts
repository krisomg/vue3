

//我这里的方法 只需要 返回一个true和false


import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

let keepLists = ['play', 'tucourse']
export default function useKeeAlive() {

  let route = useRoute()

  const changeKeepAlive = (newVal: any) => {
    //根据路由--匹配到我们的组件--他是缓存组件还是实时更新组件
    let val = keepLists.findIndex((item: any) => {
      // console.log(newVal.fullPath);

      return `/layout/${item}` == newVal.fullPath
    })
    if (val > -1) {  //有值  缓存
      isKeep.value = true
    } else {
      isKeep.value = false
    }
  }

  let isKeep = ref(true)
  watch(route, (newVal: any) => {
    // console.log(newVal);
    changeKeepAlive(newVal)
  },
    {
      immediate: true,
      deep: true
    })



  return {
    isKeep
  }
}