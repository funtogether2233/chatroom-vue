<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <div>
      <div class="name">聊天室n</div>
      <div class="content">第一条消息</div>
    </div>
  </div>
</template>

<script>
export default { name: "ChatListCard", components: {} };
</script>

<style lang="less" scoped>
.card {
  display: flex;
  align-items: center;
  margin: 1px 10px;
  border-radius: 4px;
  height: @chat-list-height;
  .avatar {
    .avatar-img();
    margin: 0 10px;
  }
}
.card:hover {
  background-color: @card-hover-color;
}
.card:focus {
  background-color: @card-focus-color;
}
</style>
