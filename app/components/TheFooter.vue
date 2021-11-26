<template lang="pug">
  footer#footer
    .information
      .container.footer-container
        .information_wrap
          .information-header
            h2.c-title.information-title Follow Us：
          .block-social
            ul.block-social_list
              li: a(href="https://www.instagram.com/autorubys696/" target="_blank"): img(src="~assets/images/icons/38-instagram.svg" alt="Instagram" width=24)
              li: a(href="https://www.youtube.com/channel/UCJVVwZUZLVwaC0s9baUX0WA" target="_blank"): img(src="~assets/images/icons/youtube-brands.svg" alt="YouTube" width=24)
    .footer-main
      .container.footer-container
        .footer-main_wrap
          .footer-address
            .footer-logo: nuxt-link(to="/"): img(src="~/assets/images/common/logo_white.svg" alt="株式会社　オートルビーズ" width=270)
            h3.c-title: small 株式会社オートルビーズ
            address
              span.address-text 〒681-0073 鳥取県岩美郡岩美町大字大谷1485-1
          .footer-nav
            .container.footer-container
              ul.footer-nav_list
                li: nuxt-link(to='/service/') サービス案内
                li: nuxt-link(to='/products/') 製品情報
                li: nuxt-link(to='/access/') 交通アクセス
                li: nuxt-link(to='/company/') 会社概要
                li: nuxt-link(to='/branchstore/') ブランチストア
                li: nuxt-link(to='/contact/') お問い合わせ
    .copyright
      p: small Copyright © auto ruby's All Rights Reserved.
</template>

<style lang="scss" scoped>
#footer{
  background-color: lighten($color-black, 4);
  color: #FFF;
}

.footer-container{
  max-width: 1280px;
}

.information{
  background-color: lighten($color-black, 10);
  border-top: 2px solid $color-secondary;
  padding-top: 5px;
  padding-bottom: 2px;

  &_wrap{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &_header{
    text-align: center;
    margin-bottom: 20px;
  }

  .information-title{
    font-size: 15px;
  }
}


.block-social{
  &_list{
    display: flex;
    justify-content: center;
    li{
      margin-left: 5px;
      margin-right: 5px;
    }

    a{
      display: inline-flex;
      height: 28px;
      width: 28px;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
    }

    img{
      display: block;
    }
  }
}

.footer-main{
  padding-top: 20px;
  padding-bottom: 20px;
  &_wrap{
    @include media(md-lg){
      display: flex;
    }
    @include media(md){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @include media(lg){
      align-items: flex-end;
    }
  }
}

.footer-nav{
  @include media(md){
    margin-top: 10px;
  }
  @include media(lg){
    margin-left: auto;
  }
  &_list{
    display: flex;
    @include media(sm){
      display: block;
      text-align: center;
    }
    li{
      @include media(sm){
        margin-left: 0.5em;
        margin-right: 0.5em;
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 5px;
      }
       @include media(md-lg){
         margin-left: 1.5em;
       }
    }
    a{
      font-size: 16px;
      color: #FFF;
    }
  }
}

address{
  font-size: 14px;
  margin-top: 5px;
}

.copyright{
  text-align: center;
  color: #AAA;
  background-color: darken($color-black, 3);
  padding-top: 5px;
  padding-bottom: 5px;
  p{
    margin-bottom: 0;
  }
  small{
    font-size: 0.65em;
  }
}

.footer-address{
  @include media(sm){
    text-align: center;
    margin-bottom: 20px;
  }
}

.footer-logo{
  @include media(sm){
    text-align: center;
  }
}
</style>