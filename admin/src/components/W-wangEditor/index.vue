<template>
  <div>
    <div style="border: 1px solid #ccc">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="handleCreated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, ref, onBeforeUnmount, reactive } from 'vue';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const editorRef = shallowRef()
const mode = 'default'
const valueHtml = ref('')  //数据
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const handleChange = (editor: any) => {
  console.log('change:', editor.getHtml());
};
const articleList = reactive({
  content: valueHtml,
  name: "test",
})


onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style scoped lang="scss"></style>