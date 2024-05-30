

import service from '../index'

// /LoginVerify


//ts 接口

//验证的接口

//接口表示对象的属性
interface ViteryDatas {
  code: number,
  objs: { image: string, nums: number }
}
//这个方法 -- 返回值是异步的 -- 
//<> 泛型 根据返回的来决定类型
export function getViteryDatas(): Promise<ViteryDatas> {
  return service.get('/LoginVerify')
}

//账号
interface loginData {
  token: string,
  name: string,
  password: number | string
}
export function getLoginData(data: loginData): Promise<loginData> { //(data: loginData) 传的参数   Promise<loginData> 返回数据的类型
  return service.post('/login', data)
}