<template lang="pug">
.contact#form
  .container
    form(method="post" action="")
      .form-header
        h2.title.title-bar__contact お問い合わせ・ご注文はこちらから
      .form-contain
        dl.dl-form
          dt お問い合わせ種類
          dd
            select(name="").input-medium
              option(value="") 選択してください
              option(value="商品について") 商品について
              option(value="購入について") 購入について
              option(value="カスタマイズのご依頼") カスタマイズのご依頼
              option(value="取付のご依頼") 取付のご依頼
        dl.dl-form
          dt お名前
          dd
            input(type="text" name="お名前" placeholder="例）山田　太郎").input-medium
        dl.dl-form
          dt メールアドレス
          dd
            input(type="email" name="email" placeholder="例）info@autorubys.com").input-medium
        dl.dl-form
          dt お問い合わせ内容・備考
          dd
            textarea(name="お問い合わせ内容・備考").input-full
        .form-footer
          button(type="submit").c-button.button-submit 送信する
  .container
    .form-outro
      p こちらからも購入できます
      ul.form-outro__list
        li: a(href="" target="_blank"): img(src="~/assets/images/suzuspo/yshopping_logo.png").logo-y
</template>

<style lang="scss" scoped>

.container{
  max-width: 800px;
}

.contact{
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(sm){
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.title-bar__contact{
  background-color: #122A88;
  color: #FFF;
  text-align: center;
  padding: 5px 10px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  @include media(sm){
    font-size: 22px;
  }
  @include media(md-lg){
    margin-bottom: 40px;
  }
}

.button-submit{
  background-color: #FF8000;
  width: 400px;
  height: 60px;
  font-size: 20px;
}

.dl-form{
  margin-bottom: 1.5em;
  dt{
    margin-bottom: 5px;
  }
  dd{}
}

.form-footer{
  padding-top: 1em;
  text-align: center;
}

.form-outro{
  text-align: center;
  margin-bottom: 40px;
  @include media(pc){
    margin-top: 60px;
  }

  p{
    margin-bottom: 15px;
  }
}

.logo-y{
  width: 240px;
  @include media(sm){
    width: 240px;
  }
}

</style>
