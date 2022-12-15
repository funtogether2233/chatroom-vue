<template>
  <div class="chat-box">
    <!-- 聊天对象title -->
    <div class="header">
      <p class="name text-ellipsis">默认聊天室</p>
    </div>

    <!-- 消息 -->
    <div class="main">
      <!-- <div v-for="i in 16" key="item">
        <ChatBubble></ChatBubble>
      </div> -->
      <div v-for="message of messages" key="item">
        <ChatBubble :message="message"></ChatBubble>
      </div>
    </div>

    <!-- 输入框 -->
    <div class="footer">
      <ChatSendBox></ChatSendBox>
    </div>
  </div>
</template>

<script>
import ChatBubble from "./components/ChatBubble.vue";
import ChatSendBox from "./components/ChatSendBox.vue";
import { reactive } from "vue";
import useUserStore from "@/store/user";
import socketio from "@/api/socket";

export default {
  name: "ChatBox",
  components: {
    ChatBubble,
    ChatSendBox,
  },
  setup() {
    const useUser = useUserStore();
    const messages = reactive([]);
    socketio.enterChat("0", useUser.userId, "100001");
    socketio.receiveMessage(messages);

    return {
      messages,
    };
  },
};
</script>

<style lang="less" scoped>
.chat-box {
  display: flex;
  flex-flow: column;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: @border-style;
    height: @header-height;
    .name {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .main {
    flex: 1;
    padding: 0 20px;
    overflow: auto;
  }
  .footer {
    padding: 20px;
    border-top: 1px solid @border-color;
  }
}
</style>
