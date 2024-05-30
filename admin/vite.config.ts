import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import compression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    compression({
      threshold: 1024 * 500, //体积大于threshold才会被压缩，单位b
      ext: '.gz',  //压缩文件格式
      deleteOriginFile: false //是否删除源文件
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({ //自适应，px>rem转换
          rootValue: 16, //1rem 的大小
          propList: ['*'],//需要转换的属性，这里选择全部都进行转换
        }),

        // 兼容浏览器，添加前缀
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8"
            //'last 10 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true
        }),
      ]
    }
  }

})
