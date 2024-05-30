<template>
  <!-- 嵌套的 -->
  <el-sub-menu :index="getPath(item?.name)" v-if="item?.children">
    <template #title>
      <el-icon>
        <location />
      </el-icon>
      <span>{{ item?.name }}</span>
      <!-- <span>{{  $t(navListLocale(item.name))  }}</span> -->

    </template>
    <!-- 又分为嵌套和不嵌套 -->
    <!-- 自己调用自己 -->
    <ItemDatas v-for="(itm, idx) in item.children" :key="idx" :item="itm"></ItemDatas>

  </el-sub-menu>
  <!-- 不嵌套的
    index:高亮的标志  -- 我们的路由地址
    在utils中设置方法  
  -->
  <el-menu-item :index="getPath(item?.name)" v-else>
    <!-- icon 图标 -->
    <div class="tubiao"><i :class="`iconfont  ${getIcon(item?.name)}`"></i></div>
    <!-- 获取的是内容 -- 处理方法 
      首页 -- {{ $t(layout.Home) }} -- 根据name 对应内容
    -->
    <span>{{ item?.name }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { getPath,getIcon } from '../../utils/layout';
import navListLocale from '@/utils/navListLocale'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

//接收父组件的数据
defineProps({
  item: {  //有Children 就是嵌套的  没有Children就是没有嵌套
    type: Object
  }
})

</script>

<style scoped lang="scss">
.tubiao{
margin-right:10px
}
</style>