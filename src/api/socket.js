import io from "socket.io-client";
import useUserStore from "@/store/user";
const useUser = useUserStore();

// sever地址
const API_URL = {
  localHost: "http://localhost:3000/",
};

// 连接socket
const socket = io(API_URL.localHost);

const socketio = {
  // 进入聊天对象
  enterChat: function (chatType, userId, chatObject) {
    socket.emit("enterChat", { chatType, userId, chatObject });
  },

  sendMessage: function (chatType, fromId, toId, content) {
    socket.emit("clientMessage", { chatType, fromId, toId, content });
  },

  receiveMessage: function (messages) {
    socket.on("severMessage", (message) => {
      const { chatType, fromId, toId, content } = message;
      console.log(message);
      messages.push({ chatType, fromId, toId, content });
      //   return { chatType, fromId, toId, content };
      //   if (fromId !== useUser.id) {
      //     console.log(data.message);
      //   }
    });
  },
};

export default socketio;
