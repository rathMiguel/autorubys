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
          .slide-block_caption キネティックイエロー×マットブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_yellow_White.jpg")
          .slide-block_caption キネティックイエロー×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_white_black.jpg")
          .slide-block_caption ホワイト×マットブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_Green_White.jpg")
          .slide-block_caption ジャングルグリーン×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_black_White.jpg")
          .slide-block_caption ブルーイッシュブラックパール×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_ivory_white.jpg")
          .slide-block_caption シフォンアイボリー×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_ivory_black.jpg")
          .slide-block_caption シフォンアイボリー×マットブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_grey_white.jpg")
          .slide-block_caption ミディアムグレー×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_grey_black.jpg")
          .slide-block_caption ミディアムグレー×マットブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_Blue_black.jpg")
          .slide-block_caption ブリスクブルー×マットブラック
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_Blue_White.jpg")
          .slide-block_caption ブリスクブルー×ホワイト
        .slide-block
          .slide-block_photo: img(src="~assets/images/suzuspo/18270_silver_black.jpg")
          .slide-block_caption シルキーシルバーメタリック×マットブラック
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
  padding-bottom: 40px;
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
  bottom: -3em;
  li{
    text-align: center;
    width: auto;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
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
        left: 0;
        bottom: 0;
        display: block;
        height: 12.5px;
        width: 25px;
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
        background-color: #F2FF00;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(3){
      button{
        background-color: #EFEFEF;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(4){
      button{
        background-color: #1A6600;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(5){
      button{
        background-color: #333;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(6){
      button{
        background-color: #FFEFBF;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(7){
      button{
        background-color: #FFEFBF;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(8){
      button{
        background-color: #777;
        &:after{
          background-color: #EFEFEF;
        }
      }
    }
    &:nth-child(9){
      button{
        background-color: #777;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(10){
      button{
        background-color: #0068EA;
        &:after{
          background-color: #333;
        }
      }
    }
    &:nth-child(11){
      button{
        background-color: #0068EA;
        &:after{
          background-color: #F6F6F6;
        }
      }
    }
    &:nth-child(12){
      button{
        background-color: #DDD;
        &:after{
          background-color: #333;
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
