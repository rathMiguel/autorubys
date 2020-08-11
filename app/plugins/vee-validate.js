import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email } from 'vee-validate/dist/rules'

// VeeValidateが用意している各ルールを使用するよう指定
extend('required', required)
extend('email', email)

// バリデート、ローカライズの有効化
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('ja', ja)