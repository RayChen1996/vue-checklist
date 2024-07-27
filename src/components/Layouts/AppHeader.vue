<script setup>
import { useNickNameStore } from "../../Store/nickName";
const nickNameStore = useNickNameStore();

// console.log(nickNameStore.Name);
</script>
<template>
  <div class="flex justify-between px-1 lg:px-3 items-center">
    <router-link to="/">
      <div class="mb-2 flex items-center">
        <img src="/check.svg" alt="Check" class="me-2" />
        <img src="/logo_text.svg" alt="Logo Text" />
      </div>
    </router-link>
    <div class="lg:flex gap-3">
      <router-link to="/todo" class="hidden md:block"
        ><div class="text-[#333333] no-underline">
          {{ nickNameStore.Name }} 的代辦
        </div></router-link
      >

      <button type="button">登出</button>
    </div>
  </div>
</template>
