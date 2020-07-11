<template>
  <div id="app">

    <Header id='header'></Header>
      <main id="main">
        <router-view/>
      </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'
  export default {
    name:'App',
    components:{
      Header,
      Footer
    }
  }
</script>


<style lang="less">
#app {
font-family: 'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#header {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}
#footer{
  border: 1px solid purple;

}
  #main{
    flex-grow: 1;
    overflow: auto
  }
</style>
