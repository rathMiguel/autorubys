<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section
      .container
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary スズスポグリル
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/products/suzuspo_photo1.jpg")
            .subsection-content
              p 黒単色ならスポーティに、塗り分ければレトロ風味の愛らしさに。ジムニーがスズスポグリル一つで個性的なスタイルに生まれ変わります。
          .subsection-main
            .product-gallery
              .product-gallery_block: img(src="~/assets/images/products/suzuspo_photo3.jpg")
              .product-gallery_block: img(src="~/assets/images/products/suzuspo_photo4.jpg")
              .product-gallery_block: img(src="~/assets/images/products/suzuspo_photo2.jpg")
          .subsection-footer
            nuxt-link(to="/suzuspo/").c-button.c-button_primary2 詳しくはこちら
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary クラシック22スタイルグリル
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/products/classic_photo1.jpg")
            .subsection-content
              p 二代目ジムニー（JA22）風のフロントグリル。<br>古き良きジムニーのスタイルを新しいジムニーに引き継いだ、オートルビーズからの新しい提案です。
          .subsection-main
            .product-gallery
              .product-gallery_block: img(src="~/assets/images/products/classic_photo3.jpg")
              .product-gallery_block: img(src="~/assets/images/products/classic_photo4.jpg")
              .product-gallery_block: img(src="~/assets/images/products/classic_photo2.jpg")
    hr.line
    .section
      .container
        .products-outro
          p オートルビーズが開発した製品は<br>こちらから購入できます
          ul.form-outro__list
            li: a(href="https://store.shopping.yahoo.co.jp/auto-rubys/" target="_blank"): img(src="~/assets/images/suzuspo/yshopping_logo.png").logo-y
</template>

<style lang="scss" scoped>

.subsection{
  &:last-child{
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.product-gallery{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  @include media(sm){
    margin-left: -5px;
    margin-right: -5px;
  }
  &_block{
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    @include media(sm){
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}

.subsection-photo{
  max-width: 500px;
  @include media(md-lg){
    margin-bottom: 20px;
  }
}

.subsection-main{
  overflow: hidden;
}

.products-outro{
  text-align: center;
  @include media(md-lg){
    margin-top: -80px;
  }
}

.logo-y{
  width: 240px;
  @include media(sm){
    width: 240px;
  }
}

.line{
  border: none;
  border-bottom: 1px solid #DDD;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  height: 3px;
  @include media(sm){
    margin-bottom: 20px;
    margin-top: 20px;
  }
}

</style>

<script>

import ThePagetitle from '~/components/ThePagetitle.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'

export default {
  components: {
    ThePagetitle,
    TheBreadcrumb
  },
  head () {
    return {
      title: '製品情報 - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: '製品情報',
      title_en: 'Products',
      breadcrumbs: [
        {
          title: '製品情報',
          link:  ''
        }
      ]
    }
  }
}
</script>