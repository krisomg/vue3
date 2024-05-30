import './assets/main.css'
import './style/index.scss'
import 'element-plus/dist/index.css'
import i18n from './locales/index'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './router/routerBeforeEach'
import { limitAn } from './directives/LimitDir'
import store from './store/index';



let app = createApp(App)

app.use(i18n)
app.use(store)  //注册仓库， 在。vue文件中才能使用 useStore
app.use(limitAn)
app.use(router) //注册插件，能在。vue的文件中 使用他的hooks  useRouter useRoute
app.mount('#app')
