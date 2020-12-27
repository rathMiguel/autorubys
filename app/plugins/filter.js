import Vue from 'vue'

Vue.filter('addComma', function (value) {
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
})