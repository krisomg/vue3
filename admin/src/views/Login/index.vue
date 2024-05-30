<template>
  <div class="indexBox">
    <div class="loginContent">
      <h2>悟空后台</h2>
      <LoginFrom></LoginFrom>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginFrom from './LoginFrom.vue'
</script>

<style lang="scss" scoped>
.indexBox {
  height: 100%;
  position: relative;

  h2 {
    text-align: center;
    font-size: 40px;
  }

  .loginContent {
    width: 40%;
    border: 1px solid pink;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>