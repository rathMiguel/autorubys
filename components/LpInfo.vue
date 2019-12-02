<template lang="pug">
.info
  .container
    .flex.info-flex
      .info__photo: img(src="http://placehold.jp/600x400.png")
      .info__content
        .info__header
          h2.title.info-title スズスポグリル
        dl.dl-info
          dt 対応車種：
          dt
            ul
              li スズキ ジムニー（●●年）
              li スズキ ジムニー（●●年）
              li スズキ ジムニー（●●年）
              li スズキ ジムニー（●●年）
        span.price 33,800
          span.price-unit 円（税別）
        .info__footer
          a(href="#form").c-button.button-info お問い合わせ・ご注文
</template>

<style lang="scss" scoped>

.info{
  background-color: #7DA1CE;
  color: #FFF;
  padding-top: 80px;
  padding-bottom: 80px;
}

.info__photo{
  width: 500px;
  @include media(md-lg){
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
      display: inline-block;
      margin-right: 1em;
    }
  }
}

.button-info{
  height: 50px;
  background-color: #122A88;
  min-width: 400px;
}
</style>
