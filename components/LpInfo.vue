<template lang="pug">
.info
  .container
    .flex.info-flex
      .info__photo: img(src="~/assets/images/suzuspo/item.jpg")
      .info__content
        .info__header
          h2.title.info-title スズスポグリル
        dl.dl-info
          dt 対応車種：
          dt
            ul
              li スズキ ジムニー / ジムニー・シエラ
              li 年式：2018年7月～
              li 型式：JB64W / JB74W
        span.price 33,800
          span.price-unit 円（税別）
        .info__footer
          nuxt-link(v-scroll-to="'#form'" to).c-button.button-info お問い合わせ・ご注文
</template>

<style lang="scss" scoped>

.info{
  background-color: #7DA1CE;
  color: #FFF;
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.info__photo{
  @include media(md-lg){
    width: 500px;
    margin-right: 20px;
    img{
      max-width: none;
      width: 500px;
    }
  }
}

.info__header{
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 20px;
  &:before{
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 2em;
    background-color: darken(#7DA1CE, 20);
    position: absolute;
    bottom: 0;
  }
}

.info__content{

}

.info__footer{
  margin-top: 1em;
}

.info-flex{
  @include media(md-lg){
    align-items: center;
  }
}

.info-title{
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 5px;
  @include media(sm){
    font-size: 24px;
  }
}

.price{
  font-size: 40px;
  &-unit{
    font-size: 0.5em;
  }
}

.dl-info{
  ul{
    li{
      margin-right: 1em;
    }
  }
}

.button-info{
  height: 50px;
  background-color: #122A88;
  min-width: 300px;
  @include media(md-lg){
    min-width: 400px;
  }
}
</style>
