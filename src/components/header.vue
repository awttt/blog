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
      <div class="headRight">
        <router-link to="/create"><i class="icon el-icon-plus" style="color:#2C3E50"></i></router-link>
      <div class="user">
        <i class="icon el-icon-s-custom">
          <ul>
            <li><router-link to="/my">我的</router-link></li>
            <li><a href="#" @click="onLogout">注销</a></li>
          </ul>
        </i>
      </div>
      </div>

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
        this.$router.push({path:'/'})
      }

    }
  }
</script>


<style lang="less">
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
  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;

        }
      }
    }
    &:hover ul {
      display: block;
    }
  }
  .headRight{
    display: flex;
    flex-direction: row;
  }
</style>

