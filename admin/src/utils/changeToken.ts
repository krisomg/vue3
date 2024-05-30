import { getNewToken } from "../http/api/Tucourse";
import service from '../http'
function changeToken(res: any) {
  return getNewToken().then(rs => {
    if (rs.code == 200) {
      //将最新的token存放到本地
      sessionStorage.setItem('token', rs.token)

      // 发送用户之前出现401 的请求
      // 1。我怎么知道是哪个401请求 --后端 401会返回这个接口的信息
      //methods:'' , url ,参数 -- 重新请求

      // let conf = { method: 'post', url: '/TucourseList', data: { token: '12345' } } //后端给的
      let conf = getConfig(res)

      service(conf).then(rs => {
        console.log(rs, 666999);
        return rs
      })
    }
  })
}

function getConfig(config: any) {
  if (config.conf.method == 'post') {
    return {
      method: 'post', url: config.conf.url, data: config.conf.data
    }
  } else {
    return {
      method: config.conf.method, url: config.conf.url, params: { params: config.conf.data }
    }
  }
}

export default changeToken