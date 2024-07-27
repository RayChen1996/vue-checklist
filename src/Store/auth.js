import { defineStore } from "pinia";
import PiniaPersistedState from "pinia-plugin-persistedstate";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken;
    },
    clearToken() {
      this.token = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  persist: true, // 開啟持久化
});
