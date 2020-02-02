<template lang="pug">
  footer#footer
    .information
      .container
        .information_wrap
          .information-header
            h2.c-title.information-title Follow Us：
          .block-social
            ul.block-social_list
              li: a(href="https://www.instagram.com/autorubys696/" target="_blank"): img(src="/images/icons/38-instagram.svg" alt="Instagram" width=24)
              li: a(href="https://www.youtube.com/channel/UCJVVwZUZLVwaC0s9baUX0WA" target="_blank"): img(src="/images/icons/18-youtube.svg" alt="YouTube" width=24)
    .footer-main
      .container
        .footer-main_wrap
          .footer-address
            .footer-logo: nuxt-link(to="/"): img(src="/images/common/logo_white.svg" alt="株式会社　オートルビーズ" width=270)
            h3.c-title: small 株式会社オートルビーズ
            address
              span.address-text 〒681-0073 鳥取県岩美郡岩美町大字大谷1-1485
          .footer-nav
            .container
              ul.footer-nav_list
                li: nuxt-link(to='/service/') サービス案内
                li: nuxt-link(to='/products/') 製品情報
                li: nuxt-link(to='/access/') 交通アクセス
                li: nuxt-link(to='/company/') 会社概要
                li: nuxt-link(to='/contact/') お問い合わせ
    .copyright
      p: small Copyright © auto ruby's All Rights Reserved.
</template>

<style lang="scss" scoped>
  @import "~assets/scss/components/footer";
</style>
