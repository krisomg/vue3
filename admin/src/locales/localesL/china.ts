
export default {
  // 模块 一一对应
  "layout": {
    "home": '首页',
    "couresM": '课程管理'

  }
}


/**
 * 国际化的本质  查表的思想
 * 1.将我们项目中所有需要切换语音  --内容 -- 存放到语言包中
 * 2.在将我们所有需要切换内容的地方 -- 国际化获取到动态的数据，{{ $t(`layout.home`) }}
 * {{ $t(`表中对应的内容`) }}
 * 3.再通过 import { useI18n } from "vue-i18n";
 *  let { locale } = useI18n()
 *   if (val == 1) {
    locale.value = 'china'
  } else {
    locale.value = 'english'
  }
 */