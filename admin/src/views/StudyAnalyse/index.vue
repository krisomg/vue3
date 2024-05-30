<template>
  <!-- 
    1.创建组件
    2.分析模块 -- 分为五大模块
    3.一个一个模块的实现 -- 分析各个模块 关系
   -->
  <div class="StudyAnalyseBox">
    <TopSearch @getTimes="getTimes"></TopSearch>
    <!-- <EchartsOne></EchartsOne> 初体验 -->
    <Echarts :echartsObj="echartsObj"></Echarts>
    <div class="StudyAnalyseFoot flex2">
      <!-- 创建组件 -->
      <!-- tabale -->
      <TableCom></TableCom>
      <!-- 柱状图 -->
      <PieCom :pieDatas="pieDatas" title="付费学校人数占比" type="pie"></PieCom>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopSearch from './TopSearch.vue'
import Echarts from './Echarts.vue'
import TableCom from './TableCom.vue'
import PieCom from '../../EchartsCom/PieCom.vue'
import { getPieDatas } from '@/http/api/StudyAnalys'
// import EchartsOne from './echartsOne.vue'


let getTime: any = ref('')
let echartsObj = ref({})
let pieDatas: any = ref([])

const getTimes = (val: any) => {
  // console.log(val, '子组件给父组件的数据');
  getTime.value = val
  // console.log(getTime.value, 11);
  getEChartsDatas()
  // console.log(EChartsDatas, 111111);
  echartsObj.value = EChartsDatas
  // console.log(echartsObj.value, 2222);

  //将动态的EChartsDatas数据传给子组件
}

//用户默认进来的数据是选择 最近7天
let EChartsDatas: any = ref({
  imgObj: {
    ydata: [1000, 2000, 3000, 2500, 1256]
  },
  RObj: {
    ydata: [2000, 1000, 3060, 1500, 1256]
  },
  VObj: {
    ydata: [3000, 1500, 3200, 2500, 1256]
  },
  time: ['2023/6/1', '2023/6/2', '2023/6/3', '2023/6/4', '2023/6/5',]
})
// console.log(EChartsDatas);
echartsObj.value = EChartsDatas.value

const getEChartsDatas = () => {
  if (getTime.value == '今天') {
    return EChartsDatas = {
      imgObj: {
        ydata: [1000, 2000, 3000]
      },
      RObj: {
        ydata: [2000, 4000, 3000]
      },
      VObj: {
        ydata: [3000]
      },
      time: ['2023/6/7']
    }
  } else if (getTime.value == '最近7天') {
    return EChartsDatas = {
      imgObj: {
        ydata: [1000, 2000, 3000, 2500, 1256]
      },
      RObj: {
        ydata: [2000, 1000, 3060, 1500, 1256]
      },
      VObj: {
        ydata: [3000, 1500, 3200, 2500, 1256]
      },
      time: ['2023/6/1', '2023/6/2', '2023/6/3', '2023/6/4', '2023/6/5',]
    }
  } else {
    return EChartsDatas = {
      imgObj: {
        ydata: [354, 654, 154]
      },
      RObj: {
        ydata: [1564, 212, 4546]
      },
      VObj: {
        ydata: [2314, 22, 114]
      },
      time: ['2023/6/1', '2023/6/2', '2023/6/3',]
    }
  }
}

const getPie = () => {
  getPieDatas().then(res => {
    // console.log(res, 444);
    //获取到数据
    /**
     * "datas": {
        "tatal": 1000,
        "freeS": {"nums": 600,"bili": "60%","name": "免费用户"},
        "PayS": {"nums": 400,"bili": "40%","name": "付费用户"}}
     */
    //而我要的是 {value:222,name:"sss"}
    let arrs = []
    arrs[0] = res.datas['freeS']
    arrs[1] = res.datas['PayS']
    console.log(arrs);
    let lists = arrs.map((item) => { //map会返回一个新的数组结构
      return { value: item.nums, name: item.name }
    })
    // console.log(lists, 888);
    pieDatas.value = lists

  })
}
getPie()
/**
 * 业务组件  模块化划分
 * 
 * 1.组件中的数据，动态的 --  他的数据从父组件获取
 * 2.如果父组件给的数据，我们需要再逻辑层中使用，并且需要根据这个数据改变，对应处理逻辑
 * 需要通过watch来监听这个数据源
 * 
 * 
 */
</script>

<style scoped lang="scss">
.StudyAnalyseBox {
  height: 100%;
  padding: 10px;

}
</style>