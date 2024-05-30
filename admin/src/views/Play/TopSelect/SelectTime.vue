<template>
  <div class="topSearch flex">

    <div>
      <!-- 时间 -->
      日期选择:
      <el-date-picker v-model="value1" type="daterange" range-separator="-" start-placeholder="Start date"
        end-placeholder="End date" />
    </div>
    <div class="topContent flex">
      <!-- 动态样式 -->
      <div :class="actionsStyle == index ? 'contentItemActions' : 'contentItem'" @click="selectItem(index, item)"
        v-for="(item, index) in topList" :key="index" :item="item">
        {{ item }}</div>
    </div>

  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'


let topList = [
  '今天', '昨天', '最近7天', '最近一个月'
]
const value1 = ref('')
//time  返回给父亲的值
let time = ref('')

let props = defineProps({
  reset: {
    type: Boolean
  }
})
//监听 日期是否有数据
//1.有数据  右边的高亮取消
watch(value1, () => {
  // console.log(value1.value);
  if (value1.value) {
    actionsStyle.value = 100
    time.value = value1.value  //用户选择的日期
    emits('getTimes', value1.value)
  }
})

watch(() => props.reset, (oldVal) => {
  if (oldVal) {
    value1.value = ''
    time.value = '最近7天'
    actionsStyle.value = 2
  }
})

let actionsStyle = ref(2)  //默认第三个 ‘最近7天’
const selectItem = (index: number, item: string) => {
  actionsStyle.value = index
  //点击 右边的日期 那么就 要把左边的日期选项清零
  value1.value = ''
  time.value = item
  // 触发方法
  emits('getTimes', item)
}

//子组件给父组件数据
//defineEmits([定义多个方法])
let emits = defineEmits(['getTimes'])

</script>

<style scoped lang="scss">
.topSearch {
  .topContent {
    margin-left: 12px;

    .contentItem {
      padding: 5px;
    }

    .contentItemActions {
      padding: 5px;
      color: skyblue;
    }
  }
}
</style>