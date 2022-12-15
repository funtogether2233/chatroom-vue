<template>
  <div class="box">
    <div class="message">
      <el-input
        v-model="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
      />
    </div>
    <div class="send-button">
      <el-button type="primary" size="large" @click="sendMessage">
        发送</el-button
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useUserStore from "@/store/user";
import socketio from "@/api/socket";
import dayjs from "dayjs";

export default {
  name: "ChatSendBox",
  setup() {
    const useUser = useUserStore();
    const textarea = ref("");

    // 发送消息
    const sendMessage = () => {
      const content = textarea.value;
      const time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      socketio.sendMessage("0", useUser.userId, "100001", time, content);
      textarea.value = "";
    };

    return {
      textarea,
      sendMessage,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  .message {
    flex: 1;
  }
  .send-button {
    margin-left: 10px;
  }
}
</style>
