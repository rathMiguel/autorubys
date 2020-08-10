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

$color-primary: #D70247;

#hero{
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.color-primary{
  color: $color-primary;
  font-size: 1.35em;
}

.hero-overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 2px;
  background-image: url('~assets/images/home/ami.png');
  &:before{
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 86%);
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.95) 86%);
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.95) 86%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#e3ffffff',GradientType=1 );
  }
}

.hero-image{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  background-image: url('~assets/images/home/hero.jpg');
  height: 600px;
  position: relative;
  z-index: -10;
  @include media(sm){
    height: 250px;
  }
}

.hero-content{
  position: absolute;
  right: 20px;
  top: calc(50% - 6em);
  font-weight: 700;
  @include media(sm){
    text-align: center;
    width: 100%;
    top: 15px;
    right: 0;
  }
  p.hero-content_lead{
    text-shadow: 0 0 5px #FFF;
    display: inline-block;
    padding: 3px 10px;
    margin-bottom: 10px;
    font-size: 40px;
    border-bottom: 3px solid $color-primary;
    @include media(sm){
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
