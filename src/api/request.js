import axios from "axios";

// sever地址
const API_URL = {
  localHost: "http://localhost:3000/",
};

// 配置axios基本信息
const http = axios.create({
  baseURL: API_URL.localHost,
  timeout: 2000,
  interceptors: {
    requestSuccess: (config) => {
      // 每个请求自动携带token
      const token = localStorage.getItem("user_token");
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  },
});

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default http;
