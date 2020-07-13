<template>

  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <div class="spaces"><div class="space"></div><p class="msg">限30个字</p></div>
    <h3 >内容简介</h3>
    <el-input type="textarea" v-model="description"  :autosize="{ minRows: 2, maxRows: 6}"></el-input>
    <div class="spaces"><div class="space"></div><p class="msg">限30个字</p></div>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30}"></el-input>
    <div class="spaces"><div class="space"></div><p class="msg">限30个字</p></div>
    <p class="choose">
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
    </div>
</template>

<script>

</script>

<style scoped lang="less">
  #create{
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
    .choose{
      width: 160px;
    }
    button{
      width: 68px;
    }
    el-input{
      padding: 20px 20px;
      border: none;
    }
    h3{
    width: 80px;
      margin-left: 15px;
    }
    .spaces{
      display: flex;
      justify-content: space-between;
    }
    p.msg{
      font-size: 12px;
      font-weight: normal;
      width: 55px;
    }

  }


</style>