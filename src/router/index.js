import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import pinia from "@/store";
import useLoginStore from "@/store/login";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const whiteList = ["/login"];
const login = useLoginStore(pinia);
router.beforeEach((to, from, next) => {
  if (login.isLogin) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
