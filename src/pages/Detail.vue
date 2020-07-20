<template>
  <div id="detail">
    <section class="user-info">

      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}
      </router-link> 发布于{{this.createdAt}}</p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
  import marked from 'marked'
  import blog from "../api/blog"
  import dayjs from 'dayjs';



  export default {
    data () {
      return {
        title: '',
        rawContent: '',
        user: {},
        createdAt: '',
      }
    },



    created() {
      this.blogId = this.$route.params.blogId
      blog.getDetail({ blogId: this.blogId}).then(res => {
        console.log(res)
        this.title = res.data.title
        this.rawContent = res.data.content
        this.createdAt = dayjs(res.data.createdAt).format('YYYY年M月D日')
        console.log(dayjs(res.data.createdAt).format('YYYY年M月D日'))
        this.user = res.data.user

      })

    },

    computed: {
      markdown() {
        return marked(this.rawContent)
      }
    }
  }
</script>

<style scoped lang="less">

</style>