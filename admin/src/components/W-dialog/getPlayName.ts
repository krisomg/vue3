import { ref } from 'vue'

export function changeSearchName(val: any) {
  const inputTitle = ref(val ? val.name.title : '')

  const getPlayname = (val: any) => {
    console.log(val); //拿到输入框内容

  }

  // 返回一个变量和方法
  return {
    inputTitle, getPlayname
  }
}