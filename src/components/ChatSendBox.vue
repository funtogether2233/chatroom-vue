<template>
  <div class="chat-send-box">
    <div class="message">
      <el-input
        v-model="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
      />
    </div>
    <div class="send-button">
      <el-button type="primary" size="large">发送</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ChatSendBox",
  setup() {
    const textarea = ref("");
    return {
      textarea,
    };
  },
};
</script>

<style lang="less" scoped>
.chat-send-box {
  display: flex;
  padding: 20px;
  border-top: 1px solid @border-color;
  .message {
    flex: 1;
    font-size: 24px;
  }
  .send-button {
    display: flex;
    margin-left: 10px;
  }
}
</style>
