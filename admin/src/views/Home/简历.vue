/**
项目的搭建
技术栈：Vue3+vite+element+echarts+axios+sass+ts
项目的描述：项目是做什么的
我负责的模块：负责项目的搭建，公共组件的封装，公共方法的封装，业务模块的实现
，项目性能优化

应用技术：
1. 使用vite创建项目，使用vue-router进行路由跳转，实现vuex存放全局

2. 二次封装axios，实现页面请求一一对应，添加请求拦截器和响应拦截器，在响应拦截
器中实现token过期无痛刷新

3. 实现项目的权限处理，通过addRoute 实现动态路由，通过二次封装element UI组件
中的菜单组件，实现动态侧边栏，通过app.use 注册自己封装 自定义指令 插件实现按钮级权限

4. 二次封装element ui 组件库： 比如 递归生成侧边栏导航，防抖处理input组件，table
组件，分页组件，国际化组件，下拉选择框组件等等
（问你组件是怎么封装的）
答：一，我写项目都是组件化开发，方便后期的复用和迭代，封装组件的本质就是组件
之间的传值，父组件向子组件传数据 ，子组件向父组件传数据，比如说封装了侧边栏导航组件，对
element组件库的二次封装采用递归，因为我在layout布局页面里面布局，分为左右两边，这个侧
边导航根据登录的时候后端给过不同的数据，动态显示这个侧边导航，我会把这个组件单独写一个
文件夹，引入menu组件，在里面判断是否有嵌套与不嵌套，再递归生成，这里数据是父组件传过来
的，父组件向子组件传数据，然后点击的时候会有一些操作，这时子组件向父组件传数据。

5. 实现二次封装Echarts，实现项目中的数据统计模块，比如饼状图，柱状图，折线图
等等
6.组件化开发实现我们项目中的业务模块，
7,8,9

最后一个，项目的性能优化：比如异步组件(通过defineAsyncComponent)实现异步组件(将登录
组件变成异步组件)，实现分包，路由懒加载，keep-alive，使用autoprefixer插件实现不同浏
览器css兼容，通过postcss-pxtorem实现响应式的单位，来适应不同的单位不同的电脑屏幕，项
目中的第三方组件库,我基本都是按需引入，为了更好的支持tree-sharking，使用压缩
gzip、brotli格式减少项目体积



四、组件缓存处理
我们在写的项目中 -- 有一些页面 不需要实时跟新，获取到第一次数据，就还有一些页面
获取到最新的数据，解决方法 --- keep-alive 缓存组件

1. keep-alive结合路由一起使用，我这个项目哪些页面（缓存 数据不用同时获取），有
一些页面的数据需要实时获取（详情页面）
我自己写一个方法在utils 写一个方的法changeKeepAlive 用来判断哪些组件需要缓存
*/
