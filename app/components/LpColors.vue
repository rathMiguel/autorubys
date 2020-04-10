<template lang="pug">
.colors.section#colors
  .section-header
    h2.title.section-title カラーバリエーション例
    span.section-title__en Colors
  .container
    .slide-wrap
      slick(ref="slick" :options="slickOptions")
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_yellow_black.jpg")
          .slide-block_caption イエロー×ブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_white_black.jpg")
          .slide-block_caption ホワイト×ブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_Green_White.jpg")
          .slide-block_caption グリーン×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_black_White.jpg")
          .slide-block_caption ブラック×ホワイト
  .colors-outro
    .container
      p グリルのカラーカスタマイズも承っております。詳しくは
        nuxt-link(v-scroll-to="'#form'" to) お問い合わせ
        |ください。
</template>

<script>

export default {
  data() {
    return {
      slickOptions: {
        fade: true,
        dots: true,
        speed: 100,
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
  max-width: 400px + 80px;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFF;
  border: 1px solid #DDD;
  padding: 20px;
  @include media(sm){
    padding: 10px;
  }
}

.slide-block{
  &_caption{
    text-align: center;
    padding-top: 5px;
  }
}

/deep/ .slick-slide{
  outline: none;
  margin-bottom: 1em;
}

/deep/ .slick-dots{
  padding-top: 2em;
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
      &:after{
        content: "";
        position: absolute;
        left: -1px;
        display: block;
        height: 14px;
        width: 28px;
        background-color: transparent;
        border-radius: 0 0 200px 200px;
      }
    }
    &:nth-child(1){
      button{
        background-color: #F2FF00;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(2){
      button{
        background-color: #EFEFEF;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(3){
      button{
        background-color: #1A6600;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(4){
      button{
        background-color: #333;
        &:after{
          background-color: #EFEFEF;
        }
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
