<template lang="pug">
.contact#form
  ValidationObserver(ref="obs" v-slot="ObserverProps")
    .form-contain
      //- |{{ $data }}
      dl.dl-form(v-if="formData.product")
        dt 対象の製品
        dd
          input(type="text" name="対象の製品" v-model="formData.product" disabled).input-medium
      validation-provider(name="名前" v-slot="{ errors }" rules="required")
        dl.dl-form
          dt お名前
            span.label-required 必須
          dd
            input(type="text" name="お名前" placeholder="例）山田　太郎" v-model="formData.name").input-medium
            .panel__error {{ errors[0] }}
      validation-provider(name="メールアドレス" v-slot="{ errors }" rules="required|email")
        dl.dl-form
          dt メールアドレス
            span.label-required 必須
          dd
            input(type="email" name="email" placeholder="例）info@autorubys.com" v-model="formData.email").input-medium
            .panel__error {{ errors[0] }}
      validation-provider(name="電話番号" v-slot="{ errors }" rules="required")
        dl.dl-form
          dt 電話番号
            span.label-required 必須
          dd
            input(type="tel" name="電話番号" placeholder="例）0857-72-0727" v-model="formData.tel").input-medium
            .panel__error {{ errors[0] }}
      validation-provider(name="お問い合わせ内容" v-slot="{ errors }" rules="required")
        dl.dl-form
          dt お問い合わせ内容
            span.label-required 必須
          dd
            textarea(name="お問い合わせ内容" v-model="formData.content").input-full
            .panel__error {{ errors[0] }}
      .form-footer
        button(type="button" v-on:click="submit" :disabled="ObserverProps.invalid || !ObserverProps.validated").c-button.button-submit 送信する
</template>

<script>
export default {
  data(){
    return {
      formData: {
        tel: "",
        name: "",
        email: "",
        content: "",
        product: ""
      }
    }
  },
  mounted() {
    return this.formData.product = this.$route.query.item
  },
  methods: {
    submit(){

      const formData  = this.convertJsontoUrlencoded(this.formData)
      const USER      = process.env.WPUSER
      const PASSWORD  = process.env.APPLICATION_PASSWORD
      const POSTURL   = `${process.env.WP_REST_API_BASE_URL}wp-json/contact-form-7/v1/contact-forms/47/feedback/`
      const THNAKSURL = `/contact/thanks/`

      // Base64に変換
      const TOKEN = window.btoa(`${USER}:${PASSWORD}`)
      const axiosConfig = {
        headers: {
          'Authorization': `Basic ${TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }

    this.submitBlind = true
    this.$axios
      .post(POSTURL, formData, axiosConfig)
      .then(response => {
        console.log(response)
        this.responseData = response.data
        this.submitBlind = true
        this.$router.push(THNAKSURL)
      })
      .catch(error => {
        console.log(error)
        this.submitBlind = false
      })
    },

    convertJsontoUrlencoded(obj) {
      let str = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        }
      }
      return str.join("&");
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
  @include media(sm){
    width: 100%;
  }
  @include media(md-lg){
    width: 400px;
  }

  &:disabled{
    background-color: #CCC;
    &:hover{
      opacity: 1;
    }
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

  &:empty{
    display: none;
  }
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
input[type="number"],
select,
textarea{
  border-color: #AAA;
}

input[type="text"]:disabled{
  background-color: #EEE;
}

</style>
