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
          p.hero-lead.hero-lead--ja 自分だけのジムニー作り
    section.section
      header.section-header
        h2.title.section-title--ja ラインアップ
        span.title.section-title--en Model Lineup
      .bg.bg-primary
        .container
          CompleteCarItems
    section.section
      header.section-header
        h2.title.section-title--ja コンプリートカーを選ぶ3つの理由
        span.title.section-title--en Reason
      .bg.bg-secondary
        .container
          .reason-wrap
            .reason-block-wrap
              .reason-block
                .reason-photo: img(src="~/assets/images/completecar/complete_photo1.jpg" alt="")
                .reason-content
                  h3.lead.lead-reason 納車されたその日から特別な一台に
                  p コンプリートカーとは、新車、中古車を、特別にカスタマイズされた形で販売する車を言います。
                  p グリルからホイール、ライトなどの細かいパーツはもちろん、シートカバーなど、内装にこだわったあなただけの特別な一台を納車させて頂きます。
            .reason-block-wrap
              .reason-block
                .reason-photo: img(src="~/assets/images/completecar/complete_photo2.jpg" alt="")
                .reason-content
                  h3.lead.lead-reason パーツ代、工賃も全てコミコミ。<br>だから、経済的
                  p ご自身で愛車をカスタマイズする場合、パーツを一つずつ揃えることになり、かえって費用が高額になってしまうケースも...。
                  p コンプリートカーであれば、無駄なパーツを買わずに済みます。また、<strong>オートローンによるお支払い（金利年2.3％～）</strong>も可能です。
            .reason-block-wrap
              .reason-block
                .reason-photo: img(src="~/assets/images/completecar/complete_photo3.jpg" alt="")
                .reason-content
                  h3.lead.lead-reason ジムニーに特化したお店だからできる、確かな提案とアフターサービス
                  p 知識がない方でも大丈夫。ジムニーを愛する私たちが、あなたの理想のお車に近づくよう、お手伝いいたします。ご納車後のアフターサービスも安心して、お任せください。
    section.section.cta
      .container
        .cta-panel
          .cta-header
            h2.title.cta-title まずはお気軽に<br class="hide-lg">お問い合わせください
          .cta-content
            ul.cta-list
              li: a(href="").tel.c-button.button.button-primary
                i.icon.icon-phone: img(src="~/assets/images/icons/fa-phone.svg" alt="tel:0544265508")
                span.cta-telmain
                  span.cta-telnum 0544-26-5508
                  span.cta-telwt 営業時間 10:00～19:00 水・木定休
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
    font-family: 'Bebas Neue', cursive;
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
    &:before,
    &:after{
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 2em;
      border-bottom: 1px solid #FFF;
      text-shadow: 1px 1px 0 rgba(#000, 0.5);
      margin-left: 0.3em;
      margin-right: 0.3em;
      @include media(lg){
        width: 5em;
      }
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
  border-top: 4px double $color-primary;
  border-bottom: 4px double $color-primary;
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

.reason-block-wrap{
  border: 4px solid lighten($color-secondary, 10);
  margin-bottom: 50px;
  padding: 15px;
  @include media(sm){
    margin-bottom: 40px;
  }
  &:last-child{
    margin-bottom: 0;
  }
}

.reason-block{
  display: flex;
  background-color: lighten($color-secondary, 30);
  padding: 50px;
  align-items: flex-start;
  @include media(sm){
    flex-direction: column;
    padding: 15px;
  }
}

.reason-photo{
  @include media(md-lg){
    width: 100%;
  }
  @include media(sm){
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -15px;
  }

  img{
    display: block;
    width: 100%;
    aspect-ratio: 7 / 5;
    object-fit: cover;
    @include media(sm){
      aspect-ratio: 16 / 9;
    }
  }
}

.reason-content{
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 40px;
  padding-top: 10px;
  color: $color-primary;
  @include media(sm){
    padding: 20px 0;
    width: auto;
  }

  p{
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 16px;
    &:last-child{
      margin-bottom: 0;
    }
  }
}

.lead-reason{
  font-size: 25px;
  color: $color-primary;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 1.4;
  border-bottom: 2px solid $color-primary;
  padding-bottom: 10px;
  @include media(sm){
    font-size: 20px;
    margin-bottom: 15px;
  }
}

// cta

.cta{
  margin-bottom: 150px;
  @include media(lg){
    margin-top: 50px;
  }
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
    margin-right: 14px;
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

    .cta-telmain{
      text-align: left;
      line-height: 1;
      .cta-telnum{
        display: block;
        margin-bottom: -6px;
        @include media(sm){
          margin-bottom: -3px;
        }
      }
      .cta-telwt{
        font-size: 13px;
        font-weight: 400;
        @include media(sm){
          font-size: 11px;
        }
      }
    }
  }

  .button-seconary{
    color: $color-primary;
  }
}

</style>

<script>

export default {
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