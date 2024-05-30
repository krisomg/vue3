// 国际化的配置文件


import { createI18n } from "vue-i18n"; //引入vue-i18n组件
import china from './localesL/china' //中文
import english from './localesL/english' //英文

// 实例化 I18n
const i18n = createI18n({
  legacy: false, //处理报错Uncaught (in promis)
  locale: "china", //初始化配置语言
  messages: {
    china,
    english
  }
})

export default i18n   //去main.ts 引入