

<template>
  <div class="login">
  <p> 登录</p>
    <el-button type="primary" @click="open1">主要按钮</el-button>
  </div>
</template>

<script>
  import request from "../helpers/request"
  window.request = request
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/base.less";
  p{
    color: @themeColor;
  }
</style>