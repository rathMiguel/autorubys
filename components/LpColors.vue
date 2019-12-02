<template lang="pug">
.colors.section
  .section-header
    h2.title.section-title カラーバリエーション
    span.section-title__en Colors
  .container
    .slide-wrap
      slick(ref="slick" :options="slickOptions")
        .slide-block
          .slide-block_photo: img(src="http://placehold.jp/600x400.png")
          .slide-block_caption カラー名1
        .slide-block
          .slide-block_photo: img(src="http://placehold.jp/600x400.png")
          .slide-block_caption カラー名2
        .slide-block
          .slide-block_photo: img(src="http://placehold.jp/600x400.png")
          .slide-block_caption カラー名3
        .slide-block
          .slide-block_photo: img(src="http://placehold.jp/600x400.png")
          .slide-block_caption カラー名4
        .slide-block
          .slide-block_photo: img(src="http://placehold.jp/600x400.png")
          .slide-block_caption カラー名5
  .colors-outro
    .container
      p グリルのカラーカスタマイズも承っております。詳しくはお問い合わせください。
</template>

<script>

import Slick from 'vue-slick'

export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        // arrows: true,
        variableWidth: false,
        autoplay: false,
        slidesToShow: 1,
        infinite: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.colors{
  background-color: #FFF;
  background-color: lighten(#7DA1CE, 30);
}

.slide-wrap{
  max-width: 600px + 80px;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFF;
  border: 1px solid #DDD;
  padding: 40px;
}

/deep/ .slick-slide{
  outline: none;
}

/deep/ .slick-dots{
  li{
    text-align: center;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
    button{
      background-color: #AAA;
      border-radius: 50px;
      height: 35px;
      width: 35px;
      border: 5px solid #FFF;
      position: relative;
      &:before{
        color: transparent;
        position: absolute;
      }
    }
    &:nth-child(1){
      button{
        background-color: red;
      }
    }
    &:nth-child(2){
      button{
        background-color: blue;
      }
    }
    &:nth-child(3){
      button{
        background-color: yellow;
      }
    }
    &:nth-child(4){
      button{
        background-color: green;
      }
    }
    &:nth-child(5){
      button{
        background-color: black;
      }
    }
  }

  .slick-active{
    button{
      border-color: #CCC;
    }
  }
}

.colors-outro{
  padding-top: 3em;
  text-align: center;
  @include media(md-lg){
    font-size: 1.4em;
  }
}
</style>
