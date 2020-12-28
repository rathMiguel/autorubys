<template lang="pug">
div
  hr.line
  .products-outro
    p オートルビーズが開発した製品は<br>こちらから購入できます
    ul.form-outro__list
      li: a(href="https://store.shopping.yahoo.co.jp/auto-rubys/" target="_blank"): img(src="~/assets/images/suzuspo/yshopping_logo.png").logo-y
</template>

<style lang="scss" scoped>
.products-outro{
  text-align: center;
}

.logo-y{
  width: 240px;
  @include media(sm){
    width: 240px;
  }
}

.line{
  border: none;
  border-bottom: 1px solid #DDD;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  height: 3px;
  @include media(sm){
    margin-bottom: 20px;
    margin-top: 20px;
  }
}
</style>