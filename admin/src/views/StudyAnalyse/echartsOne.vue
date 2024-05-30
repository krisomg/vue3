<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from 'echarts'; //全局引入echarts  -- Vue3可以 vue2不行 --

onMounted(() => { //组件加载完毕
  // dom
  let dom = document.getElementById('main')
  var myChart = echarts.init(dom);

  //配置属性
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>

<style scoped lang="scss"></style>