<template>
  <!-- echarts展示 -->
  <div class="echartsOne">
    <div id="main" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import * as echarts from 'echarts'; //全局引入echarts  -- Vue3可以 vue2不行 --

let dom: any
let myChart: any

let props: any = defineProps({ //只读的reactive 不能修改
  echartsObj: {
    type: Object
  }
})



onMounted(() => { //组件加载完毕的时候执行
  dom = document.getElementById('main')
  myChart = echarts.init(dom);
  getEcharts()
})


watch(() => props.echartsObj, (newVal, oldVal) => {
  // console.log(newVal, 5558);
  getEcharts()
})

const getEcharts = () => {

  let option = {
    title: { //标题
      text: '各类课程学习时长趋势(h)',
      left: 'left'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      data: [
        { name: '图文课程', icon: 'circle' },
        { name: '音频课程', icon: 'circle' },
        { name: '视频课程', icon: 'circle' },
      ],
      left: 'right',
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: { show: false },
      // data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
      data: props.echartsObj.time
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'log',
      name: 'y',
      minorSplitLine: {
        show: true
      }
    },
    series: [  //数据
      {
        name: '图文课程',
        type: 'bar',
        symbolSize: 0,  //折线图上的小圆点  设为没有
        // data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        data: props.echartsObj.imgObj.ydata
      },

    ]
  }
  myChart.setOption(option)
}

//根据后端给的数据动态显示  Echarts图表
</script>

<style scoped lang="scss">
.echartsOne {
  width: 100%;
  height: 500px;
}
</style>