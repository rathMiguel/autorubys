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
</template>

<style lang="scss" scoped>

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