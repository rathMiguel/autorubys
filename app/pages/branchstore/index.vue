<template lang="pug">
  div#main
    #pagenav
      ul.pagenav-list
        li: nuxt-link(v-scroll-to="'#topics'" to) トピックス
        li: nuxt-link(v-scroll-to="'#features'" to) ブランチストアの特徴
        li: nuxt-link(v-scroll-to="'#access'" to) 交通アクセス
    .hero
      .hero__logo: img(src="~/assets/images/branch/hero_catch.svg" alt="ブランチストア OPEN!!")
      .hero__cta
        span.hero-text--youtube: img(src="~/assets/images/branch/hero_youtube_text.svg" alt="オートルビーズブランチストア公式YouTube ジムニーの魅力を配信中！")
        a(href="https://www.youtube.com/channel/UCdXNgB5FDoNhbhDAythhRTA/videos" target="_blank").hero-link--youtube: img(src="~/assets/images/branch/hero_youtube_btn.svg" alt="")
      //- .hero__scroll
        nuxt-link(v-scroll-to="`#scrolldown`" to)
          span.scroll-text scroll
          i.scroll-down: img(src="~/assets/images/branch/down.svg" alt="")
    i#scrolldown
    section#topics
      .topics-bg
        .container
          header.topics-header
            h2.title.topics-header__title Topics
          BranchNews
          footer.topics-footer
            a(href="https://www.instagram.com/autorubysbranchstore1805/", target="_blank").c-button.c-button_primary2.c-button-lg.c-button-instagram
              i.icon.icon-instagram
              |Instagramで見る
    section#intro
      .intro-bg
        .container
          header.intro-header
            h2.title.intro-title
              span.en-strong The World that spread with 
                span.mark-jimny Jimny
                br
              span.mark-jimny ジムニー
              |と共に広がる世界
          .intro-content
            p ジムニーで繋がり広がる輪。<br>趣味に遊びに自然と広がる仲間や友。<br>今までもこれからも　多種多様なスタイルを
    section#features
      .features-bg
        header.section-header
          span.section-title Features
          h3.c-title.title-secondary ブランチショップ　3つの特徴
        .section-main
          .container
            .features-main
              .features-box
                .features-box__photo: img(src="~/assets/images/branch/features_01@2x.jpg" alt="")
                .features-box__content
                  i.features-num 1
                  h3.title.features-title ディスプレイ
                  p
                    span.feature-paragraph 商品を見て触って、イメージ出来る。
                    span.feature-paragraph その名の通りのパーツショップの展示ブース。
              .features-box
                .features-box__photo: img(src="~/assets/images/branch/features_02@2x.jpg" alt="")
                .features-box__content
                  i.features-num 2
                  h3.title.features-title スタイルの提案
                  p
                    span.feature-paragraph デモカー、他メーカーの商品も使用し、
                    span.feature-paragraph 遊びに趣味に広がりを。
              .features-box
                .features-box__photo: img(src="~/assets/images/branch/features_03@2x.jpg" alt="")
                .features-box__content
                  i.features-num 3
                  h3.title.features-title 出会い
                  p
                    span.feature-paragraph お店としても人としても
                    span.feature-paragraph これからの出会い、繋がりを大切に。
    section#gallery
      .gallery-bg
        header.section-header.section-header--inverse
          span.section-title Gallery
          h2.c-title.title-secondary イメージギャラリー
        .section-main
          .container
            .gallery-grid
              .gallery-grid-in.gallery-grid-in-1
                .gallery-block.gallery-block-1
              .gallery-grid-in.gallery-grid-in-2
                .gallery-block.gallery-block-2
                .gallery-block.gallery-block-3
              .gallery-grid-in.gallery-grid-in-3
                .gallery-block.gallery-block-4
            .gallery-grid
              .gallery-grid-in.gallery-grid-in-4
                .gallery-block.gallery-block-5
                .gallery-block.gallery-block-6
                .gallery-block.gallery-block-7
                .gallery-block.gallery-block-8
              .gallery-grid-in.gallery-grid-in-5
                .gallery-block.gallery-block-9
    section#access
      .access-bg
        header.section-header
          span.section-title Access
          h2.c-title.title-secondary 交通アクセス
        .section-main
          .container
            .access-map
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.08664771204127!2d138.6306771631548!3d35.223195337883894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f120.1!3m3!1m2!1s0x601bd142ac929379%3A0xf2a5e58d6c90e83e!2z44Kq44O844OI44Or44OT44O844K644OW44Op44Oz44OB44K544OI44Ki!5e0!3m2!1sja!2sjp!4v1624885273697!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            .access-main
              .access-main__photo: img(src="~/assets/images/branch/access_photo1@2x.jpg" alt="オートルビーズ　ブランチストア")
              .access-main__content
                h3.c-title.title-secondary 【オートルビーズ　ブランチストア】
                p 静岡県富士宮市小泉1805-1
                p TEL：
                  a(href="tel:0544265508").tel 0544-26-5508　
                  |FAX：0544-55-5753
                ul.list-social.list-social--circle
                  li: a(href="https://www.instagram.com/autorubysbranchstore1805/" target="_blank"): img(src="~/assets/images/icons/38-instagram.svg" alt="Instagram" width=24)
                  li: a(href="https://www.youtube.com/channel/UCdXNgB5FDoNhbhDAythhRTA/videos" target="_blank"): img(src="~/assets/images/icons/18-youtube.svg" alt="Instagram" width=24)
