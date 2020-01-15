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
            .subsection-photo: img(src="http://placehold.jp/500x200.png")
            .subsection-content
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
          .subsection-main
            .product-gallery
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
          .subsection-footer
            nuxt-link(to="/suzuspo/").c-button.c-button_primary2 詳しくはこちら
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary スズスポグリル
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="http://placehold.jp/500x200.png")
            .subsection-content
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
          .subsection-main
            .product-gallery
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
              .product-gallery_block: img(src="http://placehold.jp/400x300.png")
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
    @include media(sm){
      margin-left: 5px;
      margin-right: 5px;
    }
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