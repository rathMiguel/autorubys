<template lang="pug">
.catalog-postlist
  section.catalog-section(v-for="category in categories" :id="category.slug")
    //- pre {{ category }}
    .catalog-row.catalog-row__header
      .catalog-header
        h2.catalog-title {{category.name}}
    .catalog-row.catalog-row__items
      template(v-for="post in posts[category.slug]")
        nuxt-link.catalog-block(:to="`item/${post.id}`")
          .catalog-block__photo(v-if="post.acf.photo")
            img(:src="post.acf.photo.url" :alt="post.title.rendered")
          h3.title.item-title {{ post.title.rendered }}
          span.price {{ post.acf.price | addComma }}円
            small （税抜）
</template>

<style lang="scss" scoped>
.catalog-row{
  &__header{}
  &__items{
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
    @include media(sm){
      margin-left: -5px;
      margin-right: -5px;
    }
  }
}

.catalog-header{
  margin-bottom: 1em;
  background-color: #EFEFEF;
  border-left: 8px solid $color-secondary;
  padding: 10px 20px;
}

.catalog-title{
  font-size: 1.25em;
  font-weight: 700;
}

.catalog-block{
  display: block;
  color: inherit;
  text-decoration: none;
  width: 33.333%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  @include media(md){
    width: 50%;
  }
  @include media(sm){
    width: 50%;
    padding: 5px;
    margin-bottom: 20px;
  }
}

.item-title{
  line-height: 1.3;
  font-weight: 700;
}

.price{
  font-weight: 1.1em;

  small{
    font-size: 0.86em;
  }
}

</style>

<script>

export default {
  data: function() {
    return {
      categories: [],
      posts: {}
    }
  },
  mounted() {
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/catalog_category`)
    .then((res) => {
      for (let value in res.data) {
        this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/products?catalog_category=${res.data[value].id}`).then((post) => {
          return this.$set(this.posts, res.data[value].slug, post.data)
        }).catch((e => {
          error({ message: e.message })
        }))
      }

      return this.categories = res.data
    }).catch((e => {
      error({ message: e.message })
    }))
  }
}
</script>