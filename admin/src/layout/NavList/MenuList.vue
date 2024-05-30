<template>
  <div class="">
    <!-- 
      active-text-color:高亮的颜色
      default-active：默认谁高亮  根据index
      router : 开启路由跳转
      default-active：高亮效果
      collapse:控制收缩与展开
     -->
    <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
      :default-active="defaultIndex" :collapse="!store.state.layout.show" text-color="#fff">
      <ItemDatas v-for="(item, index) in routeList" :key="index" :item="item"></ItemDatas>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ItemDatas from './ItemDatas.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';

let store = useStore()


let defaultIndex = ref("/layout/home")  //默认进入的时候首页高亮
//此时有个问题 在不是首页的时候 点击刷新，会自动回到首页高亮效果 此时要时时刻刻监听路由信息
let route: any = useRoute()
//监听路由信息，获取到当前的路由信息
watch(route, (newVal, oldVal) => {
  // console.log(route.fullPath, 444); ///layout/play 444 获取到当前的路由信息
  defaultIndex.value = route.fullPath
}, {
  immediate: true,
  deep: true
})


//后端给的数据动态生成,现在写死

//后端--=看UI图 --动态生成的数据结构

//数据结构 -- 多维数据

let routeList = [
  {
    name: "首页"
  },
  {
    name: "课程管理",
    children: [
      { name: "图文课程" },
      { name: "直播" }
    ]
  },
  {
    name: "数据分析模块",
    children: [
      { name: "学习分析" },
      { name: "流量分析" }
    ]
  },
  {
    name: "设置"
  },
]

//处理方法 将这个 name 匹配成路径---路由表的路径
</script>

<style scoped lang="scss"></style>