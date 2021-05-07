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
            td 〒681-0073 鳥取県岩美郡岩美町大字大谷1485-1
          tr
            th 電話番号
            td: a(href="tel:0857720727").tel 0857-72-0727
          tr
            th 事業内容
            td 自動車販売、車検、修理、鈑金塗装、自動車用品の販売等
          tr
            th 資本金
            td 300万円
          tr
            th 創　業
            td 2006年11月
          tr
            th 設　立
            td 平成31年3月　株式会社　オートルビーズに法人化として名を改めました。
          tr
            th 許　可
            td 鳥取県公安委員会許可　701020007468
          tr
            th 加盟店
            td 全国各社オートオークション、国内各社クレジット会社、東京海上日動火災保険、三井住友海上火災保険<br>スズキ自動車、国内各社自動車ディーラー
    section.section.section-page.bg-secondary
      .container.container-single
        .section-header
          h2.c-title_info 沿革
        table.table-info
          tr
            th 2006年11月
            td 鳥取県岩美郡岩美町浦富にて創業
          tr
            th 2011年10月
            td 鳥取県岩美郡岩美町大谷に移転
          tr
            th 2019年2月
            td スズキジムニーのカスタムパーツを製作し、販売開始
          tr
            th 2019年3月
            td 株式会社 オートルビーズとして設立
          tr
            th 2019年10月
            td 中国運輸支局認証工場に認証される
          tr
            th 2020年2月
            td ＷＩＬＤ　ＲＵＢＹ’Ｓ　ブランドで大阪オートメッセ2020に出展
          tr
            th 2021年1月
            td 東京オートサロン2021に出展
</template>

<style lang="scss" scoped>

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