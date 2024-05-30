<template>

  <!-- 搜索组件的封装 -->
  <div class="search">
    <!-- 封装搜索组件
      1.实时查询的  需要用防抖技术  为了减少服务器的压力
          防抖：在规定的时间内，连续的操作会重新创建，   如果没有操作，就会执行

      2.获取到内容的查询 
    -->

    <input type="text" @input="getInput">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


// 防抖
let timer: any = ref(null)
const getInput = (e: any) => {
  console.log(e.target.value);   //获取到数据

  //我在一秒内输入内容 ，就不能发送请求， 只有当我输入完了一秒后，发送请求
  //我第一次输入 ，就创建定时器 。 第二次输入的时候在一秒内的时候，我不需要执行上一次的定时器，此时清除掉
  clearTimeout(timer)
  timer = setTimeout(() => {
    getmyDatas(e.target.value)
  }, 1000);
}
const getmyDatas = (val: any) => {
  console.log('发送请求');

}

</script>

<style scoped></style>