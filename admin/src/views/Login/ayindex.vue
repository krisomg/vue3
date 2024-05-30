<template>
  <!-- 结合suspense使用 在vue官网搜 -->
  <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <AsyncComp />

    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      Loading...
      Loading...
      Loading...
      Loading...
      Loading...
      Loading...
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

//defineAsyncComponent

//语法 let 组件 = defineAsyncComponent(()=>{返回一个 promise})
const AsyncComp = defineAsyncComponent(() => {
  //promise
  return import('./index.vue') //引入组件
})

//2.


</script>

<style scoped lang="scss"></style>