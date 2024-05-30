<template>
  <!-- ui组件的宽度继承父亲 -->
  <div>

    <el-form ref="formRef" :model="dynamicValidateForm" class="demo-dynamic">
      <!-- 用户名 -->
      <el-form-item prop="useName" :rules="[
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
    ]">
        <el-input v-model="dynamicValidateForm.useName" :prefix-icon="User" clearable />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password" :rules="{
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    }">
        <el-input v-model="dynamicValidateForm.password" :prefix-icon="Lock" show-password clearable />
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="verify" :rules="{
      required: true,
      message: '请输入验证码',
      trigger: 'blur',
    }">
        <div class="flex verify">
          <!-- ui组件没有这个效果，--就要自己添加组件
            进入项目--发送请求给后端--返回图片信息
          -->
          <el-input v-model="dynamicValidateForm.verify" clearable />
          <!-- 图片 -->
          <div class="images">
            <img :src="url" alt="">
            <div class="hintV" v-if="showhint">验证码错误</div>
          </div>

        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { getViteryDatas, getLoginData } from "../../http/api/Login";
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

let router = useRouter()
const formRef = ref<FormInstance>() //dom操作
const dynamicValidateForm = reactive<{
  useName: string  //拿到用户名密码
  password: any,
  verify: number | string
}>({
  useName: '',
  password: '',
  verify: ''
})

//发送网络请求获取到 验证的信息
let url = ref('')
let Vdatas = ref()
const getViteryImage = () => {
  getViteryDatas().then(res => {
    console.log(res, 9898989);

    if (res.code == 200) {
      url.value = res.objs.image
      Vdatas.value = res.objs.nums
    }
  })
}
getViteryImage()





const loginSuccess = () => {
  if (Vdatas.value == dynamicValidateForm.verify) {
    //发送请求
    console.log("发送请求");
    showhint.value = false
    getLoginData({ token: "200", name: dynamicValidateForm.useName, password: dynamicValidateForm.password }).then(res => {
      // console.log(res, 77) //{code: 200, name: 'admin', password: 123} 
      // console.log(dynamicValidateForm.useName, dynamicValidateForm.password);
      console.log(res, 234234);

      if (res.token == "12345" && res.name == dynamicValidateForm.useName && res.password == dynamicValidateForm.password) {
        console.log(res, 88);
        //提示 登录成功
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        // 存放 token
        sessionStorage.setItem('token', res.token)
        //进行路由跳转
        // console.log(router);
        router.replace('/layout')

      } else {
        ElMessage.error('用户名或者密码错误')
      }
    })
  } else {
    console.log("验证码错误");
    showhint.value = true
  }
}
let showhint = ref(false)

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!', dynamicValidateForm)
      // 有数值
      //判断验证码是否正确 -- 获取到用户消息 --请求登录
      loginSuccess()

    } else { //如果没有输入值
      console.log('请输入用户名称或者验证码')
      return false
    }
  })
}


</script>

<style lang="scss" scoped>
.verify {
  flex: 1;
  margin-bottom: 10px;

  .images {
    height: 40px;
    width: 230px;

    img {
      width: 100%;
      height: 100%;
      flex: 1;
    }

    .hintV {
      position: absolute;
      color: red;
      left: 10px;
      top: 40px;
    }
  }
}
</style>
