<template>
  <!-- 动态的宽度 -->
  <div class="NavListBox">
    <!-- 动态生成侧边导航 -->

    <!-- 二次封装element ui 组件库 -->

    <!-- 递归组件-->
    <MenuList></MenuList>
    <!-- 收缩展开组件 -->
    <ShrinkC></ShrinkC>
  </div>
</template>

<script setup lang="ts">
import MenuList from '../NavList/MenuList.vue'
import ShrinkC from '../NavList/ShrinkC.vue'

</script>

<style scoped lang="scss">
.NavListBox {
  height: 100%;
  position: relative;
  // width: 200px;
  background-color: #545c64;
}
</style>