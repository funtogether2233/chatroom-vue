<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <div>
      <div class="name">聊天室n</div>
      <div class="message">第一条消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatListCard",
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  align-items: center;
  margin: 1px 0 1px 10px;
  border-radius: 4px;
  height: @list-card-height;
  .avatar {
    .avatar-img();
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
