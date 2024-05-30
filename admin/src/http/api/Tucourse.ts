import service from '../index'
//账号
interface TucourseS {
  code: number
}

export function TucourseList(): Promise<TucourseS> { //(data: loginData) 传的参数   Promise<loginData> 返回数据的类型
  return service.post('/TucourseList', { token: sessionStorage.getItem('token') })
}

//获取到最新的token
interface getNew {
  code: number,
  token: any
}
export function getNewToken(): Promise<getNew> { //(data: loginData) 传的参数   Promise<loginData> 返回数据的类型
  return service.get('/getNewToken', { params: {} })
}