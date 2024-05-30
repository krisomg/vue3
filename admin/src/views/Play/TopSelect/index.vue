<template>
  <!-- 
    基本样式

    根据后端的接口写内容

   -->
  <div class="topSelect">

    <div class="top flex1">
      <Wselect :options="selectList" @getSelect="getSelect" :reset="reset"></Wselect>
      <Winput class="Winput" @getSearchD="getSearchD" :reset="reset"></Winput>
    </div>
    <div class="selectIime flex1">
      <SelectTime @getTimes="getTimes" :reset="reset"></SelectTime>
      <div class="sub">
        <el-button type="primary" @click="getLists">提交</el-button>
        <el-button type="primary" @click="resetSelect">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wselect from '@/components/W-select/index.vue'
import Winput from '@/components/W-input/index.vue'
import SelectTime from './SelectTime.vue'
import { ref, reactive } from 'vue'

//1.处理下拉选择框的数据  1.后端给的  2根据参数自己写

let selectList = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '未开始'
  },
  {
    value: 2,
    label: '已结束'
  },
  {
    value: 3,
    label: '进行中'
  },
]

// 在父组件中接收  头部选择的数据--根据接口文档 写出参数
let objParams = reactive({
  status: 0,
  searchName: '',
  time: '最近7天',
  currentPage: 1,
})

// 修改这个值 ，--子组件中写的--子组件给父组件数据 --status
const getSelect = (val: any) => {
  reset.value = false
  objParams.status = val
}
//搜索组件的数据
const getSearchD = (val: string) => {
  reset.value = false
  objParams.searchName = val
}
//选择时间的数据  getTimes
const getTimes = (val: any) => {
  reset.value = false
  objParams.time = val
}


//点击提交
const getLists = () => {
  console.log(objParams, 11);
  //将这个数据给父组件 发送请求
  emits('getListDatas', objParams)
}
let emits = defineEmits(['getListDatas'])


//点击重置
let reset = ref(false)
// reset = true --用户点击重置了--就要将那些组件恢复到默认值
const resetSelect = () => {
  reset.value = true
}
</script>

<style scoped lang="scss">
.topSelect {
  width: 100%;
  padding: 18px 40px;
  background-color: #fff;
  border-radius: 20px;

  .Winput {
    margin-right: 200px;
  }

  .selectIime {
    margin-top: 18px;
  }
}
</style>