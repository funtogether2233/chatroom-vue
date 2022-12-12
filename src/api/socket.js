import io from "socket.io-client";

// sever地址
const API_URL = {
  localHost: "http://localhost:3000/",
};

// 连接socket
const socket = io(API_URL.localHost);

const socketio = {
  connect: function () {
    socket.on("severMessage", (data) => {
      console.log(data);
    });
  },
  sendInfo: function (data) {
    socket.emit("clientData", data);
  },
};

export default socketio;
