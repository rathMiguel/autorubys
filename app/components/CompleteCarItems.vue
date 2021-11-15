<template lang="pug">
  .tabarea
    //- pre {{ $data.current }}
    //- pre {{ $data.posts }}
    .tab-header
      ul.tab-list
        template(v-for="name in posts")
          li(:class="{'active' : name.id == current }" v-on:click="tabClick(name.id)") {{ name.title.rendered }}
    .tab-main
      .tab-block(v-for="val in posts" v-show="val.id == current")
        .sliderarea
          slick(ref="slick" :options="slickOptions")
            .tab-photos(v-for="photo in val.acf.gallery"): img(:src="photo.url" alt="")
        .content
          h2.title-primary コンプリート価格
          CompleteCarTypes(:option="val.acf.options")
</template>

<style lang="scss" scoped>

$color-primary: #616C48;
$color-secondary: #BDB17F;

.tab-list{
  display: flex;
  color: $color-primary;
  li{
    margin-right: 10px;
    color: $color-primary;
    background-color: #E4DCBD;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 255px;
    height: 75px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    @include media(sm){
      font-size: 14px;
      height: 44px;
      width: 120px;
    }
    &.active{
      background-color: #fff;
    }
  }
}

.tab-main{
  padding: 50px;
  background-color: #fff;
  @include media(sm){
    padding: 15px;
  }
}

.sliderarea{
  background-color: #F2EFE5;
  overflow: hidden;
  @include media(sm){
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -15px;
    background-color: lighten(#F2EFE5, 5);
    height: auto;
  }
  img{
    height: 490px;
    width: 670px;
    object-fit: contain;
    margin-left: 70px;
    margin-right: 70px;
    @include media(md-lg){
      padding-top: 30px;
      padding-bottom: 30px;
    }
    @include media(sm){
      width: 220px;
      height: 220px;
    }
  }
}

/deep/ {
  .slick-slide{
    outline: none;
  }

  .slick-arrow{
    height: 80px;
    width: 80px;
    z-index: 100;
    background-color: #DBD6C4;
    height: 100%;
    @include media(sm){
      width: 40px;
    }
    &:before{
      opacity: 0;
    }
    &.slick-next{
      right: 0;
      background-image: url('~assets/images/completecar/complete_right.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 20px;
      @include media(sm){
        right: 0;
        background-size: 10px;
      }
    }
    &.slick-prev{
      left: 0;
      background-image: url('~assets/images/completecar/complete_left.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 20px;
      @include media(sm){
        left: 0;
        background-size: 10px;
      }
    }
  }
}

.sliderarea{
  margin-bottom: 50px;
  @include media(sm){
    margin-bottom: 30px;
  }
}

.title-primary{
  color: $color-primary;
  font-weight: 700;
  font-size: 24px;
  border: 3px solid $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 255px;
  margin-bottom: 30px;
  @include media(sm){
    width: 160px;
    font-size: 16px;
    height: 40px;
  }
}

</style>

<script>

import CompleteCarTypes from '~/components/CompleteCarTypes.vue'

export default {
  components: {
    CompleteCarTypes
  },
  data: function(){
    return {
      current: 0,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        autoplay: false,
        infinite: true,
        controls: true
      },
      posts: []
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/completecar/?per_page=10`)
    .then((res) => {
      this.current = res.data[0].id;
      return this.posts = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
  },
  methods: {
    tabClick: function(val) {
      return this.current = val
    }
  }
}
</script>
