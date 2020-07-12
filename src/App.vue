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
  body{
    margin: 0;
    padding: 0;
    border: 0;
  }

  #app {
    font-family: 'Avenir',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    height: 100vh;
    display: flex;
    flex-direction: column;
  }


</style>
