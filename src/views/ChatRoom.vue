<template>
  <div class="chat-room">
    <div class="side">
      <div class="user-card">
        <TitleCard></TitleCard>
      </div>
      <div class="chat-lists">
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
        <ChatListCard></ChatListCard>
      </div>
    </div>
    <div class="chat-box">
      <ChatBox></ChatBox>
    </div>
  </div>
</template>

<script>
import TitleCard from "../components/TitleCard.vue";
import ChatListCard from "../components/ChatListCard.vue";
import ChatBox from "./ChatBox.vue";

export default {
  name: "ChatRoom",
  components: {
    TitleCard,
    ChatListCard,
    ChatBox,
  },
};
</script>

<style lang="less" scoped>
.chat-room {
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  display: flex;
  background-color: white;
  height: 100%;
  .side {
    display: flex;
    flex-flow: column;
    border-right: 1px solid @border-color;
    width: @list-card-width;
    .user-card {
      border-bottom: 1px solid @border-color;
    }
    .chat-lists {
      flex: 1;
      overflow: auto;
    }
  }
  .chat-box {
    flex: 1;
    background-color: @chat-box-background-color;
  }
}
</style>
