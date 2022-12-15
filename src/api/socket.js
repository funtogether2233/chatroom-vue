import io from "socket.io-client";

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

  // 发送信息
  sendMessage: function (chatType, fromId, toId, time, content) {
    socket.emit("clientMessage", { chatType, fromId, toId, time, content });
  },

  // 接收信息
  receiveMessage: function (messages) {
    socket.on("severMessage", (message) => {
      const { chatType, fromId, toId, time, content } = message;
      messages.push({ chatType, fromId, toId, time, content });
    });
  },
};

export default socketio;
