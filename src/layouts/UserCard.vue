<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <p class="name">用户</p>
  </div>
</template>

<script>
export default { name: "UserCard", components: {} };
</script>

<style lang="less" scoped>
.card {
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  height: @chat-list-height;
  .avatar {
    .avatar-img();
    margin: 0 10px;
  }
  .name {
    flex-grow: 1;
  }
}
</style>
