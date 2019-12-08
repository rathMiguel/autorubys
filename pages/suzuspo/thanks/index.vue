<template lang="pug">
  div
    header#header
      span.logo: img(src="~/assets/images/common/logo_white.svg")
      h1.title.header-title スズスポグリル
    main(role="main")
      .container
        .main-header
          h1.title 送信完了
        .main-content
          p お問い合わせの送信が完了しました。回答までお待ちいただきますよう、お願いいたします。
          p: nuxt-link(to="/suzuspo") トップへ戻る
    footer#footer
      p: small Copyright © Auto Ruby's All Rights Reserved.
</template>

<script>

export default {
  head () {
    return {
      title: '送信完了 - スズスポグリル'
    }
  }
}
</script>

<style lang="scss" scoped>

#header{
  text-align: center;
  background-color: #122A88;
  color: #FFF;
  padding-top: 15px;
  padding-bottom: 15px;
  .logo{
    margin-top: 10px;
  }

  .header-title{
    margin-top: 5px;
  }
}

.main-header{
  margin-top: 2em;
}

.container{
  @include media(md-lg){
    min-height: 500px;
  }
}

.title{
  background-color: $color-primary;
  color: #FFF;
  font-size: 22px;
  padding: 5px 12px;
  margin-bottom: 20px;
  @include media(sm){
    margin-bottom: 15px;
  }
}

//
// footer
//

#footer{
  color: #FFF;
  background-color: #122A88;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  small{
    font-size: 13px;
  }
}

</style>
