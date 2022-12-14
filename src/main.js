import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./store";
import router from "./router";
import axios from "./api/request";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./assets/css/index.less";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.config.globalProperties.$http = axios;
app.use(ElementPlus, { size: "small", zIndex: 3000 });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
