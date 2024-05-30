// 根据name名称  匹配路由地址



let routerLists = [
  { name: '首页', path: "/layout/home", icon: "icon-shouye" },
  { name: '图文课程', path: "/layout/tucourse", icon: "icon-messagewhite" },
  { name: '直播', path: "/layout/play", icon: "icon-zujianliebiao" },
  { name: '学习分析', path: "/layout/studyAnalyse", icon: "icon-shouye" },
  { name: '流量分析', path: "/layout/flowAnalyse", icon: "icon-shouye" },
  { name: '设置', path: "/layout/set", icon: "icon-gongzuotai" },

]


export function getPath(name: string) {
  let obj = routerLists.find((item) => {
    return item.name == name
  })
  // console.log(obj, 9999);

  if (obj) {
    return obj.path
  } else {
    //返回随机数
    return Math.random() + ''
  }
}


export function getIcon(name: string) {
  let obj = routerLists.find((item) => {
    return item.name == name
  })
  // console.log(obj, 9999);

  if (obj) {
    return obj.icon
  } else {
    //返回随机数
    return "icon-7"
  }
}

export function getRouteObj(path: string) {
  let obj = routerLists.find((item) => {
    return item.path == path
  })
  // console.log(obj, 9999);

  if (obj) {
    return obj
  } else {
    //返回随机数
    return Math.random() + ''
  }
}