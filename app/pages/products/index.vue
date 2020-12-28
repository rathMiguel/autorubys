<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main.page-main--catalog
    .section
      .container.container--catalog
        .sidebar
          .sidebar-nav
            CatalogNav
        .content
          CatalogContent
    .section
      .container
        ProductsOutro
</template>

<style lang="scss" scoped>

.container{
  &--catalog{
    max-width: 1200px;
    @include media(md-lg){
      display: flex;
    }
  }
}

.sidebar{
  margin-bottom: 2em;
  @include media(md-lg){
    width: 300px;
    margin-right: 20px;
  }
}

.sidebar-nav{
  position: sticky;
  top: 0;
}

.content{
  @include media(md-lg){
    width: calc(100% - 300px);
    margin-right: 20px;
  }
}

</style>

<script>

import ThePagetitle from '~/components/ThePagetitle.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
import ProductsOutro from '~/components/ProductsOutro.vue'
import CatalogNav from '~/components/CatalogNav.vue'
import CatalogContent from '~/components/CatalogContent.vue'

export default {
  components: {
    ThePagetitle,
    TheBreadcrumb,
    ProductsOutro,
    CatalogNav,
    CatalogContent
  },
  head () {
    return {
      title: '製品カタログ - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: '製品カタログ',
      title_en: 'Catalog',
      breadcrumbs: [
        {
          title: '製品カタログ',
          link:  ''
        }
      ]
    }
  }
}
</script>