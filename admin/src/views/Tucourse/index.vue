<template>
  <div>
    tucourse
  </div>
</template>

<script setup lang="ts">
import { TucourseList } from '../../http/api/Tucourse'

/**
 * 1. 发送获取到 图文list数据
 * 2. 返回401
 * 3.获取到新的token
 * 4.再发送他的请求
 * 5.获取到他的数据
 */
const getLists = () => {
  TucourseList().then(res => {
    console.log(res);
  })
}
//图文页面一加载发送请求
getLists()
</script>

<style scoped lang="scss"></style>