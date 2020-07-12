<template>
  <div id="index">
<section class="blog-posts">
  <div class="item">
    <figure class="avatar">
      <div class="img" style="background: red;width: 50px;height: 50px">头像</div>
      <figcaption >用户名</figcaption>
    </figure>
    <div class="xxx">
      <div class="title">
        <h3>标题</h3><span>3天前</span>
      </div>
      <p>文章内容</p>
    </div>

  </div>
</section>
  </div>

</template>

<script>
</script>

<style scoped lang="less">
  #index {
    border: 1px solid red;

    .blog-posts{

    }
    .item{
    display: flex;
      flex-direction: row;
    }
    .title{
      display: flex;
      flex-direction: row;
      margin-left: 0px;
      span{
        font-size: 12px;
        font-weight: normal;
        margin-top: 27px;
      }
    }
    .xxx{
      display: flex;
      flex-direction: column;
    }

    .avatar{
      figcaption{
        font-size: 12px;
        font-weight: normal;
        margin-top: 15px;
      }
    }
    .img{

    }

  }

</style>