<template>
  <div class="chat-box">
    <div class="header">
      <p class="name">聊天室n</p>
    </div>
    <div class="main">
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
    </div>
    <div class="footer">
      <ChatSendBox></ChatSendBox>
    </div>
  </div>
</template>

<script>
import ChatBubble from "./components/ChatBubble.vue";
import ChatSendBox from "./components/ChatSendBox.vue";

export default {
  name: "ChatBox",
  components: {
    ChatBubble,
    ChatSendBox,
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
    border-bottom: @border-style;
    height: @header-height;
    p {
      margin-left: 20px;
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
    border-top: 1px solid @border-color;
  }
}
</style>
