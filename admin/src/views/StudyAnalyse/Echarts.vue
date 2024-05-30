<template>
  <!-- echarts展示 -->
  <div class="echartsOne">
    <div id="main" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import * as echarts from 'echarts'; //全局引入echarts  -- Vue3可以 vue2不行 --
// 完成基本的样式
//注意 Echarts的数据是父组件给的 EChartsDatas

//1.直接在视图上使用  -- 数据不管是异步的还是同步的  都能都在视图显示最新的
//2.父组件给的数据是在 js的逻辑层中使用， 组件的创建比异步数据获取更快
let dom: any
let myChart: any
//组件创建的时候js已经执行了  -- 此时获取到的数据是父组件之前给的默认数据
let props: any = defineProps({ //只读的reactive 不能修改
  echartsObj: {
    type: Object
  }
})
// console.log(props.echartsObj, 66666666);


onMounted(() => { //组件加载完毕的时候执行
  dom = document.getElementById('main')
  myChart = echarts.init(dom);
  getEcharts()
})

//使用watch 监听 父组件给的数据
//  注意 watch 监听的数据源是reactive的话 要写成处理方法()=props.EChartsDatas;  如果是ref直接写数据源
watch(() => props.echartsObj, (newVal, oldVal) => {
  // console.log(newVal, 5558);
  getEcharts()
})

const getEcharts = () => {
  // dom
  // let dom = document.getElementById('main')
  // var myChart = echarts.init(dom);
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
        type: 'line',
        symbolSize: 0,  //折线图上的小圆点  设为没有
        // data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        data: props.echartsObj.imgObj.ydata
      },
      {
        name: '音频课程',
        type: 'line',
        symbolSize: 0,
        // data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        data: props.echartsObj.RObj.ydata
      },
      {
        name: '视频课程',
        type: 'line',
        symbolSize: 0,
        // data: [1 / 2, 1 / 4,1 / 8,1 / 16,1 / 32,1 / 64,1 / 128,1 / 256,1 / 512]
        data: props.echartsObj.VObj.ydata
      }
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