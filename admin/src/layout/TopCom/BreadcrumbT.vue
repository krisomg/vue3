<template>
  <!-- 
    面包屑组件 基本样式分析
    separator="/"  ： 中间的分割线

    1.用户进入到内部页面的时候，默认显示首页

    2.当用户点击跳转页面的时候，显示最新的
     1》嵌套的， 需要显示父亲  --显示 ['父亲','自己']
     2》不嵌套的， 直接显示  -- 在路由信息中 meta 添加属性title -- 结果和面包屑组件一样
   -->
  <div class="BreadcrumbTBox">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in titleBList" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute()

// 1.默认
let titleBList: any = ref(['首页'])
//当路由地址方式了改变 -- 获取到最新的
watch(route, () => {
  // console.log(route.meta.title, 11);
  //1.查表 很多个路由  [{path:'',title:[]}]

  //2.meta
  titleBList.value = route.meta.title
}, {
  immediate: true
})


</script>

<style scoped></style>