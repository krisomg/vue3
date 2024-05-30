<template>
  <div class="search flex1">
    <div>{{ name }}:</div>
    <div class="inputBox">
      <el-input v-model="input" style="width: 240px" placeholder="Please input" @input="getValue" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { debuce } from '@/utils/debuce'

let props = defineProps({
  name: {
    type: String,
    default: '直播名称'
  },
  reset: {
    type: Boolean
  }
})
const input = ref('')

let emits = defineEmits(["getSearchD"])
// 有些要防抖 有些不要防抖 ，那么就写一个防抖的方法，需要的时候就引入
const getValue = (val: string) => {
  // 搜索的时候获取到最新的数据
  // console.log(input.value);
  //发送请求
  emits("getSearchD", input.value)
}
// 监听重置的值reset
watch(() => props.reset, (newVal) => {
  // console.log(newVal, 777);
  if (newVal) {
    input.value = ''
  }
})

// const getValue = debuce(function () {
//   getDatas()
// })

// //写一个防抖方法
// const getDatas = () => {
//   console.log(input.value);
//   console.log('放松请求');
// }



</script>

<style scoped>
.search {
  width: 290px;

  .inputBox {
    width: 200px;
    margin-left: 12px
  }
}
</style>