</template>

<script>
import BranchNews from '~/components/BranchNews.vue'

export default {
  components: {
    BranchNews
  },
  layout: 'lp',
  head () {
    return {
      title: 'オートルビーズのブランチストア（静岡県富士宮市）',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ],
    }
  },
  data: function() {
    return {
      breadcrumbs: [
        {
          title: 'ブランチストア',
          link:  ''
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

#main{
  @include media(md-lg){
    font-size: 16px;
  }
}

//
// pagenav
//

.pagenav-list{
  position: absolute;
  top: 40vh;
  left: 0;
  z-index: 1010;
  @include media(sm){
    display: none;
  }

  li{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 1.2em;
  }

  a{
    display: inline-block;
    background-color: rgba(#000, 0.5);
    color: #FFF;
    text-decoration: none;
    padding: 6px 10px;
    padding-right: 20px;
  }
}

//
// hero
//

.hero{
  background-image: url('~/assets/images/branch/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @include media(sm){
    height: 330px;
  }
  @include media(md-lg){
    height: 800px;
  }

  &__logo{
    @include media(sm){
      width: 200px;
    }
    @include media(lg){
      width: 600px;
      img{
        width: 100%;
      }
    }
  }

  &__cta{
    
  }

  &__scroll{
    position: absolute;
    bottom: 30px;
    left: 50%;
    text-align: center;
    text-decoration: none;
    margin-left: -35px;
    @include media(sm){
      margin-left: -18px;
      bottom: 10px;
      display: none;
    }
    a{
      color: #FFF;
      text-decoration: none;
      font-size: 14px;
    }
  }

  .scroll-text{
    display: block;
    @include media(sm){
      font-size: 12px;
    }
  }

  .scroll-down{
    display: block;
    text-align: center;
    width: 70px;
    @include media(sm){
      width: 36px;
    }
  }
}

.hero-text{
  &--youtube{
    display: block;
    margin-top: 1em;
    @include media(sm){
      width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    @include media(lg){
      margin-top: 2em;
      img{
        width: 350px;
      }
    }
  }
}

.hero-link{
  &--youtube{
    margin-top: 1em;
    display: block;
    @include media(sm){
      width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    @include media(lg){
      margin-top: 2em;
      text-align: center;
    }
  }
}

//
// topics
//

.topics-bg{
  background-image: url('~/assets/images/branch/topics_bg@2x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 40px;
  @include media(sm){
    padding-top: 20px;
  }
}

.topics-header{
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 20px;
  &:before{
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 2em;
    height: 2px;
    background-color: #000;
    @include media(sm){
      left: 50%;
      margin-left: -1em;
    }
  }

  &__title{
    font-weight: 700;
    font-size: 1.6em;
    @include media(sm){
      text-align: center;
      font-size: 2.2em;
    }
  }
}

.topics-footer{
  text-align: center;
  margin-top: 2em;
}

//
// intro
//

.intro-bg{
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url('~/assets/images/branch/intro_Bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  color: #FFF;
  text-shadow: 3px 3px 3px rgba(#000, 0.6);
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
    background-size: 740px;
  }
}

.mark-jimny{
  color: yellow;
}

.intro-header{
  margin-bottom: 2em;
}

.intro-title{
  font-weight: 700;
  text-align: center;
  font-size: 1.6em;
  line-height: 1.4;
}

.intro-content{
  text-align: center;
  @include media(md-lg){
    font-size: 1.2em;
  }
  p{
    line-height: 2.5;
  }
}

.en-strong{
  font-family: 'Yellowtail', cursive;
  font-size: 2.8em;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
  @include media(sm){
    display: block;
    font-size: 1.6em;
    line-height: 1.2em;
    margin-bottom: 5px;
  }
}

//
// features
//

.features-bg{
  background-image: url('~/assets/images/branch/features_bg.jpg');
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.section-header{
  margin-bottom: 80px;
  position: relative;
  padding-bottom: 25px;
  @include media(sm){
    margin-bottom: 40px;
  }
  &:before{
    content: "";
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 100px;
    height: 10px;
    background-image: url('~/assets/images/branch/heading_line.svg');
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -(100px / 2);
  }

  .section-title{
    color: inherit;
    font-size: 4em;
    font-family: 'Bebas Neue', cursive;
    text-shadow: 3px 3px 0 #FFF;
    @include media(sm){
      font-size: 3em;
    }
  }

  &--inverse{
    color: #FFF;
    &:before{
      background-image: url('~/assets/images/branch/heading_line_w.svg');
    }

    .section-title{
      text-shadow: 3px 3px 0 #000;
    }
  }
}

.features-box{
  position: relative;
  z-index: 50;
  margin-bottom: 60px;
  @include media(sm){
    margin-bottom: 10px;
  }

  &__photo{
    z-index: 10;
    @include media(md-lg){
      width: 450px;
      position: absolute;
    }
    @include media(sm){
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      padding-top: 30px;
    }
  }

  &__content{
    max-width: 750px;
    @include media(md-lg){
      position: relative;
      z-index: 50;
      min-height: 300px;
    }
    @include media(sm){
      padding-bottom: 20px;
    }
    
    .features-num{
      color: rgba(#666, 0.4);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 15em;
      position: absolute;
      top: 0px;
      font-family: 'Teko', sans-serif;
      line-height: 0;
      // display: none;
      font-weight: 300;
      &:after{
        content: ".";
      }
      @include media(sm){
        left: 0 !important;
        top: -30px;
        right: auto;
        z-index: 20;
        width: 50px;
        height: 50px;
        font-size: 20px;
      }
    }
  }

  &:nth-child(odd){
    .features-box{
      &__photo{
        @include media(md-lg){
          right: 0;
          top: -50px;
        }
      }

      &__content{
        @include media(md-lg){
          padding-right: 220px;
          
        }

        .features-num{
          left: -150px;
          top: 40px;
        }
      }
    }
  }

  &:nth-child(even){
    .features-box{
      &__photo{
        @include media(md-lg){
          left: 0;
          top: -50px;
        }
      }

      &__content{
        @include media(md-lg){
          padding-left: 220px;
          margin-left: auto;
          
        }

        .features-num{
          right: -150px;
          top: 50px;
        }
      }
    }
  }
}

.features-title{
  font-size: 2em;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 15px;
  color: #FFF;
  background-color: #222;
  padding: 30px 20px;
  padding-left: 40px;
  margin-left: -20px;
  margin-right: -20px;
  box-shadow: 7px 7px rgba(#666, 0.3);
  @include media(sm){
    padding: 10px 20px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
  }
}

.feature-paragraph{
  display: inline-block;
  color: #FFF;
  background-color: rgba(#400000, 0.3);
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px 10px;
  @include media(sm){
    font-size: 1em;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

//
// gallery
//

.gallery-bg{
  background-image: url('~/assets/images/branch/gallery_bg.png');
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.gallery-block{
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 5px;

  &-5,
  &-6,
  &-7,
  &-8{
    width: calc(50% - 10px);
    height: calc(50% - 10px);
  }

  &-9{
    height: calc(100% + 20px);
  }
}

.gallery-grid{
  display: flex;
  justify-content: center;
  margin-left: -5px;
  margin-right: -5px;
  margin-bottom: -10px;

  &-in{
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 100%;
    margin: 5px;
    @include media(sm){
      height: 200px;
    }
    
    .gallery-block{

    }

    &-1{
      width: 45%;
    }

    &-2{
      width: 30%;
    }

    &-3{
      width: 25%;
    }

    &-4{
      width: 50%;
      flex-wrap: wrap;
      flex-direction: row;
    }

    &-5{
      width: 50%;
      margin-left: -5px;
      @include media(sm){
        
      }
    }
  }
}

$galleryImages:
  'gallery_1.jpg',
  'gallery_2.jpg',
  'gallery_3.jpg',
  'gallery_4.jpg',
  'gallery_5.jpg',
  'gallery_6.jpg',
  'gallery_7.jpg',
  'gallery_8.jpg',
  'gallery_9.jpg';

@each $img in $galleryImages {
  .gallery-block{
    &.gallery-block-#{index($galleryImages, $img)}{
      background-image: url('~/assets/images/branch/#{$img}');
    }
  }
}

//
// access
//

.access-bg{
  padding-top: 80px;
  padding-bottom: 80px;
  margin-bottom: 40px;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @include media(md-lg){
    margin-bottom: 120px;
  }
}

.title-secondary{
  font-size: 1.2em;
  margin-bottom: 10px;
}

.access-map{
  margin-bottom: 40px;
  iframe{
    width: 100%;
    height: 280px;
  }
}

.access-main{
  &__photo{
    @include media(md-lg){
      float: left;
      width: 404px;
    }
  }
  &__content{
    padding-top: 40px;
    @include media(md-lg){
      padding-left: 404px + 60px;
    }
  }
}

.list-social{
  &--circle{
    li{
      display: inline-block;
      margin-right: 10px;
      a{
        background-color: #000;
        border-radius: 100%;
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

</style>