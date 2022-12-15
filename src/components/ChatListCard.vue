<template>
  <div class="card">
    <!-- 头像 -->
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div>
      <!-- 标题 -->
      <div class="name text-ellipsis">默认聊天室</div>

      <!-- 第一条信息 -->
      <div class="message text-small text-ellipsis">第一条消息</div>
    </div>
  </div>
</template>

<script>
import CircleAvatar from "./CircleAvatar.vue";

export default {
  name: "ChatListCard",
  components: {
    CircleAvatar,
  },
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  align-items: center;
  height: @list-card-height;
  .avatar-img {
    margin: 0 10px;
  }
  .name {
    margin: 5px 0;
    font-weight: bold;
  }
}
</style>
