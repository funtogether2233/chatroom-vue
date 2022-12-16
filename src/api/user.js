import http from "./request";

const REQUEST_URL = {
  login: "/login",
  register: "/register",
};

// 登陆验证
export const verifyLogin = async (userId, password) => {
  try {
    const res = await http.post(REQUEST_URL.login, {
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
    const res = await http.post(REQUEST_URL.register, {
      userId,
      password,
    });
    return res.data;
  } catch (message) {
    console.log(message);
  }
};
