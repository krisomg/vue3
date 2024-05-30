<template>
  <div>
    <!-- action是上传图片的地址 -->
    <el-upload v-model:file-list="fileList" action="http://127.0.0.1:4523/m1/4365439-0-default" list-type="picture-card"
      :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon>
        <Plus />
      </el-icon>
    </el-upload>


    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

let props = defineProps({
  img: {
    type: String
  }
})
// console.log(img,'11');

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    // url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    url: props.img,
  },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>

<style scoped lang="scss"></style>