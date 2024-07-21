<script setup lang="ts">
import { ref } from "vue";
const isReg = ref(false);

const habdleSwitch = (val: boolean) => {
  isReg.value = val;
};
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
