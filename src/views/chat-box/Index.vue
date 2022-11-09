<template>
  <div class="chat-box">
    <div class="header">
      <p class="name text-ellipsis">聊天室n</p>
    </div>
    <div class="main">
      <div v-for="i in 16" key="item">
        <ChatBubble></ChatBubble>
      </div>
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
