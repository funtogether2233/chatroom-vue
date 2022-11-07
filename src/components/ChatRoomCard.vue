<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <p class="name">聊天室n</p>
  </div>
</template>

<script>
export default {
  name: "ChatRoomCard",
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  align-items: center;
  border-bottom: 1px solid @border-color;
  width: 100%;
  height: 70px;
  .avatar {
    .avatar-img();
    margin: 0 10px 0 20px;
  }
  .name {
    flex-grow: 1;
  }
}
</style>
