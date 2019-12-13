<template lang="pug">
.contact#form
  .container
    form(method="post" name="lpform" action="mail.php")
      .form-header
        h2.title.title-bar__contact お問い合わせ・ご注文はこちらから
      .form-contain
        dl.dl-form
          dt お問い合わせ種類
          dd
            select(name="お問い合わせ種類" v-model="formData.type").input-medium
              option(value="") 選択してください
              option(value="商品について") 商品について
              option(value="購入について") 購入について
              option(value="カスタマイズのご依頼") カスタマイズのご依頼
              option(value="取付のご依頼") 取付のご依頼
            .panel__error(v-if="formValidate.type == false") 選択してください
        dl.dl-form
          dt お名前
          dd
            input(type="text" name="お名前" placeholder="例）山田　太郎" v-model="formData.name").input-medium
            .panel__error(v-if="formValidate.name == false") お名前を入力してください
        dl.dl-form
          dt メールアドレス
          dd
            input(type="email" name="email" placeholder="例）info@autorubys.com" v-model="formData.email").input-medium
            .panel__error(v-if="formValidate.email == false") メールアドレスを入力してください
        dl.dl-form
          dt お問い合わせ内容・備考
          dd
            textarea(name="お問い合わせ内容・備考" v-model="formData.content").input-full
            .panel__error(v-if="formValidate.content == false") お問い合わせ内容・備考を入力してください
        .form-footer
          button(type="button" v-on:click="checkForm()").c-button.button-submit 送信する
  .container
    .form-outro
      p こちらからも購入できます
      ul.form-outro__list
        li: a(href="https://store.shopping.yahoo.co.jp/auto-rubys/a5d5a5eda5.html" target="_blank"): img(src="~/assets/images/suzuspo/yshopping_logo.png").logo-y
</template>

<script>
  export default {
    data(){
      return {
        formData: {
          type: "",
          name: "",
          email: "",
          content: "",
        },
        formValidate: {
          type: true,
          name: true,
          email: true,
          content: true
        }
      }
    },
    methods: {
      checkForm: function (e) {

        if(
          // 2. 必須項目の登録
          this.formData.type  == "" ||
          this.formData.name  == "" ||
          this.formData.email  == "" ||
          this.formData.content   == ""
        ) {
          // ジャンル
          if (this.formData.type == '') {
            this.formValidate.type = false
          } else {
            this.formValidate.type = true
          }

          // ご担当者様名
          if (this.formData.name == '') {
            this.formValidate.name = false
          } else {
            this.formValidate.name = true
          }

          // お電話番号
          if (this.formData.email == '') {
            this.formValidate.email = false
          } else {
            this.formValidate.email = true
          }

          // 本文
          if (this.formData.content == '') {
            this.formValidate.content = false
          } else {
            this.formValidate.content = true
          }
        } else {
          // 4. バリデーションが通ったときの登録
          this.formValidate.type = true
          this.formValidate.name = true
          this.formValidate.email = true
          this.formValidate.content = true

          this.submit()
        }
      },
      submit(){
        document.lpform.submit()
      }
    }
  }
</script>

<style lang="scss" scoped>

.container{
  max-width: 800px;
  margin-bottom: 20px;
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
    font-size: 19px;
  }
  @include media(md-lg){
    margin-bottom: 40px;
  }
}

.button-submit{
  background-color: #FF8000;
  height: 60px;
  font-size: 20px;
  width: 300px;
  @include media(md-lg){
    width: 400px;
  }
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
  @include media(sm){
    margin-bottom: 2.5em;
  }
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

.panel__error{
  background-color: lighten(#B20000, 55);
  color: red;
  border: #B20000 1px solid;
  padding: 5px;
  margin-top: 5px;
  font-size: 16px;
  @include media(sm){
    font-size: 14px;
  }
}

</style>
