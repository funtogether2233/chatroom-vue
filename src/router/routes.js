// 路由懒加载
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/login/Index.vue");
const NotFound = () => import("@/views/not-found/Index.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export default routes;
