import { io } from "socket.io-client";
import useUserStore from "@/store/login";

const socket = io();
const useUser = useUserStore();
const Chat = {
  username: null,
  init: function (username) {
    socket = io.connect("http://localhost:3000/", {
      "force new connection": true,
    });
    socket.on("open", function () {
      console.log("已连接");
    });
    socket.emit("addUser", username);
  },
  logout: function () {
    socket.disconnect();
  },
  scrollToBottom: function () {
    window.scrollTo(0, 900000);
  },
  sendPost: function (obj) {
    socket.emit("sendPost", obj); //触发发送朋友圈事件
  },
  submit: function (obj) {
    socket.emit("sendMsg", obj); //触发事件
  },
  message: function (username) {
    socket.on(username, function (obj) {
      //事件被触发时调用的回调函数
      store.commit("ChangeMsg", obj);
    });
  },
  post: function (username) {
    socket.on("post" + username, function (obj) {
      store.commit("UploadPost", obj);
    });
  },
};
export default Chat;
