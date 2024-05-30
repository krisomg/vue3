
// 防抖方法
export function debuce(fn: any, time = 500) {
  let timer: any = null

  //闭包
  return function (...argu: any) {
    if (timer) { //如果有值 说明已经执行了定时器  此时清除上次的定时器
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      //用户停止输入了
      fn(...argu)
      timer = null
    }, time);
  }
}
