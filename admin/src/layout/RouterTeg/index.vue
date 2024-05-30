<template>
  <!-- 路由标签

    1.业务分析
      1》默认首页
      2》当 切换页面级组件后 --添加记录
        问题 我怎么知道用户点击了页面切换
      3》标签当前的路由和地址 标签一直添加高亮效果
      4> 当用户点击刷新，要有路由标签记录，组件重新创建救没有原来的记录--缓存原来的数据
      5》可以删除
        1>如果删除的是没有高亮的 直接删除
        2》

   -->
  <div class="RouterTegBox">
    <el-tag @close="handleClose(index, item)" :closable="index > 0 ? true : false"
      :effect="item.actions ? 'dark' : 'light'" v-for="(item, index) in tagList" :key="index">{{ item.name
      }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { getRouteObj } from "@/utils/layout";

let route = useRoute()
let router = useRouter()
//浏览器已刷新的时候 组件重新创建  -- 让用户之前的一些记录没有了 
//解决方法 通过本地缓存 -- 最新的数据
const gettagListDatas = () => {
  if (sessionStorage.getItem('listStr')) {  //如果本地存储有数据 
    let stringList: any = sessionStorage.getItem('listStr')
    // console.log(JSON.parse(stringList), 8888);

    return JSON.parse(stringList)
  } else { //如果没有 代表用户第一次进来
    return [{ name: '首页', actions: true, path: '/layout/home' }]
  }
}

let tagList: any = ref(gettagListDatas())


//取消高亮
const deleteActions = () => {
  tagList.value.forEach((item: any) => {
    item.actions = false
  })
}

//添加路由标签
const addRouteTags = (Obj: any) => {
  //路由标签是否已经有了
  //有
  let item = tagList.value.find((ite: any) => {
    return ite.name == Obj.name
  })
  // console.log(item, 666666);
  // console.log(Obj, 7777);


  //没有
  //取消高亮 -- 列表的数据
  deleteActions()
  if (item) {//路由标签中有 -- 就高亮效果
    item['actions'] = true
  } else { //没有就添加
    Obj['actions'] = true
    tagList.value.push(Obj)
  }
}

// 查表 
watch(route, () => {
  // console.log(route.fullPath, 77);  //创建表
  let Obj: any = getRouteObj(route.fullPath) //这个结构不是我需要的结构
  //最新点击的
  // console.log(Obj, 11); //{name: '直播', path: '/layout/play', icon: 'icon-zujianliebiao'} 
  // Obj['actions'] = true  //追加actions属性
  // tagList.value.push(Obj) //然后再加到tagList表里面 就能够在上面实现循环遍历表中的数据

  //写一个方法 添加路由标签
  if (route.fullPath != '/layout/home') {
    addRouteTags(Obj)
  } else {
    deleteActions()
    tagList.value.forEach((item: any) => {
      if (item?.path == '/layout/home') {
        item.actions = true
      }
    })
  }

  //最后缓存 路由标签的信息
  // console.log(tagList, 111222); //已经获得当前最新的路由标签表

  let listStr = JSON.stringify(tagList.value) //JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串

  sessionStorage.setItem('listStr', listStr)
}, {
  immediate: true
})
const handleClose = (index: number, item: any) => {
  // console.log(index, item, 111);
  // console.log(tagList.value, 4545);

  if (item.actions) { // 高亮删除 跳转到路由标签的最后一个
    tagList.value.splice(index, 1)
    router.push(tagList.value[tagList.value.length - 1].path)
  } else {//没有高亮的 直接删除
    tagList.value.splice(index, 1)
  }
}
// 点击删除路由

</script>

<style scoped lang="scss">
.RouterTegBox {
  padding: 10px;
  border-bottom: 1px solid red;
}
</style>