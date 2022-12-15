import { defineStore } from "pinia";

// 用户信息
const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: false,
      id: "000000",
      userId: "",
      nickname: "user",
    };
  },
});

export default useUserStore;
