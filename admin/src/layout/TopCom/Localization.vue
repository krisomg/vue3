<template>
  <div class="locales-box">
    {{ $t(`layout.home`) }}
    <el-popover :visible="visible" placement="bottom" :width="100" trigger="click">

      <template #reference>

        <el-button class="m-2" @click="showPop">国际化</el-button>
      </template>
      <div class="change">
        <div :class="currentIndex == 1 ? 'actionStyle' : ''" @click="selectL(1)">中文</div>
        <div :class="currentIndex == 2 ? 'actionStyle' : ''" @click="selectL(2)">英文</div>

      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

let { locale } = useI18n()

const visible = ref(false)
const showPop = () => {
  visible.value = true
}
let currentIndex = ref(1)
const selectL = (val: number) => {
  currentIndex.value = val
  visible.value = false
  if (val == 1) {
    locale.value = 'china'
  } else {
    locale.value = 'english'
  }
}

</script>

<style scoped lang="scss">
.change {
  text-align: center;

  div {
    margin-bottom: 10px;
  }
}

.actionStyle {
  color: red;
}
</style>