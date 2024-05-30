import axios from 'axios'
import changeToken from "../utils/changeToken";
//创建axios 实例
let service = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/4365439-0-default',
  timeout: 6000
})


//创建 拦截器

// 请求拦截器  添加token -- 
service.interceptors.request.use( // 两个参数 =》方法  （1） 成功的方法  （2）失败 的方法
  (config) => {  //参数 =》 axios 发送网络请求的配置对象
    //后端 -- 整个请求的对象-- header['token']     --内部接口和外部接口
    config.headers['token'] = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
    return config
  },
  err => {
    return console.log(err);
  }
)

//响应拦截器
//解决token过期 第一种 返回到登录页面 重新获取token
// service.interceptors.response.use(
//   (res) => {
//     // 处理状态码
//     console.log(res.data, 111);

//     if (res.data.code == 200 || res.data.token == 12345) {
//       return res.data
//     } else if (res.data.code == 401) {
//       window.location.href = '/login'
//         }
//   },
//   err => {
//     return console.log(err);
//   }
// )

service.interceptors.response.use(
  (res) => {
    // 处理状态码
    console.log(res.data, 111);

    if (res.data.code == 200 || res.data.token == 12345) {
      return res.data
    } else if (res.data.code == 401) {
      // 1.获取到新的token
      //调用接口
      // return changeToken(res.data)
    }
  },
  err => {
    return console.log(err);
  }
)


export default service