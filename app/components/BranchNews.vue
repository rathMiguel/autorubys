<template lang="pug">
.topics-main
  //- pre {{ posts }}
  template(v-for="post in posts")
    nuxt-link.topics-block.panel(:to="'/news/post/' + post.id")
      .topics-photo(v-if="post._embedded['wp:featuredmedia']"): img(:src="post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['large']['source_url']", :alt="post.title.rendered")
      .topics-content
        .topics-date {{ $moment(post.date).format("YYYY.MM.DD") }}
        h3.title.topics-title {{ post.title.rendered }}
</template>

<script>

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?_embed&per_page=4&categories=12`)
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>
.topics-main{
  display: flex;
  flex-wrap: wrap;
  @include media(sm){
    margin-left: -5px;
    margin-right: -5px;
  }
  @include media(md-lg){
    margin-left: -20px;
    margin-right: -20px;
  }
}

.topics-block{
  color: inherit;
  text-decoration: none;
  width: 25%;
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  @include media(sm){
    width: 50%;
    padding-left: 5px;
    padding-right: 5px;
  }
}

.topics-photo{
  img{
    width: 100%;
    height: 127px;
    object-fit: cover;
    @include media(sm){
      height: 100px;
    }
  }
}

.topics-content{
  p{
    font-size: 0.8em;
    margin-bottom: 0;
  }
}

.topics-title{
  font-weight: 700;
  line-height: 1.3;
  margin-top: 3px;
  margin-bottom: 5px;
  font-size: 1.1em;
}

.topics-date{
  font-size: 0.72em;
  color: #666;
}

</style>
