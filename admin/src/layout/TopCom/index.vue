<template>
  <div class="TopCom flex1">
    <!-- 只做布局 -->
    <div class="leftTop">

      <!-- 面包屑组件 -->
      <BreadcrumbT></BreadcrumbT>
    </div>
    <div class="rightTop flex1">
      <!-- 国际化 -->
      <Localization></Localization>
      <!-- 退出登录 -->
      <OutLogin></OutLogin>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadcrumbT from './BreadcrumbT.vue';
import OutLogin from './OutLogin.vue';
import Localization from './Localization.vue';

</script>

<style scoped lang="scss">
.TopCom {
  padding: 10px 18px;
}
</style>