<template lang="pug">
div
  HomeHero
  HomeNewsPrimary
  .banners-top.text-center
    nuxt-link(to="contact/"): img(src="~/assets/images/home/completecar_bnr3.jpg")
  section.section#ourvision
    .container
      .vision-header
        h2.c-title.c-title_vision はじめまして、オートルビーズです
      p.vision-lead お客様のご希望のおクルマ探しをお手伝いします♪♪
      p 鳥取県岩美町の(株)オートルビーズ（Auto  Ruby's）です。
      p 新車・中古車販売はもちろん、車検、修理、鈑金塗装、自動車保険、オートローン、カーリースオリジナルパーツ販売などなど・・・<br>おクルマに関する事でしたら何でも当店へお任せ下さい！！<br>お客様に満足して頂けるサービス提供を心掛けております♪<br>中古車高価買取り実施中です！もちろん査定無料♪
      p また、在庫車以外にもお客様のご希望に添ったおクルマをお探し致します！<br>皆様のお越しをお待ちしておりますので、どうぞお気軽にお立ち寄り下さいませm(_ _)m
      .vision-footer
        a(href="https://www.goo-net.com/usedcar_shop/1002018/stock.html" target="_blank").c-button.c-button_primary 在庫はこちらから
          small グーネット中古車サイトへ
  section.section#products.bg-secondary
    .section-header
      .section-title 製品情報
      .section-title_en Products
    .text-center
      p オートルビーズが開発した製品を紹介します
    .section-main
      .container
        .product-cards
          .product-card
            .product-card_photo: img(src="~/assets/images/home/suzuspo_photo.jpg")
            .product-card_header
              h2.title スズスポグリル
            .product-card_main
              p 黒単色ならスポーティに、塗り分ければレトロ風味の愛らしさに。ジムニーがスズスポグリル一つで個性的なスタイルに生まれ変わります。
          .product-card
            .product-card_photo: img(src="~/assets/images/home/classic_photo.jpg")
            .product-card_header
              h2.title クラシック22スタイルグリル
            .product-card_main
              p 二代目ジムニー（JA22）風のフロントグリル。<br>古き良きジムニーのスタイルを新しいジムニーに引き継いだ、オートルビーズからの新しい提案です。
    .section-footer
      nuxt-link(to="/products/").c-button.c-button_primary2 製品情報を詳しく見る
  section.section#service
    .section-header
      .section-title サービス内容
      .section-title_en Service
    .section-main
      .container
        .service-cards
          .service-card
            .service-card_photo: img(src="~/assets/images/home/service_photo1.jpg")
            .service-card_header
              h2.title 新車、中古車販売
            .service-card_main
              p 各種メーカーの新車販売はもちろん、お客様のお探しの中古車もお探し致します<br>
          .service-card
            .service-card_photo: img(src="~/assets/images/home/service_photo2.jpg")
            .service-card_header
              h2.title 車検、修理、メンテナンス
            .service-card_main
              p 自動車整備一般<br>自動車車検業務<br>中国運輸局認証工場
          .service-card
            .service-card_photo: img(src="~/assets/images/home/service_photo3.jpg")
            .service-card_header
              h2.title 事故車修理及び鈑金塗装
            .service-card_main
              p 事故などによる鈑金塗装修理<br>パーツ等の塗装施工
        .service-footer
          nuxt-link(to="/service/").c-button.c-button_primary2 サービス内容を詳しく見る
  section.section#gallery
    .section-header
      .section-title ギャラリー
      .section-title_en Instagram Gallery
    .text-center
      p 最新のお知らせやキャンペーンもここからチェック！
    .section-main
      TheInstagram
    .section-footer
      a(href="https://www.instagram.com/autorubys696", target="_blank").c-button.c-button_primary2 さらに見る
  section.section#news
    .section-header
      .section-title ニュース・お知らせ
      .section-title_en News
    .section-main
      .container
        TheNewsList
</template>

<style lang="scss">

$color-primary: #D70247;

//
// common
//

.section{
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.section-header{
  .section-title{
    color: $color-primary;
  }
}

.section-footer{
  text-align: center;
  margin-top: 40px;
  @include media(sm){
    margin-top: 20px;
  }
}

.bg-secondary{
  background-color: #F6F6F6;
}

//
// news
//

.news-list{
  border-bottom: 1px solid #DDD;
  padding: 10px 5px;
  @include media(md-lg){
    padding: 25px 10px;
  }
  dt{
    @include media(sm){
      margin-bottom: 5px;
    }
    @include media(md-lg){
      float: left;
    }
  }
  dd{
    @include media(md-lg){
      padding-left: 8em;
    }
  }
  a{
    color: #111;
  }
}

//
// banners
//

.banners-top{
  margin-top: 80px;
  @include media(sm){
    margin-top: 20px;
    margin-bottom: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

//
// vision
//

.vision-header{
  margin-bottom: 60px;
  @include media(sm){
    margin-bottom: 20px;
  }
}

.vision-lead{
  font-weight: 700;
  font-size: 1.4em;
  margin-bottom: 20px;
}

.vision-footer{
  text-align: center;
  margin-top: 60px;
  @include media(sm){
    margin-top: 20px;
  }
}

//
// service
//

.service-cards{
  display: flex;
  @include media(sm){
    display: block;
  }
}

.service-card{
  border: 1px solid #DDD;
  background-color: #FFF;
  width: 100%;
  @include media(md-lg){
    margin-left: -1px;
    margin-right: -1px;
  }
  &_photo{

  }
  &_header{
    font-weight: 700;
    padding: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  &_main{
    padding: 15px;
    padding-top: 5px;
    @include media(md-lg){
      font-size: 15px;
    }

    p:last-child{
      margin-bottom: 0;
    }
  }

  .title{
    font-size: 1.2em;
  }
}

.service-footer{
  text-align: center;
  margin-top: 40px;
  @include media(sm){
    margin-top: 20px;
  }
}

//
// products
//

.product-cards{
  display: flex;
  justify-content: center;
  @include media(sm){
    display: block;
  }
}

.product-banner{
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
}

.product-card{
  max-width: 400px;
  overflow: hidden;
  @include media(md-lg){
    margin-left: 20px;
    margin-right: 20px;
  }

  &_photo{

  }
  &_header{
    font-weight: 700;
    padding: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  &_main{
    padding: 15px;
    padding-top: 5px;
    @include media(md-lg){
      font-size: 15px;
    }

    p:last-child{
      margin-bottom: 0;
    }
  }

  .title{
    font-size: 1.2em;
  }
}

</style>

<script>

import HomeHero from '~/components/HomeHero.vue'
import HomeNewsPrimary from '~/components/HomeNewsPrimary.vue'
import TheNewsList from '~/components/TheNewsList.vue'
import TheInstagram from '~/components/TheInstagram.vue'

export default {
  components: {
    HomeHero,
    HomeNewsPrimary,
    TheNewsList,
    TheInstagram
  },
  head () {
    return {
      title: '株式会社オートルビーズ - 鳥取県 岩美町の車販売、修理・メンテナンスまで',
      meta: [
        { hid: 'description', name: 'description', content: '株式会社オートルビーズはスズキ　ジムニーのカスタムパーツを開発、販売を行っています。また、鳥取県を中心に自動車販売、修理、メンテナンスを行っています。' }
      ]
    }
  }
}
</script>