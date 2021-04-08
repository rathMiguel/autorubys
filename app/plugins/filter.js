import Vue from 'vue'

Vue.filter('addComma', function (value) {
  let rouded = Math.round(value)
  return rouded.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
})