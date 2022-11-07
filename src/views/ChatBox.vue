<template>
  <div class="chat-box">
    <div class="chat-room-card">
      <ChatRoomCard></ChatRoomCard>
    </div>
    <div class="chat-content">
      <ChatContent></ChatContent>
    </div>
    <div class="chat-send-box">
      <ChatSendBox></ChatSendBox>
    </div>
  </div>
</template>

<script>
import ChatRoomCard from "../components/ChatRoomCard.vue";
import ChatContent from "../components/ChatContent.vue";
import ChatSendBox from "../components/ChatSendBox.vue";

export default {
  name: "ChatBox",
  components: {
    ChatRoomCard,
    ChatContent,
    ChatSendBox,
  },
};
</script>

<style lang="less" scoped>
.chat-box {
  display: flex;
  flex-flow: column;
  height: 100%;
  .chat-content {
    flex: 1;
  }
}
</style>
