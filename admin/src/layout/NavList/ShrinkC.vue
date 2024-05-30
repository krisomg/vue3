<template>
  <div class="shrinkBox">
    <!-- 默认是展开的 -->
    <div @click="changeValue" v-if="show">收缩</div>
    <div @click="changeValue" v-else>展开</div>

  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref } from "vue";
let store = useStore()

// console.log(store.state.layout.show); //拿到layout仓库中show的值 false
let show = ref(store.state.layout.show)  //仓库中的数据

//show 这个数据 在多个组件中有关联   放到全局仓库中


const changeValue = () => {
  //修改仓库中的数据  mutations 中定义的方法  让全局都知道 我点这个按钮修改了数据
  store.commit("layout/changeShow")  //空间命名法
  // console.log(show.value, 777); //true 777
  show.value = !show.value //而这里是现在的 收缩与展开的控制 取反 
  // console.log(show.value, 888); //false 888

}
</script>

<style scoped lang="scss">
.shrinkBox {
  position: absolute;
  height: 40px;
  width: 100%;
  bottom: 0;
  text-align: center;
  line-height: 40px;
  background-color: pink;
}
</style>