<template>
  <div class="card">
    <img src="../assets/img/avatar-test.jpg" class="avatar" />
    <p class="name">
      聊天室n
    </p>
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
  width: 100%;
  height: @header-height;
  background-color: @header-background-color;
  .avatar {
    .avatar-img();
    margin: 0 10px 0 20px;
  }
  .name {
    .text-ellipsis();
    flex-grow: 1;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
