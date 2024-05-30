<template>
  <!-- 
    1.组件创建
    2.基本样式
    3.功能
      1>点击 显示退出
    4.组件之间进行关联
      比如 我的信息：要么是发送网路请求，要么是登录的时候后端就放回结果了

   -->
  <div class="OutLoginBox" @click="showOutLogin">
    <div class="content flex1">
      <img :src="datas.img" alt="">
      <div>{{ datas.name }}</div>
    </div>
    <!-- 事件冒泡 -->
    <div v-if="show" class="footContent flex" @click.stop="outLogin">
      <i><el-icon>
          <SwitchButton />
        </el-icon></i>
      <div>退出登录</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { getmyDatas } from "@/http/api/layout";
import { useRouter } from 'vue-router';
import { SwitchButton } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
let router = useRouter()

let show = ref(false)
const outLogin = () => {
  if (show.value) {//点击的是退出登录
    //弹框 确认退出
    ElMessageBox({
      title: '是否确认退出？',
      showCancelButton: true,
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true
          // sessionStorage.clear()
          // router.replace('/login')
          setTimeout(() => {
            sessionStorage.clear()
            router.replace('/login')
            done()
            setTimeout(() => {
              instance.confirmButtonLoading = false
            })
          })
        } else {
          done()
        }
      },
    })
    //清除本地数据
    // sessionStorage.clear()
    // router.replace('/login')
  }
  show.value = !show.value
  console.log(show.value, 555);

}
const showOutLogin = () => {
  show.value = !show.value
}

let datas: any = ref({})
//定义一个方法获取到登录的数据
const getDatas = () => {
  getmyDatas({ token: sessionStorage.getItem('token') }).then(res => {
    // console.log(res, 66666);
    datas.value = res.datas

  })
}
getDatas()

</script>

<style scoped lang="scss">
.OutLoginBox {
  padding: 10px 12px;
  position: relative;

  .content {
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  .footContent {
    position: absolute;
    width: 130%;
    height: 30px;
    left: -10%;
    top: 40px;

    i {
      margin-right: 4px;
    }
  }
}
</style>