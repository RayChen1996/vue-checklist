<script setup lang="ts">
import { ref } from "vue";
const isReg = ref(false);

const habdleSwitch = (val: boolean) => {
  isReg.value = val;
};

const loginFn = () => {
  alert("6811520");
};
</script>
<template>
  <div class="min-vh-100 bg-primary d-flex align-items-center">
    <div class="container">
      <div class="row w-100">
        <div class="col-12 col-md-6 d-flex flex-column align-items-center">
          <div class="mt-5 mb-2 d-flex align-items-center">
            <img src="/check.svg" alt="Check" class="me-2" />
            <img src="/logo_text.svg" alt="Logo Text" />
          </div>
          <img
            src="/login_left.png"
            class="d-none d-md-block img-fluid"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center"
        >
          <div class="mt-5 w-75">
            <h2 v-if="isReg" class="fw-bolder mb-4">註冊帳號</h2>
            <h2 v-else class="fw-bolder mb-4">最實用的線上代辦事項服務</h2>
            <div v-if="isReg">
              <label class="fw-bolder mt-3" for="email">Email</label>
              <input
                class="form-control mb-3"
                type="email"
                id="email"
                placeholder="請輸入Email"
              />
              <label class="fw-bolder" for="nickname">您的暱稱</label>
              <input
                class="form-control mb-3"
                type="text"
                id="nickname"
                placeholder="請輸入您的暱稱"
              />
              <label class="fw-bolder" for="password">密碼</label>
              <input
                class="form-control mb-3"
                type="password"
                id="password"
                placeholder="請輸入密碼"
              />
              <label class="fw-bolder" for="confirm-password"
                >再次輸入密碼</label
              >
              <input
                class="form-control mb-3"
                type="password"
                id="confirm-password"
                placeholder="請再次輸入密碼"
              />
            </div>
            <div v-else>
              <label class="fw-bolder mt-3" for="email">Email</label>
              <input
                class="form-control mb-3"
                type="email"
                id="email"
                placeholder="請輸入Email"
              />
              <label class="fw-bolder" for="password">密碼</label>
              <input
                class="form-control mb-3"
                type="password"
                id="password"
                placeholder="請輸入密碼"
              />
            </div>
            <div class="d-flex flex-column align-items-center">
              <button
                v-if="isReg"
                class="btn btn-primary btn-lg fw-bolder w-100 mb-3"
              >
                註冊帳號
              </button>
              <button
                @click="loginFn"
                v-else
                class="btn btn-primary btn-lg fw-bolder w-100 mb-3"
              >
                登入
              </button>
              <label class="fw-bolder" @click="habdleSwitch(!isReg)">
                <a>{{ isReg ? "登入" : "註冊帳號" }}</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
