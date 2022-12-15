import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import pinia from "@/store";
import useUserStore from "@/store/user";

// 路由配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 白名单
const whiteList = ["/login", "/register"];

const useUser = useUserStore(pinia);

// 前置守卫
router.beforeEach((to, from, next) => {
  if (useUser.isLogin) {
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
