<template>
  <div>
    <img src="../assets/img/avatar-test.jpg" class="circle-avatar" />
  </div>
</template>

<script>
export default {
  name: "CircleAvatar",
};
</script>

<style lang="less" scoped>
.circle-avatar {
  border-radius: 50%;
  width: @img-side-length;
  height: @img-side-length;
}
</style>
