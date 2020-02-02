<template lang="pug">
.pagetitle
  .pagetitle_wrap
    h1.title {{ title }}
    span.title-en {{ title_en }}
</template>

<script>
export default {
  props: ['title', 'title_en']
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/components/pagetitle";
</style>
