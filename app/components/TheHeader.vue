<template lang="pug">
header#header
  .header-top
    .container
      .header-top_wrap
        .header-top_catch
          p 車のことならオートルビーズにお任せください
        .header-top_tel
          span TEL：
          a(href="tel:0857720727").tel 0857-72-0727
  .header-spnav
    a(href="tel:0857720727").tel-sp: img(src="/images/icons/467_s_h.svg" alt="株式会社　オートルビーズ" width=32)
    #menu_btn.menu_btn(v-on:click="navToggle()" v-bind:class="(isActive === true) ? 'is-active' : ''")
      span
      span
      span
  .header-main
    .container
      .header-main_wrap
        .header-main_logo
          nuxt-link(to="/"): img(src="/images/common/logo.svg" alt="株式会社　オートルビーズ" width=300)
        .header-main_nav(v-bind:class="(isActive === true) ? 'is-active' : ''")
          ul.header-main_list
            li: nuxt-link(to='/service/') サービス案内
            li: nuxt-link(to='/products/') 製品カタログ
            li: nuxt-link(to='/access/') 交通アクセス
            li: nuxt-link(to='/company/') 会社概要
            li: nuxt-link(to='/contact/') お問い合わせ
</template>

<script>
export default {
  data(){
    return {
      isActive: false
    }
  },
  methods: {
    navToggle: function() {
      this.isActive = !this.isActive
    }
  },
  watch: {
    '$route' () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/components/header";
</style>
