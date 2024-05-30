


// 处理国际化 


// 查表思想
let localeList = [
  {
    name: "首页",
    locale: `layout.home`
  }
]

function navListLocale(name: any) {
  let obj = localeList.find((item) => {
    return item.name = name
  })
  if (obj) {
    return obj.locale
  } else {
    return `layout.home`
  }
}

export default navListLocale