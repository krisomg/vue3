<template>
  <!-- 
    业务模块
    1.分析 划分模块  
  -->
  <div class="playBox">
    <!-- 封装搜索组件
      1.实时查询的  需要用防抖技术
      2.获取到内容的查询 
    -->
    <!-- <Winput></Winput> -->

    <!-- 头部选择 -->
    <TopSelect @getListDatas="getListDatas"></TopSelect>

    <div class="tableBox">
      <div class="table-top flex1">
        <div>直播列表</div>
        <div>
          <el-button type="primary">新建</el-button>
          <el-button type="primary">批量操作</el-button>
        </div>
      </div>
      <!-- table -->
      <div class="table">
        <Wtable :tableLists="tableLists" @deletItem="deletItem" @groundChange="groundChange" @editItems="editItems">
        </Wtable>
      </div>

      <!-- 分页 -->
      <div>
        <WPagination @getPageCurrent="getPageCurrent" :pageObj="pageObj"></WPagination>
      </div>

    </div>
    <Wdialog :setItemObj="setItemObj" :showPop="showPop" @closePup="closePup"></Wdialog>
  </div>
</template>

<script setup lang="ts">
// import Winput from "@/components/W-input/index.vue";

import TopSelect from './TopSelect/index.vue';
import Wtable from '@/components/W-table/index.vue';
import WPagination from '@/components/W-Pagination/index.vue';
import Wdialog from '@/components/W-dialog/index.vue';
import { getPlatList, tableDelet, tableGrongding } from '@/http/api/play'
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'

const getListDatas = (obj: any) => { //用户点击提交了
  console.log(obj, 1111);
  getTableList()
}

let tableLists: any = ref([])
let pageObj = reactive({ total: 0, currentPage: 1, pages: 5, time: '最近7天', searchName: '' })
// 获取到list 数据
const getTableList = (objs = { status: 0, time: '最近7天', currentPage: 1, searchName: '' }) => {
  getPlatList({ status: objs.status, time: objs.time, currentPage: objs.currentPage, searchName: objs.searchName }).then(res => {
    // console.log(res, 99999);
    tableLists.value = res.list
    pageObj.total = res.total
    pageObj.currentPage = res.currentPage
    pageObj.pages = res.pages
  })
}
getTableList()  //发送网络请求
// 接收 页码数改变 的
const getPageCurrent = (page: number) => {
  pageObj.currentPage = page
  getTableList({ status: 0, time: '最近7天', currentPage: page, searchName: '' })
}

// 删除操作
const deletItem = (item: any) => {
  console.log(item, 234);
  // 发送删除的网络请求  -- order 唯一的参数
  tableDelet({ id: item.order }).then(res => {
    console.log(res, 234234);
    if (res.code == 200) {
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      // 前端删除列表
      deleteTable(item.order)
    }
  })
}

const deleteTable = (id: any) => { //tabel 表格数据
  tableLists.value.forEach((item: any, index: number) => {
    if (item.order == id) {
      tableLists.value.splice(index, 1)  //tableLists 响应式数据 
    }
  })
}

//上架 下架操作
const groundChange = (obj: any) => {
  let grounding = (obj.shopStatus == '已上架' ? '下架' : '上架')
  // console.log(obj.shopStatus, grounding, 888); // '已上架'  '下架' 888

  tableGrongding({ id: obj.order, grounding: grounding }).then(res => {  //发送网络请求
    if (res.code == 200) {
      ElMessage({
        message: `${grounding}成功`,
        type: 'success',
      })
      // 对页表的操作
      // console.log(obj.order, grounding, 99999); //  1 下架

      changegroundTable(obj.order, grounding)
    }
  })
}
// 改变状态
const changegroundTable = (id: any, val: string) => {    //id就是order val就是grouding 当点击 下架时，此时，grouding=下架 
  tableLists.value.forEach((item: any, index: number) => {
    if (item.order == id) {
      // console.log(tableLists.value, 333)
      tableLists.value[index].shopStatus = `已${val}`
    }
  })
}


// setItemObj 编辑的值 就是 list每一项的属性
let setItemObj = reactive({})
let showPop = ref(false)
const editItems = (obj: any) => {
  //点击编辑了  需要出现弹框
  showPop.value = true
  //编辑弹框 显示默认数据
  setItemObj = obj
  // console.log(obj, 9898);
  console.log(setItemObj, 9898);
}


//弹框
const closePup = () => {
  showPop.value = false
}


/**
 * 
 * 表格操作 -- 删除，改变在状态
 * 
 *  1.获取到这一项的信息
 * 2.发送请求
 * 3.自己找到这个列表数据哪一项，进行修改
 * 
 * 
 * 表格操作 -- 编辑 -- 两种情况 
 * 
 *  1.我点击编辑跳转页面
 *    1.1》将这个信息传递过去 -- 通过路由传递
 *    1.2》后端有接口，id 获取到数据渲染
 *    解决方法-- 修改完了 --发送请求 -- 跳回list 页面
 * 
 * 2.不跳转页面 出现弹框  -- 将需要编辑的那一项数据传递过去，修改完成后，发送请求 -- 自己修改列表
 *  修改的弹窗组件-- 放在获取到数据的地方 方便数据的传递
 * 
 * 
 */
</script>

<style scoped lang="scss">
.playBox {
  padding: 10px;
  background-color: #ccc;
  height: 100%;

  .tableBox {
    width: 100%;
    margin-top: 30px;
    padding: 18px 40px;
    background-color: #fff;
    border-radius: 20px;
  }


}
</style>