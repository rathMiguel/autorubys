<template lang="pug">
.news-tab
  .news-tab__header
    .news-tab__label(v-on:click="tabSwitch('all')" :class="(tab === 'all') ? 'is-active' : ''") すべて
    .news-tab__label(v-on:click="tabSwitch('news')" :class="(tab === 'news') ? 'is-active' : ''") お知らせ
    .news-tab__label(v-on:click="tabSwitch('media')" :class="(tab === 'media') ? 'is-active' : ''") メディア掲載
  .news-tab__content
    .news-tab__block(v-if="tab === 'all'")
      dl.news-list(v-for="post in postsAll")
        dt {{ $moment(post.date).format("YYYY.MM.DD") }}
          span.news-label.category-label(:class="categories[post.categories[0]].slug") {{ categories[post.categories[0]].name }}
        dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
    .news-tab__block(v-if="tab === 'news'")
      dl.news-list(v-for="post in postsNews")
        dt {{ $moment(post.date).format("YYYY.MM.DD") }}
          span.news-label.category-label(:class="categories[post.categories[0]].slug") {{ categories[post.categories[0]].name }}
        dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
    .news-tab__block(v-if="tab === 'media'")
      dl.news-list(v-for="post in postsMedia")
        dt {{ $moment(post.date).format("YYYY.MM.DD") }}
          span.news-label.category-label(:class="categories[post.categories[0]].slug") {{ categories[post.categories[0]].name }}
        dd: nuxt-link(:to="'/news/post/' + post.id") {{ post.title.rendered }}
</template>

<script>
export default {
  data() {
    return {
      categories: {
        1: {
          slug: "news",
          name: "お知らせ"
        },
        2: {
          slug: "event",
          name: "イベント"
        },
        3: {
          slug: "media",
          name: "メディア掲載"
        },
        8: {
          slug: "important",
          name: "重要なお知らせ"
        }
      },
      tab: 'all',
      postsAll: [],
      postsNews: [],
      postsMedia: []
    }
  },
  mounted(){
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=5&categories=1,2,3`)
    .then((res) => {
      return this.postsAll = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=5&categories=1`)
    .then((res) => {
      return this.postsNews = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))
    this.$axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts/?per_page=5&categories=3`)
    .then((res) => {
      return this.postsMedia = res.data
    }).catch((e => {
      error({ searchPosts: e.response.status, message: e.message })
    }))

  },
  methods: {
    tabSwitch: function(index){
      return this.tab = index
    }
  }
}
</script>

<style lang="scss" scoped>
.news-list{
  a{
    color: #222;
  }
}

.news-label{
  border: 1px solid $color-secondary;
  color: $color-secondary;
  display: inline-block;
  line-height: 1.2;
  margin-right: 10px;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.9em;
  &.news{
    border-color: #dc143c;
    color: #dc143c;
  }
  &.event{
    border-color: #008080;
    color: #008080;
  }
  &.media{
    border-color: #ff4500;
    color: #ff4500;
  }
}

.news-tab{
  &__header{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #DDD;
  }
  &__label{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    margin-left: 4px;
    margin-right: 4px;
    border: 1px solid #DDD;
    margin-bottom: -1px;
    @include media(sm){
      margin-left: 1px;
      margin-right: 1px;
    }
    cursor: pointer;
    &.is-active{
      border-top: 3px solid $color-secondary;
    }
    @include media(lg){
      height: 60px;
      width: 300px;
    }
  }
}
</style>
