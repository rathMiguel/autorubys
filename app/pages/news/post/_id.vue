<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main.access-main
    .area-accessmap
      .container.container-single
        .single-header
          h2.c-title.title-single {{ this.post.title.rendered }}
          span.meta-date {{ $moment(post.date).format("YYYY.MM.DD") }}
        .single-content(v-html="this.post.content.rendered")
</template>

<style lang="scss" scoped>
.single-header{
  margin-bottom: 1.6em;
  text-align: center;
  margin-top: 2em;
}

.title-single{
  font-size: 1.8em;
  margin-bottom: 20px;
}

.single-content{
  margin-bottom: 40px;
  @include media(md-lg){
    margin-bottom: 80px;
  }
}

.meta-date{
  color: #AAA;
  font-size: 14px;
}
</style>

<script>

import ThePagetitle from '~/components/ThePagetitle.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'

export default {
  components: {
    ThePagetitle,
    TheBreadcrumb
  },
  head () {
    return {
      title: this.post.title.rendered
    }
  },
  data: function() {
    return {
      title: 'ニュース・お知らせ',
      pagetitle: null,
      title_en: 'News',
      post: {},
      breadcrumbs: null
    }
  },
  async asyncData ({ $axios, params }) {
    return await $axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/${params.id}`)
    .then(response => {
      return {
        post: response.data,
        pagetitle: response.data.title.rendered,
        breadcrumbs: [
            {
              title: 'ニュース・お知らせ',
              link:  '/'
            },
          {
            title: response.data.title.rendered,
            link:  ''
          }
        ]
      }
    })
  }
}
</script>