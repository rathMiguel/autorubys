<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section
      .container
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 自動車販売
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="http://placehold.jp/500x400.png")
            .subsection-content
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 自動車整備・メンテナンス
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="http://placehold.jp/500x400.png")
            .subsection-content
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 自動車保険の取り扱い
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="http://placehold.jp/500x400.png")
            .subsection-content
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
              p 説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります
</template>

<style lang="scss" scoped>

.subsection{
  overflow: hidden;
}

.subsection-photo{
  @include media(md-lg){
    float: left;
    margin-left: 0;
    margin-right: 20px;
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
      title: 'サービス案内 - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: 'サービス案内',
      title_en: 'Service',
      breadcrumbs: [
        {
          title: 'サービス案内',
          link:  ''
        }
      ]
    }
  }
}
</script>