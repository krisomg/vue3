<template>
  <div class="WPaginationBox flex1">
    <div>共{{ pageObj?.total }}条记录 第{{ pageObj?.currentPage }}/{{ Math.ceil(pageObj?.total / 5) }}页</div>
    <div class="flex1">
      <div>
        <el-pagination @current-change="getCurrent" :default-page-size="5" background layout="prev, pager, next"
          :total="pageObj?.total" />
      </div>
      <div class="selectPageNum">
        <el-select v-model="value" placeholder="5条/页" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>跳转 到 </div>
      <div>{{ pageObj?.currentPage }}</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 分页 

//1.点击页面的切换




let value = ref('')
let options = [
  {
    value: '5条/页',
    label: '5条/页',
  },
  {
    value: '10条/页',
    label: '10条/页',
  },
]
defineProps({
  pageObj: {
    type: Object
  }
})

let emits = defineEmits(['getPageCurrent'])
const getCurrent = (val: any) => {
  console.log(val);  //拿到页码数
  //根据页码 发送最新的请求 table 数据
  // 子组件向父组件数据
  emits('getPageCurrent', val)
}
</script>

<style scoped lang="scss">
.WPaginationBox {
  margin-top: 30px;
  width: 100%;

  .selectPageNum {
    width: 100px;
  }
}
</style>