<script setup>
import { ref } from "vue";
import AppHeader from "./components/Layouts/AppHeader.vue";
const isReg = ref(false);
</script>

<template>
  <div
    id="app"
    class="flex flex-col bg-no-repeat"
    style="background-image: url(bg.svg); background-size: cover"
  >
    <AppHeader />
    <div class="flex-1 min-h-screen">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
