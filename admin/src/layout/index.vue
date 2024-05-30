<template>
  <div class="layoutBox flex">
    <!-- 布局 -->
    <div class="navList">
      <!-- 左边导航栏 -->
      <NavList></NavList>
    </div>

    <div class="rightContent">
      <!-- 右边内容区域 -->


      <!-- 头部左上角 -->
      <TopCom></TopCom>
      <!-- 路由标签 -->
      <RouterTeg></RouterTeg>
      <!-- 内容 -->
      <ContentShow></ContentShow>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavList from './NavList/index.vue'
import ContentShow from './ContentShow/index.vue'
import TopCom from './TopCom/index.vue'
import RouterTeg from './RouterTeg/index.vue';
</script>

<style scoped lang="scss">
.layoutBox {
  height: 100%;

  // .navList {
  //   height: 100%;
  // }

  .rightContent {
    flex: 1;
  }
}
</style>