<template lang="pug">
div(v-if="posts.length || postsSticky.length")
  #news
    .container
      .news-wrap
        h3.news-title お知らせ
        .news-content
          template(v-if="postsSticky" v-for="post, index in postsSticky")
            dl.news-dl(v-if="index <= 0")
              dt {{ $moment(post.date).format("YYYY.MM.DD") }}
              dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
          dl.news-dl(v-if="posts.length" v-for="post in posts")
            dt {{ $moment(post.date).format("YYYY.MM.DD") }}
            dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      postsSticky: []
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=1&categories=8&sticky=false`)
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))

    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=1&categories=8&sticky=true`)
    .then((res) => {
      return this.postsSticky = res.data
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
  padding-top: 10px;
  padding-bottom: 10px;
  @include media(lg){
    font-size: 16px;
  }
  a{
    color: #FFF;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
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
