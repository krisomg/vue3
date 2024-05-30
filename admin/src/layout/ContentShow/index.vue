<template>
  <div class="ContentBox">

    <!-- vue3的 keep-alive的使用
      1.router-view 根据匹配的组件
      
    -->

    <!-- 将项目中的 路由处理组价全部缓存 -->
    <!-- <router-view v-slot="{ Component }">
	  <keep-alive>
	    <component :is="Component"/>
	  </keep-alive>
	</router-view> -->

    <!-- 这样就会显示内容 -->
    <!-- <router-view></router-view> -->



    <!-- 我需要的是将我的项目有一些页面缓存，有一些页面不缓存
  1.使用它的属性：   exclude--不缓存
                    include-- 缓存
-->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive :include="keepLists">
        <component :is="Component" />
      </keep-alive>
    </router-view> -->

    <!-- 需要缓存的 -->
    <router-view v-slot="{ Component }" v-if="isKeep">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 否则不用缓存 -->
    <router-view v-else></router-view>

  </div>
</template>

<script setup lang="ts">
// 写我需要缓存的组件数据--添加在这里
//我们写业务的时候， 比如直播组件、图文组价是要缓存的， set组件是不缓存
//  这个时候 直播->set->直播  就得获取到最新的数据
//  直播-》图文-》直播  又不一样  就是缓存
// 所以需要就写方法

import useKeepAlive from '../../utils/changeKeepAlive'
let { isKeep } = useKeepAlive()

</script>

<style scoped lang="scss">
.ContentBox {
  height: 85%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>