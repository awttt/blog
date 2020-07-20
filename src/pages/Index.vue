<template>
  <div id="index">
<section class="blog-posts">
  <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">

    <figure class="avatar">
      <div class="img" style="background: red;width: 50px;height: 50px">
        头像</div>
      <figcaption >{{blog.user.username}}</figcaption>
    </figure>
    <div class="xxx">
      <div class="title">
        <h3>{{blog.title}}</h3><span> {{blog.createdAt}}</span>
      </div>
      <p>{{blog.description}}</p>
    </div>

  </router-link>
</section>
  </div>

</template>

<script>
  import blog from '@/api/blog.js'
  import dayjs from "dayjs"



  export default {
    data () {
      return {
        blogs: [],
        total: 0,
        page: 1,
        createdAt: '',
      }
    },

    created() {
      this.page = parseInt(this.$route.query.page) || 1
      blog.getIndexBlogs({ page: this.page }).then(res => {
        console.log(res)
        this.blogs = res.data
        blog.createdAt = dayjs(res.data.createdAt).
        format('YYYY年M月D日')
        console.log(blog.createdAt )
        this.total = res.total
        this.page = res.page
      })


    },

    methods: {
      onPageChange(newPage) {
        console.log(newPage)
        blog.getIndexBlogs({ page: newPage }).then(res => {
          console.log(res)
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({ path: '/', query: { page: newPage}})
        })
      }
    },

  }
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
        margin-left: 5px;
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