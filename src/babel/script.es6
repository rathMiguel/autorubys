// JavaScript Document

var header = new Vue({
  el: '#header',
  data: {
    isActive: false
  },
  methods: {
    navToggle: function() {
      this.isActive = !this.isActive
    }
  }
})