<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  .page-main
    .hero
      .hero-wrap
        .hero-maincar: img(src="~/assets/images/completecar/hero_car.png" alt="")
        .hero-content
          p.hero-lead.hero-lead--en complete my style 
            strong jimny 
            |with autobuy's
          p.hero-lead.hero-lead--ja - 自分だけのジムニー作り -
    section.section
      header.section-header
        h2.title.section-title--ja ラインアップ
        span.title.section-title--en Model Lineup
      .bg.bg-primary
        .container
          CompleteCarItems
    section.section
      header.section-header
        h2.title.section-title--ja コンプリートカーを選ぶ理由
        span.title.section-title--en Reason
      .bg.bg-secondary
        .container
          .reason-wrap
            .reason-block
              .reason-photo: img(src="~/assets/images/completecar/complete_photo1.jpg" alt="")
              .reason-content
                p.lead.lead-reason 新車、中古車納車時と<br class="hide-sm">同時に
                  span.marker 理想のカスタム
                  |がされたジムニーに乗れる<br class="hide-sm">素敵プラン
            .reason-block
              .reason-photo: img(src="~/assets/images/completecar/complete_photo2.jpg" alt="")
              .reason-content
                p.lead.lead-reason ローンの場合はパーツ代、<br class="hide-sm">（工賃代金）を
                  span.marker 車両代金に含める
                  |ことができるの
                  span.marker お得で楽
            .reason-block
              .reason-photo: img(src="~/assets/images/completecar/complete_photo3.jpg" alt="")
              .reason-content
                p.lead.lead-reason 構造変更が必要なカスタムの<br class="hide-sm">場合、
                  span.marker 納車時前に手続きが<br class="hide-sm">できる
                  |のでスムーズ
            .reason-block
              .reason-photo: img(src="~/assets/images/completecar/complete_photo4.jpg" alt="")
              .reason-content
                p.lead.lead-reason
                  span.marker ジムニーに特化した
                  |専門店<br class="hide-sm">だから、知識がなくても<br class="hide-sm">
                  span.marker お客様の好みや希望通り
                  |の<br>コンプリートカーが可能
    section.section.cta
      .container
        .cta-panel
          .cta-header
            h2.title.cta-title まずはお気軽に<br class="hide-lg">お問い合わせください
          .cta-content
            ul.cta-list
              li: a(href="").tel.c-button.button.button-primary
                i.icon.icon-phone: img(src="~/assets/images/icons/fa-phone.svg" alt="tel:0544265508")
                |0544-26-5508
              li: nuxt-link(to="/contact/").c-button.button.button-seconary メールでお問い合わせ
</template>

<style lang="scss" scoped>

$color-primary: #616C48;
$color-secondary: #BDB17F;

//
// hero
//

.hero{
  background-image: url('~/assets/images/completecar/hero.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  color: #FFF;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.hero-maincar{
  @include media(sm){
    text-align: center;
    img{
      width: 260px;
    }
  }
}

.hero-lead{
  &--en{
    text-shadow: 1px 1px 0 rgba(#000, 0.5);
    font-size: 70px;
    line-height: 1.2;
    margin-bottom: 50px;
    font-family: serif;
    font-family: 'Yellowtail', cursive;
    @include media(sm){
      font-size: 30px;
      margin-bottom: 20px;
    }
    strong{
      font-weight: 500;
      color: #616C48;
    }
  }
  &--ja{
    font-size: 32px;
    text-shadow: 1px 1px 0 rgba(#000, 0.5);
    line-height: 1.2;
    margin-bottom: 0;
    font-weight: 700;
    @include media(sm){
      font-size: 20px;
    }
  }
}

// bg

.bg{
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(pc){
    padding-top: 100px;
    padding-bottom: 150px;
  }
}

.bg-primary{
  background-color: #F2EFE5;
}

.bg-secondary{
  background-color: #F8F7F2;
  @include media(sm){
    padding-top: 50px;
    padding-bottom: 10px;
  }
}

// section

.section{
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-header{
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid $color-primary;
  border-bottom: 2px solid $color-primary;
  padding-top: 35px;
  padding-bottom: 35px;
  margin-bottom: 100px;
  margin-top: 20px;
  color: $color-primary;
  @include media(sm){
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 50px;
  }
  .title{
    margin-bottom: 0;
    line-height: 1;
    display: block;
  }
}

.section-title{
  &--ja{
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 15px;
    @include media(sm){
      font-size: 22px;
    }
  }
  &--en{
    font-size: 16px;
    margin-top: 15px;
    @include media(sm){
      font-size: 12px;
      margin-top: 10px;
    }
  }
}

// reason

.reason-block{
  display: flex;
  @include media(sm){
    flex-direction: column;
    margin-bottom: 40px;
  }
  &:nth-child(even){
    @include media(md-lg){
      flex-direction: row-reverse;
    }
  }
}

.reason-photo{
  @include media(md-lg){
    width: 100%;
  }
  @include media(sm){
    margin-left: -15px;
    margin-right: -15px;
  }
  img{
    display: block;
    width: 100%;
    @include media(sm){
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
  }
}

.reason-content{
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
  @include media(sm){
    padding: 20px 0;
    width: auto;
  }
}

.lead-reason{
  font-size: 35px;
  color: $color-primary;
  margin-bottom: 0;
  font-weight: 700;
  @include media(sm){
    font-size: 20px;
  }
  .marker{
    background:linear-gradient(transparent 65%, #FCE300 65%);
  }
}

// cta

.cta{
  margin-bottom: 150px;
  @include media(sm){
    margin-bottom: 80px;
  }
}

.cta-panel{
  border: 4px solid $color-primary;
  padding: 70px 60px;
  padding-top: 50px;
  @include media(sm){
    padding: 10px;
    border-width: 2px;
  }
}

.cta-title{
  text-align: center;
  margin-bottom: 30px;
  color: $color-primary;
  font-weight: 700;
  font-size: 30px;
  @include media(sm){
    font-size: 20px;
    margin-bottom: 10px;
  }
}

.cta-list{
  display: flex;
  justify-content: center;
  @include media(sm){
    flex-direction: column;
    align-items: center;
  }
  li{
    margin-left: 10px;
    margin-right: 10px;
    @include media(sm){
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .button{
    width: 320px;
    height: 85px;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid $color-primary;
    border-radius: 100px;
    @include media(sm){
      width: 100%;
      font-size: 16px;
      height: 60px;
      width: 260px;
    }
    &:hover{
      opacity: 0.8;
    }
  }

  .icon-phone{
    display: inline-block;
    margin-right: 10px;
    width: 28px;
    @include media(sm){
      width: 20px;
    }
  }

  .button-primary{
    background-color: $color-primary;
    color: #FFF;
    font-size: 28px;
    @include media(sm){
      font-size: 22px;
    }
  }

  .button-seconary{
    color: $color-primary;
  }
}

</style>

<script>

import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
import CompleteCarItems from '~/components/CompleteCarItems.vue'

export default {
  components: {
    TheBreadcrumb,
    CompleteCarItems
  },
  head () {
    return {
      title: 'コンプリートカー - 株式会社オートルビーズ'
    }
  },
  data: function() {
    return {
      title: 'コンプリートカー',
      title_en: 'Complete car',
      breadcrumbs: [
        {
          title: 'コンプリートカー',
          link:  ''
        }
      ]
    }
  }
}
</script>