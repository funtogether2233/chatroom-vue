import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state: () => {
    return {
      isLogin: false,
    };
  },
});

export default useLoginStore;
