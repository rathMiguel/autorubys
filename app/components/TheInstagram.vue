<template lang="pug">
div
  //- pre
    p {{ number }}
  .media-loop
    template(v-for="(post, index) in posts.business_discovery.media.data", v-if="index < 8")
      span.media-block(v-on:click="popupOpen(index)")
        .media-block__photo(:style="{ backgroundImage: 'url(' + post.media_url + ')' }")
    .popup-layer(v-if="trigger")
      .popup-wrap(v-on:click.self="popupClose")
        .popup-panel
          .popup-controls
            i.control-close(v-on:click="popupClose")
            i.control-left(v-on:click="popupNumberDecrement" v-if="number > 0")
            i.control-right(v-on:click="popupNumberIncrement" v-if="number < 8")
          .popup-panel__wrap
            .popup-panel__photo(:style='{ backgroundImage: `url(${posts.business_discovery.media.data[number].media_url})` }')
            .popup-panel__contents
              p(v-text=`posts.business_discovery.media.data[number].caption`)
            .popup-panel__footer
              a(:href=`posts.business_discovery.media.data[number].permalink`, target="_blank") 詳しく見る
</template>

<script>

export default {
  data() {
    return {
      posts: {
        business_discorvey: {
          media: {
            data: null
          }
        }
      },
      trigger: false,
      number: 0
    }
  },
  methods: {
    popupOpen(index){
      this.number = index
      return this.trigger = true
    },
    popupClose(){
      return this.trigger = false
    },
    popupNumberIncrement(){
      return this.number += 1
    },
    popupNumberDecrement(){
      return this.number -= 1
    }
  },
  mounted(){
    this.$axios.get('https://graph.facebook.com/v7.0/17841411805612073?fields=business_discovery.username(autorubys696){id,followers_count,media_count,ig_id,media{caption,media_url,media_type,permalink,like_count,comments_count,timestamp,id}}&access_token=EAADuZAxU61T0BALmDRZAOFVVeuftHdR4QHIstp69TtWfqFbfYJL2OWdlGZCcUU4OQjUV7hEjsRr6iHYszU2mLOxIKNbKJNyZCV5P5s4nxHYrVOWLPPygJXZAOcLW8TOlf5f952wT4ZBKmCQ3G7y51btz1ro6nWbwZAXPsno2qzz1QZDZD')
    .then((res) => {
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>

// media popup

.popup-layer{
  position: fixed;
  z-index: 1010;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(#000, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.popup-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  @include media(md-lg){
    padding: 15px;
  }
}

.popup-panel{
  background-color: #fff;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  font-size: 16px;
  position: relative;
  z-index: 10;
  border: 4px solid $color-secondary;
  cursor: default;
  @include media(sm){
    font-size: 13px;
  }

  &__wrap{
    overflow: auto;
    height: 80vh;
    padding: 10px;
  }

  &__photo{
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 10px;
    @include media(md){
      height: 400px;
    }
    @include media(md-lg){
      height: 500px;
    }
  }

  &__footer{
    text-align: right;
  }
}

// controls

.control-close{
  background-image: url('~assets/images/common/times-solid-w.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22px;
  display: inline-flex;
  width: 44px;
  height: 44px;
  background-color: $color-secondary;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease 0.3s;
  @include media(md-lg){
    width: 60px;
    height: 60px;
  }
  &:hover{
    background-color: lighten($color-secondary, 10);
    cursor: pointer;
  }
}

@mixin controls-arrow($img){
  background-image: url('#{$img}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 12px;
  display: inline-flex;
  width: 44px;
  height: 44px;
  background-color: $color-secondary;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  margin-top: -22px;
  transition: all ease 0.3s;
  @include media(md-lg){
    width: 60px;
    height: 60px;
    margin-top: -30px;
  }
}

.control-left{
  @include controls-arrow('~assets/images/common/chevron-left-solid-w.svg');
  left: -20px;
  @include media(md-lg){
    left: -80px;
  }
  &:hover{
    transform: translateX(-2px);
    background-color: lighten($color-secondary, 10);
    cursor: pointer;
  }
}

.control-right{
  @include controls-arrow('~assets/images/common/chevron-right-solid-w.svg');
  right: -20px;
  @include media(md-lg){
    right: -80px;
  }
  &:hover{
    transform: translateX(2px);
    background-color: lighten($color-secondary, 10);
    cursor: pointer;
  }
}


// media layout

.media-loop{
  display: flex;
  flex-wrap: wrap;
}

.media-block{
  width: 25%;
  height: 25vw;
  display: flex;
  &__photo{
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
}
</style>
