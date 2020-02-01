<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section.page-section
      .container.container-single
        .section-header
          h2.c-title_info お電話からのお問い合わせ
        .text-center
          a(href="tel:0857720727").c-button.button-tel.tel
            span.tel-title tel.
            span.tel-text 0857-72-0727
          p
            small 受付時間は
              nuxt-link(to="/access/#worktime") 営業時間
              |をご参照ください<br>
    section.section.page-section.bg-secondary
      .container.container-single
        .section-header
          h2.c-title_info メールフォームでのお問い合わせ
        ul.list-dotted.fz-normal
          li いただいたご意見など、すべてにお返事できない場合や、お時間をいただく場合がございます。お急ぎの場合には、お電話にてお問い合わせください。
          li お問い合わせの内容によっては、お電話で回答させていただくこともございます。
          li 当社からの回答は、お問い合わせいただいた内容にお答えすることを目的としておりますので、回答の内容の一部または全部を転載、二次利用することはご遠慮ください。
          li このページから送信される個人情報は、お問い合わせの回答以外には一切利用いたしません。
        ContactForm
</template>

<style lang="scss" scoped>

$color-primary: #D70247;

small{
  font-size: 0.85em;
}

.button-tel{
  font-weight: 700;
  border: 2px solid $color-primary;
  color: $color-primary;
  background-color: lighten($color-primary, 54);
  height: 80px;
  padding-left: 25px;
  padding-right: 25px;
  @include media(sm){
    height: 60px;
  }
  @include media(md-lg){
    width: 450px;
  }
  .tel-title{
    font-size: 1.2em;
  }
  .tel-text{
    font-size: 2em;
    @include media(sm){
      font-size: 1.5em;
    }
  }
}
</style>

<script>

import ThePagetitle from '~/components/ThePagetitle.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ThePagetitle,
    TheBreadcrumb,
    ContactForm
  },
  head () {
    return {
      title: 'お問い合わせ - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: 'お問い合わせ',
      title_en: 'Contact',
      breadcrumbs: [
        {
          title: 'お問い合わせ',
          link:  ''
        }
      ]
    }
  }
}
</script>