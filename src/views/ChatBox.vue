<template>
  <div class="chat-box">
    <div class="chat-room-card">
      <ChatRoomCard></ChatRoomCard>
    </div>
    <div class="chat-content">
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
      <ChatBubble></ChatBubble>
    </div>
    <div class="chat-send-box">
      <ChatSendBox></ChatSendBox>
    </div>
  </div>
</template>

<script>
import ChatRoomCard from "../components/TitleCard.vue";
import ChatBubble from "../components/ChatBubble.vue";
import ChatSendBox from "../components/ChatSendBox.vue";

export default {
  name: "ChatBox",
  components: {
    ChatRoomCard,
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
  .chat-room-card {
    border-bottom: 1px solid @border-color;
  }
  .chat-content {
    flex: 1;
    padding: 0 20px;
    overflow: auto;
  }
}
</style>
