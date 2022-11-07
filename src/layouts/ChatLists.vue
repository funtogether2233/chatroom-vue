<template>
  <div class="chat-list">
    <ChatListCard></ChatListCard>
    <ChatListCard></ChatListCard>
    <ChatListCard></ChatListCard>
  </div>
</template>

<script>
import ChatListCard from "../components/ChatListCard.vue";

export default {
  name: "ChatLists",
  components: {
    ChatListCard,
  },
};
</script>

<style lang="less" scoped>
.chat-list {
  overflow: auto;
  border-top: 1px solid @border-color;
}
</style>
