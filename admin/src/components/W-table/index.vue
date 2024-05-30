<template>
  <div class="tableBox">
    <el-table v-loading="loading" element-loading-text="加载中。。。" element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0,0,0,0.8)" ref="multipleTableRef" :data="tableLists" style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />

      <el-table-column label="直播信息" width="240">
        <template #default="scope">
          <div class="nameBox flex3">
            <img :src="scope.row.name.img" alt="">
            <div>{{ scope.row.name.title }}</div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="直播状态" width="100">
        <template #default="scope">
          <div class="playStatus" v-if="scope.row.playStatus == 1">
            未开始
          </div>
        </template>
      </el-table-column>
      <el-table-column property="nums" label="预约人数" width="80" />
      <el-table-column property="shopStatus" label="商品状态" width="100" />
      <el-table-column property="time" label="开始时间" width="180" />
      <el-table-column property="order" label="排序号" width="80" />
      <el-table-column label="操作" width="240">
        <template #default="scope">
          <div class="flex1">
            <div>数据</div>
            <div @click="changeGrounding(scope.row)">{{ scope.row.shopStatus == '已上架' ? '下架' : '上架' }}</div>
            <div @click="editItem(scope.row)">编辑</div>
            <!-- 
              点击删除
              思路：
              1.获取到唯一标识  发送删除  --后端的数据库发送改变
              2.前端自己删除   或者 重新发送请求 
             -->
            <div @click="deletTable(scope.row)">删除</div>
            <!-- scope.row就是每一行的数据 -->
          </div>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElTable } from 'element-plus'


interface User {
  date: string
  name: string
  address: string
}
//加载效果
let loading = ref(true)

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}


let props: any = defineProps({
  tableLists: {
    type: Array
  },
  // loading: {
  //   type: Boolean
  // }
})
watch(() => props.tableLists, (newVal) => {
  loading.value = false
  console.log('已加载完毕');
  
})



// const tableData: User[] = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-08',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-06',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-07',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

let emits = defineEmits(['deletItem', 'groundChange', 'editItems'])
const deletTable = (item: any) => {
  // console.log(item, 1114); //拿到要删除的项
  // 发送给父亲
  emits('deletItem', item)
}

const changeGrounding = (item: any) => {
  // 发给父亲 上架
  emits('groundChange', item)
}

//编辑
const editItem = (Obj: any) => {
  emits('editItems', Obj)
}

</script>

<style scoped lang="scss">
.tableBox {
  width: 100%;

  .nameBox {
    img {
      height: 40px;
      width: 40px;
      margin-right: 58px;
    }
  }

}
</style>