// 路由懒加载
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/login/Index.vue");
const Register = () => import("@/views/register/Index.vue");
const NotFound = () => import("@/views/not-found/Index.vue");

const routes = [
  // 聊天页面
  {
    path: "/",
    name: "home",
    component: Home,
  },

  // 登陆
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  // 注册
  {
    path: "/register",
    name: "register",
    component: Register,
  },

  // 404 
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export default routes;
