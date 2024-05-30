<template>
  <div class="tableBox">
    <h2>学完率Top5课程</h2>
    <!-- 表格的显示 -->
    <div>
      <el-table :data="tableData" style="width: 100%">
        <!-- 直接获取到数据 -->
        <el-table-column prop="order" label="排名" width="100" />
        <el-table-column prop="name" label="课程信息" width="180">
          <!-- 组件插槽 -->
          <template #default="scope">
            <!-- scope.row 表示一行的数据 -->
            <img src="" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="nums" label="学习人数" />
        <el-table-column prop="completeNums" label="学完人数" />
        <el-table-column prop="complete" label="完学率" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    order: '1',
    name: '课程信息',
    nums: 30,
    completeNums: 20,
    complete: '50%'
  },
  {
    order: '2',
    name: '课程信息',
    nums: 60,
    completeNums: 30,
    complete: '70%'
  },

]
</script>

<style scoped lang="scss">
.tableBox {
  width: 49%;
  height: 400px;
}
</style>