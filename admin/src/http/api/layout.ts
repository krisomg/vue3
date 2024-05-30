

import service from '../index'

//我的信息
interface myData {
  code: number,
  datas: any
}
//登录的时候有个token 唯一标识 
export function getmyDatas(data: any): Promise<myData> {
  return service.post('/my', data)
}


