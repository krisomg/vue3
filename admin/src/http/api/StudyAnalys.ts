
import service from '../index'

//我的信息
interface pieData {
  code: number,
  datas: any
}

//登录的时候有个token 唯一标识 
export function getPieDatas(data = {}): Promise<pieData> {
  return service.post('/pieEcharts', data)
}



