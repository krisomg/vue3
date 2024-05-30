<template>
  <!-- echarts展示 -->
  <div class="echartsOne">
    <div id="pies" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import * as echarts from 'echarts'; //全局引入echarts  -- Vue3可以 vue2不行 --

let dom: any
let myChart: any
let props: any = defineProps({
  pieDatas: {
    type: Array
  },
  title: {
    type: String
  },
  type: {
    type: String,
    default: 'bar'
  }
})

onMounted(() => {
  dom = document.getElementById('pies')
  myChart = echarts.init(dom);
  getEcharts()
})

watch(() => props.echartsObj, (newVal, oldVal) => {
  // console.log(newVal, 5558);
  getEcharts()
})

const getEcharts = () => {
  let option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        labelLine: {
          show: true
        },
        data: props.pieDatas
      }
    ]
  };
  myChart.setOption(option)
}
</script>

<style scoped lang="scss">
.echartsOne {
  width: 100%;
  height: 500px;
}
</style>