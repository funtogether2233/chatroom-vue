<template>
  <div class="chat-room">
    <div class="side-bar">
      <CircleAvatar class="avatar-img"></CircleAvatar>
      <div class="button">
        <el-icon><ChatLineRound /></el-icon>
        <p>好友</p>
      </div>
      <div class="button">
        <el-icon><Monitor /></el-icon>
        <p>群聊</p>
      </div>
    </div>
    <div class="chat-bar">
      <div class="search">
        <el-input
          v-model="input2"
          placeholder="Type something"
          :prefix-icon="Search"
        />
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
import CircleAvatar from "@/components/CircleAvatar.vue";
import ChatListCard from "../components/ChatListCard.vue";
import ChatBox from "./chat-box/Index.vue";

export default {
  name: "Home",
  components: {
    CircleAvatar,
    ChatListCard,
    ChatBox,
  },
};
</script>

<style lang="less" scoped>
.chat-room {
  display: flex;
  background-color: white;
  height: 100%;
  .side-bar {
    display: flex;
    flex-flow: column;
    align-items: center;
    border-right: @border-style;
    width: @side-bar-width;
    background-color: @primary-color;
    .avatar-img {
      margin: 10px 0 15px;
    }
    .button {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      margin: 5px;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      color: white;
      font-size: 20px;
      p {
        font-size: 12px;
      }
    }
    .button:hover {
      background-color: @primary-hover-color;
    }
    .button:hover {
      background-color: @primary-focus-color;
    }
  }
  .chat-bar {
    display: flex;
    flex-flow: column;
    border-right: @border-style;
    width: @list-width;
    .search {
      display: flex;
      align-items: center;
      border-bottom: @border-style;
      width: 100%;
      height: @header-height;
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
