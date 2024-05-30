<template>
  <div class="wSelectBox flex1">
    <div>{{ name }}:</div>
    <div class="selectC">
      <el-select v-model="value" placeholder="全部" size="large" style="width: 240px" @change="getItem">
         <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'


const value: any = ref(0)
let props = defineProps({
  name: {
    type: String,
    default: '直播状态'
  },
  options: {
    type: Array ,
    default: []
  },
  reset: {
    type: Boolean
  }
})
//动态的数据 注意数据结构
// const options = [
//   {
//     value: 'Option1',//选中的值 在js获取到
//     label: 'Option1', //页面显示的值
//   },
// ]
let emits = defineEmits(['getSelect'])
const getItem = (val: any) => {
  // console.log(val, 333); //拿到value值
  //子组件给父组件数据
  emits('getSelect', val) //传val给父组件
}
//下拉选择框的本质 -- 就是这数据的处理 -- { value：选中在js中  ，  label：显示的值}
// status： 0全部 1未开始 2进行中 3已结束

watch(() => props.reset, (newVal) => {
  if (newVal) {
    value.value = 0
  }
})
</script>

<style scoped lang="scss">
.wSelectBox {
  max-width: 320px;

  .selectC {
    margin-left: 12px;
  }
}
</style>