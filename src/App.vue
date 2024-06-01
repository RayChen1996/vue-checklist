<script setup lang="ts">
import { ref } from "vue";
const isReg = ref(false);

const habdleSwitch = (val: boolean) => {
  isReg.value = val;
};
</script>

<template>
  <div
    class="d-flex min-vh-100 bg-primary justify-content-center align-items-center"
  >
    <div class="row w-75">
      <div class="col-12 col-md-6">
        <div class="mt-5 mb-2">
          <img src="/check.svg" alt="Check" />
          <img src="/logo_text.svg" alt="Logo Text" />
        </div>
        <img src="/login_left.png" class="d-none d-md-block" alt="" />
      </div>
      <div class="col-12 col-md-6 w-50">
        <div class="mt-5">
          <h2 v-if="isReg" class="fw-bolder mb-6">註冊帳號</h2>

          <h2 v-else class="fw-bolder mb-6">最實用的線上代辦事項服務</h2>
        </div>

        <div v-if="isReg">
          <label class="fw-bolder mt-3" for="email">Email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            placeholder="請輸入Email"
          />

          <br />

          <label class="fw-bolder" for="password">您的暱稱</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="請輸入您的暱稱"
          />

          <br />

          <label class="fw-bolder" for="password">密碼</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="請輸入密碼"
          />

          <br />
          <label class="fw-bolder" for="password">再次輸入密碼</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="請再次輸入密碼"
          />

          <br />
        </div>
        <div v-else>
          <label class="fw-bolder mt-3" for="email">Email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            placeholder="請輸入Email"
          />

          <br />

          <label class="fw-bolder" for="password">密碼</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="請輸入密碼"
          />

          <br />
        </div>

        <div
          v-if="isReg"
          class="mx-auto bg-primary d-flex flex-column justify-content-center align-items-center"
        >
          <button class="btn btn-primary btn-lg fw-bolder w-25">
            註冊帳號
          </button>

          <br />

          <label class="fw-bolder" @click="habdleSwitch(false)">
            <a>登入</a>
          </label>
        </div>

        <div
          v-else
          class="mx-auto bg-primary d-flex flex-column justify-content-center align-items-center"
        >
          <button class="btn btn-primary btn-lg fw-bolder w-25">登入</button>

          <br />

          <label class="fw-bolder" @click="habdleSwitch(true)">
            <a>註冊帳號</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
