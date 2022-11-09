<template>
  <div class="card">
    <CircleAvatar class="avatar-img"></CircleAvatar>
    <div>
      <div class="name">聊天室n</div>
      <div class="message">第一条消息</div>
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
  margin: 1px 0 1px 10px;
  border-radius: 4px;
  height: @list-card-height;
  .avatar-img {
    margin: 0 10px;
  }
  .name {
    .text-ellipsis();
    margin: 5px 0;
    font-weight: bold;
  }
  .message {
    .text-ellipsis();
    font-size: 12px;
  }
}
.card:hover {
  background-color: @list-hover-color;
}
.card:focus {
  background-color: @list-focus-color;
}
</style>
