<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main.access-main
    .area-accessmap
      .container.container-single
        .single-header
          h2.c-title.title-single {{ pagetitle }}
          span.meta-date 2019.12.01
        .single-content
          p この度、より分かりやすく皆様に弊社について知っていただくため、ホームページをリニューアル致しました。
          p より分かりやすく、使いやすくなったかと思います。
          p 今後とも、よろしくお願い致します。
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

export default {
  head () {
    return {
      title: 'ホームページをリニューアルしました - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: 'ニュース・お知らせ',
      pagetitle: 'ホームページをリニューアルしました',
      title_en: 'News',
      breadcrumbs: [
        {
          title: 'ニュース・お知らせ',
          link:  ''
        },
        {
          title: 'ホームページをリニューアルしました',
          link:  ''
        }
      ]
    }
  }
}
</script>