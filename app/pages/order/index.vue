<template lang="pug">
  div
    TheBreadcrumb(v-bind:list="breadcrumbs")
    ThePagetitle(:title="title", :title_en="title_en")
    .container
      .text-center
        p 製品の発注について、ご案内します。
      section.section
        header.section-header
          h2.c-title よくある質問
        .content
          .text-center
            p 製品の発注、見積もりについてよくお問い合わせいただく質問を掲載しています。
          .faq
            dl
              dt Q1. こちらには質問の内容が入ります。
              dd A. こちらには回答が入ります。想定される質問と回答がありましたらこちらに掲載いたします。
            dl
              dt Q2. こちらには質問の内容が入ります。
              dd A. こちらには回答が入ります。想定される質問と回答がありましたらこちらに掲載いたします。
            dl
              dt Q3. こちらには質問の内容が入ります。
              dd A. こちらには回答が入ります。想定される質問と回答がありましたらこちらに掲載いたします。
      section.section
        header.section-header
          h2.c-title FAXでのご注文
        .content.text-center
          p 下記より発注　見積依頼書をダウンロードいただき、必要事項を記入の上、FAXにて送信お願いいたします。
          p FAX番号：0857-72-0747
          a(href="").c-button.c-button_primary 発注　見積依頼書のダウンロード
      section.section
        header.section-header
          h2.c-title フォームからのご注文
        .content
          dl.form-dl
            dt 御社名
            dd: input(type="text" placeholder="例）株式会社オートルビーズ")
          dl.form-dl
            dt お名前（ご担当者名）
            dd: input(type="text" placeholder="例）山田　太郎")
          dl.form-dl
            dt 住所
            dd: input(type="text" placeholder="例）〒681-0073 鳥取県岩美郡岩美町大字大谷1485-1")
          dl.form-dl
            dt 電話番号
            dd: input(type="text" placeholder="例）0857-72-0747")
          dl.form-dl
            dt FAX番号
            dd: input(type="text" placeholder="例）0857-72-0747")
          dl.form-dl
            dt 車種
            dd: input(type="text" placeholder="例）スズキ　ジムニー")
          dl.form-dl
            dt 片式/グレード
            dd: input(type="text" placeholder="例）XG")
          dl.form-dl
            dt 初年度年月
            dd: input(type="text" placeholder="例）平成28年度")
          h3.c-title 発注内容
          table.form-table.form-table--order
            thead
              tr
                th 品名/品番
                th 数量
            tbody
              tr(v-for="n of orderRow")
                td: input(type="text" placeholder="例）スズスポグリル")
                td: input(type="number" min="1" placeholder="例）1")
          dl.form-dl
            dt 備考・質問事項など
            dd: textarea
          .form-footer.text-center
            button.c-button.c-button_primary 送信する
</template>

<style lang="scss" scoped>

.container{
  margin-top: 4em;
}

.form-dl{
  display: table;
  width: 100%;
  dt{
    display: table-cell;
    vertical-align: top;
    padding: 10px;
    padding-top: 20px;
    width: 10em;
  }
  dd{
    display: table-cell;
    padding: 10px;
  }
}

input[type="text"],
textarea{
  width: 100%;
}

input[type="number"]{
  width: 100%;
}

.form-footer{
  margin-top: 2em;
}

.form-table{
  width: 100%;
  border: 1px solid #DDD;
  margin-top: 1em;
  margin-bottom: 2em;
  tr{

  }

  th{
    background-color: #EEE;
    &:first-child{
      text-align: left;
    }
  }

  th, td{
    padding: 10px;
    border: 1px solid #DDD;

    &:nth-child(2){
      width: 6em;
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
  layout: 'lp',
  head () {
    return {
      title: '発注、見積依頼',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ],
    }
  },
  data: function() {
    return {
      title: '発注、見積依頼',
      title_en: 'Order',
      orderRow: 9,
      breadcrumbs: [
        {
          title: '発注、見積依頼',
          link:  ''
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

</style>