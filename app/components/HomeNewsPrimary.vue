<template lang="pug">
div(v-if="posts.length")
  #news
    .container
      .news-wrap
        h3.news-title お知らせ
        dl.news-dl(v-for="post in posts")
          dt {{ $moment(post.date).format("YYYY.MM.DD") }}
          dd {{ post.title.rendered }}
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=1&categories=8`)
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>
#news{
  background-color: $color-black;
  color: #FFF;
  @include media(lg){
    font-size: 16px;
  }
  @include media(sm){
    padding-top: 10px;
    padding-bottom: 10px;
  }
  a{
    color: #FFF;
  }
}

.news-wrap{
  @include media(md-lg){
    display: flex;
    align-items: center;
    height: 50px;
  }
}

.news-title{
  margin-right: 1em;
  border: 1px solid #FFF;
  display: inline-block;
  padding: 1px 10px;
  @include media(sm){
    margin-bottom: 5px;
  }
}

.news-dl{
  dt{
    float: left;
    font-size: 0.85em;
    margin-top: .15em;
  }
  dd{
    padding-left: 6em;
  }
}
</style>
