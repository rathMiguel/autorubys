<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section.section-page
      .container
        .image-main: img(src="http://placehold.jp/16/b3b3b3/000000/1000x300.png?text=%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%0A" alt="")
        h3.c-title 納車されたその日からあなただけの特別なクルマに。<br>オートルビーズから、新しい車の買い方の提案です。
        h2.c-title_info コンプリートカーとは
        p 市販車を基盤に、内装や外装をカスタマイズした状態でお客様へお渡しする車をコンプリートカーと言います。
        p オートルビーズでは登録前の新車をベースに、弊社またはお客様がチョイスしたパーツを予め装着して、納車いたします。
    section.section.section-page
      .container
        h2.c-title_info カスタマイズ例
        .car-main
          .car-content
            .car-photo: img(src="http://placehold.jp/40/b3b3b3/000000/1000x500.png?text=%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%82%AB%E3%83%BC%E3%80%80%E3%83%A1%E3%82%A4%E3%83%B3%E5%86%99%E7%9C%9F%0A%0A" alt="")
            h3.car-title auto ruby's COMPLETE MODEL
            .car-price
              .car-price__header
                h3.car-price__title コンプリート車両本体価格
              .car-price__content
                dl.car-price__list
                  dt JB74
                  dd ￥2,640,990～
                    small （税込）
                dl.car-price__list
                  dt JB64
                  dd ￥2,308,130～
                    small （税込）
            .car-gallery
              CarGallery
            .car-partslist
              - let i = 1;
              while i <= 10
                dl.car-partslist__list
                  dt スズスポグリル　2トーン　筆記体エンブレム付き
                  dd ￥64,680
                - i++
    section.section.section-page
      .container
        h3.c-title.c-title_secondary 1. ベース車両、及びカスタム内容の決定
        p まずはメールまたはお電話で、お気軽にお問い合わせください。
        h3.c-title.c-title_secondary 2. 売買契約の締結
        p コンプリートカーの仕様と、お見積もり条件など、すべてご納得頂ければ正式契約となります。遠方のお客様は、メールや郵送にて対応させて頂いております。<br>マイカーローンのお取扱いももちろん用意しています。
        h3.c-title.c-title_secondary 3. ベース車両の仕入れ
        p お客様のオーダーに合わせて、ベース車両をご用意いたします。
        h3.c-title.c-title_secondary 4. 各種登録業務
        p 必要書類をご用意して下さい。難しい書類はございません。基本的には、印鑑証明書をご用意頂く程度です。<br>難しい登録業務に関しましては、こちらで対応させて頂きますのでご安心下さい。
        h3.c-title.c-title_secondary 5. 車両のカスタム制作
        p お車が到着いたしましたら、カスタム製作に入らせて頂きます。新車の場合はメーカー・ディーラーオプション以外は装着されていない、フルノーマル状態で到着いたします。<br>塗装からアライメントなどの工程を、すべて自社工場・スタッフにて仕上げていきます。
        h3.c-title.c-title_secondary 6. 各種チェック・納車準備
        p 内外装クリーニング・不具合箇所のチェックを行い、お車が完成となります。
        h3.c-title.c-title_secondary 7. 納車
        p お車の基本的な操作方法やナビゲーションなどのオーディオ類、カスタムパーツにいたるまで、詳細なご説明をさせて頂きます。
    section.section.section-page
      .container
        .cta
          h2.c-title.title まずはお気軽にお問い合わせください
          a(href="").button.c-button.c-button_primary2 お電話でお問い合わせ
          nuxt-link(to="/contact/").button.c-button.c-button_primary2 お問い合わせフォームへ
</template>

<style lang="scss" scoped>
.image-main{
  margin-bottom: 3em;
}

// 
// car
// 

.car-title{
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #CCC;
  padding-bottom: 5px;
}

.car-price{
  display: flex;
  justify-content: flex-end;
  font-size: 0.9em;

  &__header{
    margin-right: 1em;
  }

  &__list{
    display: table;
    margin-bottom: 0.2em;
    dt{
      display: table-cell;
    }
    dd{
      display: table-cell;
    }
  }

  small{
    font-size: 0.86em;
  }
}

.car-partslist{
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  font-size: 0.9em;
  
  &__list{
    box-sizing: border-box;
    border-bottom: 1px solid #CCC;
    padding: 0.5em 0.75em;
    margin-left: 10px;
    margin-right: 10px;
    width: calc(50% - 20px);
    margin-bottom: 0.25em;
    padding-bottom: 0.25em;
    display: flex;
    dd{
      margin-left: auto;
      padding-left: 1em;
    }
  }
}

.cta{
  text-align: center;

  .title{
    font-size: 1.6em;
  }

  .button{
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1em;
  }
}

</style>

<script>

import ThePagetitle from '~/components/ThePagetitle.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
import CarGallery from '~/components/CarGallery.vue'

export default {
  components: {
    ThePagetitle,
    TheBreadcrumb,
    CarGallery
  },
  head () {
    return {
      title: 'コンプリートカー - 株式会社オートルビーズ（鳥取県 岩美町）'
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