<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section.section-page
      .container.container-single
        .section-header
          h2.c-title_info 会社概要
        table.table-info
          tr
            th 会社名
            td 株式会社オートルビーズ
          tr
            th 代表取締役
            td 野澤 愼吾
          tr
            th 所在地
            td 〒681-0073 鳥取県岩美郡岩美町大字大谷1-1485
          tr
            th 電話番号
            td: a(href="tel:0857720727").tel 0857-72-0727
          tr
            th 事業内容
            td
          tr
            th 資本金
            td
          tr
            th 創　業
            td
          tr
            th 設　立
            td
          tr
            th 許　可
            td
          tr
            th 加盟店
            td
    section.section.section-page.bg-secondary
      .container.container-single
        .section-header
          h2.c-title_info 沿革
        table.table-info
          tr
            th 19〇〇年 〇月
            td 創業
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
          tr
            th 20〇〇年 〇月
            td 内容が入ります内容が入ります内容が入ります内容が入ります
</template>

<style lang="scss">

.table-info{
  th{
    @include media(md-lg){
      width: 8em;
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
      title: '会社概要 - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: '会社概要',
      title_en: 'Company',
      breadcrumbs: [
        {
          title: '会社概要',
          link:  ''
        }
      ]
    }
  }
}
</script>