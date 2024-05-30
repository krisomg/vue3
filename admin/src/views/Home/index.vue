<template>
  <div>
    <button v-limit="['boss']">老板</button>
    <button v-limit="['boss', 'zhuguan']">主管</button>
    <button v-limit="['boss', 'zhuguan', 'yuangong']">员工</button>


  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>