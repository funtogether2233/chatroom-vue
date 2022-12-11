import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import pinia from "@/store";
import useUserStore from "@/store/user";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const whiteList = ["/login", "/register"];
const useUser = useUserStore(pinia);
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
