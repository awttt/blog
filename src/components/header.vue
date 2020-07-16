<template>
 <header :class="{login: isLogin, 'no-login': !isLogin}">
<template v-if="!isLogin">
     <h1>LET'S SHARE</h1>
     <p>精品博客汇聚</p>
     <div class="btns">
     <el-button @click="onLogin">立即登录</el-button>
   <el-button @click="onRegister">注册帐号</el-button>
     </div>
</template>

<template v-if="isLogin">
  <div id="login">
    <h1 class="title">LET'S SHARE</h1>
    <div>
    <i class="icon el-icon-plus"></i>
    <i class="icon el-icon-s-custom"></i>
    </div>
  </div>

</template>


 </header>
</template>

<script>

  import auth from "../api/auth"
  window.auth = auth

  import {mapGetters,mapActions} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },
    created() {
      this.checkLogin()
    },


    methods: {
      ...mapActions([
        'checkLogin',
        'logout',
        'login'
      ]),
      onLogin(){
        this.$router.push({path:'/login'})
      },
      onRegister(){
        this.$router.push({path:'/register'})
      }
      ,
      onLogout() {
        this.logout()
      }

    }
  }
</script>


<style>
  #header {
    background: #66B1FF;
    display: flex;
    flex-direction: column;
  }
  #footer{
    background: rgb(215,215,215);
    font-size: 13px;
    padding: 10px;
  }
  #main{
    flex-grow: 1;
    overflow: auto
  }
  .btns{
    margin: 20px;
  }
  #login{
    display: flex;
    justify-content: space-between;
  }
  .icon{
    margin-top: 25px;
    width: 2em;
    height: 2em;
    font-size: 30px;
  }
  .title{
    margin-left: 50px;
  }
</style>

