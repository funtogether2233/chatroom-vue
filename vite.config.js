import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  // 配置less
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            "src/assets/css/index.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  // 配置路径别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名
  },
});
