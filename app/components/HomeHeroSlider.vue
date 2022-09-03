<template lang="pug">
#hero
  slick(ref="slick" :options="slickOptions")
    .slide-block(
      v-for="(slide, index) in post.acf.slider"
      :key="index"
      )
      a(:href="slide.link" v-if="slide.link"): img(:src="slide.photo.sizes.large" :alt="slide.photo.alt" decoding="async")
      img(:src="slide.photo.sizes.large" :alt="slide.photo.alt" decoding="async" v-else)
  //- |{{ count }}
  //- |{{ post.acf.slider }}
</template>

<script>
export default {
  data() {
    return {
      post: {
        acf: {
          slider: []
        }
      },
      slickOptions: {
        dots: false,
        speed: 500,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        infinite: true,
        controls: true
      },
    }
  },
  beforeUpdate () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
  },
  updated () {
    if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
      this.$nextTick(() => {
        this.$refs.slick.create(this.slickOptions)
      })
    }
  },
  activated () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
    if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
      this.$nextTick(() => {
        this.$refs.slick.create(this.slickOptions)
      })
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wuxt/v1/front-page?_embed`)
    .then((res) => {
      this.post = res.data
      return this.count = res.data.acf.slider.length
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  }
}
</script>

<style lang="scss" scoped>
#hero{
  padding-bottom: 20px;
  padding-top: 20px;
  background-image: url('~assets/images/home/bg_linen.jpg');
  border-bottom: 1px solid #666;
  overflow: hidden;
  @include media(sm){
    padding-top: 20px;
    padding-bottom: 15px;
  }
  @include media(md-lg){
    padding-top: 50px;
    padding-bottom: 40px;
  }
}

.slide-block{
  margin-left: 20px;
  margin-right: 20px;
  @include media(sm){
    margin-left: 5px;
    margin-right: 5px;
  }
  img{
    @include media(sm){
      width: 290px;
      padding: 5px;
    }
    @include media(md){
      width: 600px;
    }
    background-color: #fff;
    border: 1px solid #DDD;
    padding: 10px;
    box-shadow: 0 4px 4px rgba(#000, 0.35);
  }
}

//
// slick
//

/deep/ .slick-slide{
  outline: none;
}

/deep/ .slick-slider{
  .slick-arrow{
    height: 80px;
    width: 80px;
    z-index: 100;
    background-color: rgba(#000, 0.4);
    @include media(sm){
      height: 40px;
      width: 40px;
    }
    &:before{
      opacity: 0;
    }
    &.slick-next{
      right: 40px;
      background-image: url('~assets/images/common/chevron-right-solid-w.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 30px;
      @include media(sm){
        right: 0;
        background-size: 10px;
      }
    }
    &.slick-prev{
      left: 40px;
      background-image: url('~assets/images/common/chevron-left-solid-w.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 30px;
      @include media(sm){
        left: 0;
        background-size: 10px;
      }
    }
  }
}
</style>
