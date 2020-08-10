<template lang="pug">
div
  dl.news-list(v-for="post in posts")
    dt {{ $moment(post.date).format("YYYY.MM.DD") }}
    dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
</template>

<script>

const axios = require('axios')

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted(){
    axios.get('https://autorubys.com/news/wp-json/wp/v2/posts/?per_page=5&categories_exclude=8')
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>
.news-list{
  a{
    color: #222;
  }
}
</style>
