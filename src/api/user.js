import http from "./request";

const REQUEST_URL = {
  banner: "/banner",
  recommendList: "/personalized",
};

// 登陆验证
export const verifyLogin = async (userId, password) => {
  try {
    const res = await http.post("/login", {
      userId,
      password,
    });
    return res.data;
  } catch (message) {
    console.log(message);
  }
};

// 注册用户
export const registerUser = async (userId, password) => {
  try {
    const res = await http.post("/register", {
      userId,
      password,
    });
    return res.data;
  } catch (message) {
    console.log(message);
  }
};
