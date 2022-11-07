<template>
  <div class="chat-room">
    <div class="side">
      <div class="user-card">
        <UserCard></UserCard>
      </div>
      <div class="chat-lists">
        <ChatLists></ChatLists>
      </div>
    </div>
    <div class="chat-box">
      <ChatBox></ChatBox>
    </div>
  </div>
</template>

<script>
import UserCard from "../layouts/UserCard.vue";
import ChatLists from "../layouts/ChatLists.vue";
import ChatBox from "./ChatBox.vue";

export default {
  name: "ChatRoom",
  components: {
    UserCard,
    ChatLists,
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
    .chat-lists {
      flex: 1;
    }
  }
  .chat-box {
    flex: 1;
  }
}
</style>
