

<template>
  <div class="login">
  <h4> 用户名</h4>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
  <h4>密码</h4>
    <el-input placeholder="请输入密码" v-model="password" show-password @keyup.enter="onLogin">
    </el-input>
    <el-button @click="onLogin">立即登录</el-button>
  </div>
</template>

<script>
  import request from "../helpers/request"
  import {mapActions} from 'vuex'
  window.request = request
  export default {
    data() {
      return {
        username: '',
        password:''
      }
    },
    methods:{
      ...mapActions(['login']),
      onLogin(){
        this.login({username:this.username,password: this.password})
        .then(()=>{
          this.$router.push({path:'/'})
        })
        console.log(this.username +':'+this.password)
      }
    }
  }
</script>

<style scoped lang="less">

</style>