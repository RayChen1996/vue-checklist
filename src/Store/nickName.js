import { defineStore } from "pinia";
import PiniaPersistedState from "pinia-plugin-persistedstate";
export const useNickNameStore = defineStore("nickName", {
  state: () => ({
    Name: null,
  }),
  actions: {
    setName(newToken) {
      this.Name = newToken;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.Name,
  },
  persist: true, // 開啟持久化
});
