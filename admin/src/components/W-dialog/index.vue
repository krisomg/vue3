<template>
  <div class="PopBox">
    <el-dialog v-model="dialogFormVisible" @close="closedialog" title="编辑直播">

      <div class="setPlayBox">
        <!-- 输入框 setItemObj.name.title -->
        <div class="flex3 itemContent">
          直播名称*
          <div class="itemRight"><el-input v-model="inputTitle" @input="getPlayname" style="width: 240px"
              placeholder="Please input" /></div>
        </div>
        <div class="flex3 itemContent">
          直播封面*
          <div class="itemRight">
            <Wupload :img="setItemObj?.name.img" ></Wupload>
          </div>
        </div>
        <div class="flex3  itemContent">
          直播描述
          <div class="itemRight"> <el-input v-model="playStatus" style="width: 240px" :rows="2" type="textarea"
              placeholder="Please input" /></div>

        </div>
        <div class="flex3 itemContent">
          开始时间
        </div>
        <div class="flex3 itemContent">
          预计直播时长
        </div>
        <div class="flex3">
          直播详情 <div>
            <WwangEditor></WwangEditor>
          </div>
        </div>
        <div></div>
      </div>


      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">提交</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { changeSearchName } from "./getPlayName";
import Wupload from "../W-upload/index.vue";
import WwangEditor from "../W-wangEditor/index.vue";

const textarea = ref('')
const dialogFormVisible = ref(false)  //显示弹框的
let props = defineProps({ //父组件给子组件的数据 -- 只读
  showPop: {
    type: Boolean
  },
  setItemObj: {
    type: Object
  }
})
// console.log(props.setItemObj, 234234);

watch(() => props.showPop, (newVal) => {
  console.log(newVal, 77);
  dialogFormVisible.value = newVal
})

/**
 * name: 
{img: 'https://ts1.cn.mm.bing.net/th/id/R-C.69ebed615c366…xvdv4Jstr0lSM8qoC2lynH4AQ%3d&risl=&pid=ImgRaw&r=0', title: '西班牙语课程'}
nums: 300
order: "1"
playStatus: 1
shopStatus: "已上架"
time: "2020/09/28 10:45"
 */

//js逻辑处理

// //这个方法只执行一次
const getDatas = () => {
  if (props.setItemObj.name) {
    return props.setItemObj
  } else {
    return ''
  }
}

let inputTitle = ref('')
watch(() => props.setItemObj, (newVal) => {
  console.log(newVal);
  let obj = changeSearchName(getDatas())
  inputTitle.value = obj.inputTitle.value
  playStatus.value =changePlayS(newVal.playStatus) 
})
// //变量值   方法   抽离出去 props.setItemObj.name.title
let {getPlayname } = changeSearchName(getDatas())



let playStatus = ref('')
const changePlayS = (val:any)=>{
  if(val==1){
    return '未开始'
  }else if(val == 2 ){
    return '已结束'
  }else{
    return '进行中'
  }
}




//编辑的弹框组件
/**
 * 1.样式的基本
 * 2.编辑组件需要关联的数据
 * 
 */

let emits = defineEmits(['closePup'])
const closedialog = () => {
  console.log(777);
  // 通知父亲  进行关闭弹窗
  emits('closePup',)
}

</script>

<style scoped lang="scss">
.PopBox {
  .setPlayBox {
    padding: 5px;
    height: 500px;
    // border: 1px solid red;
    overflow: hidden;
    overflow-y: scroll;
  }

  .itemContent {
    margin-top: 10px
  }

  .itemRight {
    margin-left: 20px;
  }
}
</style>