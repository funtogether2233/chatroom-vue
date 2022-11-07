<template>
  <div class="chat-room">
    <div class="side">
      <UserCard></UserCard>
      <ChatLists></ChatLists>
    </div>
    <div class="chat-box"></div>
  </div>
</template>

<script>
import UserCard from "../layouts/UserCard.vue";
import ChatLists from "../layouts/ChatLists.vue";

export default {
  name: "ChatRoom",
  components: {
    UserCard,
    ChatLists,
  },
};
</script>

<style lang="less" scoped>
.chat-room {
  background-color: white;
  width: 100%;
  height: 100%;
  .side {
    border-right: 1px solid @border-color;
    height: 100%;
    width: @chat-list-width;
  }
}
</style>
