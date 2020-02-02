<template lang="pug">
.breadcrumb
  .container
    ul.breadcrumb_list
      li: nuxt-link(to="/") ホーム
      template(v-for="item in list")
        li(v-if="item.link"): nuxt-link(:to="item.link") {{ item.title }}
        li(v-else): span {{ item.title }}
</template>

<script>
export default {
  props: {
    'list' : Array,
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/components/breadcrumb";
</style>
