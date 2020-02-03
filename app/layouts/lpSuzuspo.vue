<template lang="pug">
div
  header#header
    span.logo: img(src="/images/common/logo_white.svg")
    h1.title.header-title スズスポグリル
  main(role="main")
    nuxt
  footer#footer
    p: small Copyright © Auto Ruby's All Rights Reserved.
</template>

<style lang="scss" scoped>
#header{
  text-align: center;
  background-color: #122A88;
  color: #FFF;
  padding-top: 15px;
  padding-bottom: 15px;
  @include media(sm){
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .logo{
    margin-top: 10px;
    @include media(sm){
      width: 250px;
    }

    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      @include media(sm){
        width: 280px;
      }
    }
  }

  .header-title{
    margin-top: 5px;
  }
}

#footer{
  color: #FFF;
  background-color: #122A88;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  small{
    font-size: 13px;
  }
  p{
    margin-bottom: 0;
  }
}
</style>
