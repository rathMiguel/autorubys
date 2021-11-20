<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section.page-section
      .container.container-single
        .main-header
        .main-content
          h1.c-title.c-title_secondary.title 送信完了
          p お問い合わせの送信が完了しました。回答までお待ちいただきますよう、お願いいたします。
          p: nuxt-link(to="/") トップへ戻る
</template>

<style lang="scss" scoped>

</style>

<script>

export default {
  head () {
    return {
      title: '送信完了 - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: '送信完了',
      title_en: 'Contact',
      breadcrumbs: [
        {
          title: 'お問い合わせ',
          link:  '/contact/'
        },
        {
          title: '送信完了',
          link:  ''
        }
      ]
    }
  }
}
</script>