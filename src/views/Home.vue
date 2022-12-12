<template>
  <div class="Home">
    <!-- 侧边功能栏 -->
    <div class="side-bar">
      <CircleAvatar class="avatar-img"></CircleAvatar>
      <div class="button">
        <el-icon><ChatLineRound /></el-icon>
        <p class="text-small">好友</p>
      </div>
      <div class="button">
        <el-icon><Monitor /></el-icon>
        <p class="text-small">群聊</p>
      </div>
    </div>

    <!-- 聊天对象栏 -->
    <div class="chat-bar">
      <div class="search">
        <el-input
          size="large"
          v-model="searchInput"
          placeholder="Searh something"
          :prefix-icon="Search"
        />
      </div>

      <div class="chat-lists">
        <div class="chat-list-card" v-for="i in 16" key="item">
          <ChatListCard></ChatListCard>
        </div>
      </div>
    </div>

    <!-- 聊天框 -->
    <div class="chat-box">
      <ChatBox></ChatBox>
    </div>
  </div>
</template>

<script>
import CircleAvatar from "@/components/CircleAvatar.vue";
import ChatListCard from "@/components/ChatListCard.vue";
import ChatBox from "./chat-box/Index.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

export default {
  name: "Home",
  setup() {
    const searchInput = ref("");
    return {
      Search,
      searchInput,
    };
  },
  components: {
    CircleAvatar,
    ChatListCard,
    ChatBox,
  },
};
</script>

<style lang="less" scoped>
.Home {
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
      margin: 10px;
    }
    .button {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      margin: 5px;
      border-radius: 8px;
      width: @img-side-length;
      height: @img-side-length;
      color: white;
      font-size: 24px;
    }
    .button:hover {
      background-color: @primary-hover-color;
    }
    .button:focus {
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
      justify-content: center;
      padding: 0 20px;
      border-bottom: @border-style;
      height: @header-height;
    }
    .chat-lists {
      flex: 1;
      overflow: auto;
      .chat-list-card {
        margin: 1px 0 1px 10px;
        border-radius: 8px;
      }
      .chat-list-card:hover {
        background-color: @list-hover-color;
      }
      .chat-list-card:focus {
        background-color: @list-focus-color;
      }
    }
  }
  .chat-box {
    flex: 1;
    background-color: @chat-box-background-color;
  }
}
</style>
