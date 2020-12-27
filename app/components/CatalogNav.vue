<template lang="pug">
div.sidebar-bg
  .sidebar-header
    h3.title 製品カテゴリ
  .sidebar-block
    //- pre {{categories}}
    ul.sidebar-list
      li(v-for="category in categories"): nuxt-link(v-scroll-to="`#${category.slug}`" to) {{category.name}}
</template>

<style lang="scss" scoped>

.sidebar-bg{
  background-color: #EFEFEF;
}

.sidebar-header{
  color: #FFF;
  padding: 18px 10px;
  background-color: darken($color-secondary, 3);
  text-align: center;
  border-bottom: 1px solid #FFF;
}

.title{
  font-weight: 500;
  font-size: 1.1em;
}

.sidebar-list{
  li{
    border-bottom: 1px dashed $color-secondary;
    a{
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 10px 15px;
      position: relative;
      transition: all ease 0.3s 0s;
      background-color: #EFEFEF;
      &:before{
        content: "";
        border: 6px solid $color-secondary;
        position: absolute;
        left: 10px;
        top: 50%;
        margin-top: -6px;
        border-right-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
        opacity: 0;
        transition: all ease 0.2s 0.2s;
      }

      &:hover{
        padding-left: 25px;
        background-color: darken(#EFEFEF, 5);
        &:before{
          opacity: 1;
        }
      }
    }
  }
}

</style>

<script>

export default {
  data: function() {
    return {
      categories: null
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/catalog_category`)
    .then((res) => {
      return this.categories = res.data
    }).catch((e => {
      error({ message: e.message })
    }))
  }
}
</script>