<template lang="pug">
div
  dl.news-list(v-for="post in posts")
    dt {{ $moment(post.date).format("YYYY.MM.DD") }}
    dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
</template>

<script>

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=5&categories_exclude=8`)
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
