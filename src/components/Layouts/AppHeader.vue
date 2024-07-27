<script setup>
import { useNickNameStore } from "../../Store/nickName";
import { useAuthStore } from "../../Store/auth";
import { computed } from "vue";
import { useRoute } from "vue-router";
const nickNameStore = useNickNameStore();
const authStore = useAuthStore();
// console.log(authStore.token);
const route = useRoute();

const isHidden = computed(() => route.path === "/sign-in");

const signOutFn = async () => {
  const response = await fetch(`${apiUrl}users/sign_out`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (response.ok) {
    // console.log("註冊成功", data);

    if (data.status) {
      alert("登出成功");
    }
    // setToken(data.token);
    // setName(data.nickname);

    router.push("/sign-in");
  } else {
    alert(data.message);
    console.error("註冊失敗", data.message);
  }
};
</script>
<template>
  <div v-if="!isHidden" class="flex justify-between px-1 lg:px-3 items-center">
    <router-link to="/">
      <div class="mb-2 flex items-center">
        <img src="/check.svg" alt="Check" class="me-2" />
        <img src="/logo_text.svg" alt="Logo Text" />
      </div>
    </router-link>

    <div v-if="authStore.token" class="lg:flex gap-3">
      <router-link to="/todo" class="hidden md:block"
        ><div class="text-[#333333] no-underline">
          {{ nickNameStore.Name }} 的代辦
        </div></router-link
      >

      <button @click="signOutFn" type="button">登出</button>
    </div>
    <div v-else>
      <router-link to="/sign-in">
        <button type="button">登入</button>
      </router-link>
    </div>
  </div>
  <div v-else></div>
</template>
