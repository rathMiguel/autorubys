<template lang="pug">
div
  //- p {{ posts }}
  .media-loop
    a.media-block(
      v-for="(post, index) in posts.business_discovery.media.data",
      v-if="index < 8", :href="post.permalink",
      target="_blank")
        .media-block__photo(:style="{ backgroundImage: 'url(' + post.media_url + ')' }")
</template>

<script>

const axios = require('axios')

export default {
  data() {
    return {
      posts: {
        business_discovery: {
          media: {
            data: null
          }
        }
      }
    }
  },
  mounted(){
    axios.get('https://graph.facebook.com/v7.0/17841411805612073?fields=business_discovery.username(autorubys696){id,followers_count,media_count,ig_id,media{caption,media_url,media_type,permalink,like_count,comments_count,timestamp,id}}&access_token=EAADuZAxU61T0BALmDRZAOFVVeuftHdR4QHIstp69TtWfqFbfYJL2OWdlGZCcUU4OQjUV7hEjsRr6iHYszU2mLOxIKNbKJNyZCV5P5s4nxHYrVOWLPPygJXZAOcLW8TOlf5f952wT4ZBKmCQ3G7y51btz1ro6nWbwZAXPsno2qzz1QZDZD')
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>

.media-loop{
  display: flex;
  flex-wrap: wrap;
}

.media-block{
  width: 25%;
  height: 25vw;
  display: flex;
  &__photo{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
}
</style>
