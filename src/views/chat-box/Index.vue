<template>
  <div class="chat-box">
    <!-- 聊天对象title -->
    <div class="header">
      <p class="name text-ellipsis">默认聊天室</p>
      <el-button type="primary" @click="exit">退出</el-button>
    </div>

    <!-- 消息 -->
    <div class="main">
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
import { useRouter } from "vue-router";
import useUserStore from "@/store/user";
import { getGroupMessage } from "@/api/groupMessage";
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

    // 进入聊天
    socketio.enterChat("0", useUser.userId, "100001");

    // 获取group历史聊天记录
    const getHistoryMessage = async () => {
      const messageList = (await getGroupMessage("100001")).messageList;
      messages.push(...messageList);
    };
    getHistoryMessage();

    // 接收聊天信息
    socketio.receiveMessage(messages);

    // 退出
    const router = useRouter();
    function exit() {
      useUser.isLogin = false;
      localStorage.removeItem("user_token");
      router.push("/login");
    }

    return {
      messages,
      exit,
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
    justify-content: space-between;
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
