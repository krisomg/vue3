

import service from '../index'


interface Getplay {
  code: number,
  list: any,
  total: number,
  currentPage: number,
  pages: number
}
//传参
interface PlayDatas {
  status: number,
  searchName: string,
  time: any,
  currentPage: number
}
//登录的时候有个token 唯一标识 
export function getPlatList(data: PlayDatas): Promise<Getplay> {
  return service.post('/palyList', data)
}




//  /tableDelect
interface Gettable {
  code: number,
  msg: string
}
interface PlayDelet {
  id: number | string
}
export function tableDelet(parmas: PlayDelet): Promise<Gettable> {
  return service.get('/tableDelect', { params: parmas })
}

//grounding
interface Grondingtable {
  code: number,
  msg: string
}
interface PlayGrongding {
  id: number | string,
  grounding?: string
}
export function tableGrongding(parmas: PlayGrongding): Promise<Grondingtable> {
  return service.get('/grounding', { params: parmas })
}
