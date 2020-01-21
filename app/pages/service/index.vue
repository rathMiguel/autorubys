<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section
      .container
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 新車、中古車販売
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/service/service_photo1.jpg")
            .subsection-content
              p 各種メーカーの新車販売はもちろん、お客様のお探しの中古車もお探し致します<br>自動車関連用品の販売、取付も行っています<br>オートローン、カーリースもお任せください
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 車検、修理、メンテナンス
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/service/service_photo2.jpg")
            .subsection-content
              p 自動車整備一般<br>自動車車検業務<br>中国運輸局認証工場
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 事故車修理及び鈑金塗装
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/service/service_photo3.jpg")
            .subsection-content
              p 事故などによる鈑金塗装修理<br>パーツ等の塗装施工
</template>

<style lang="scss" scoped>

.subsection{
  overflow: hidden;
}

.subsection-photo{
  @include media(md-lg){
    max-width: 400px;
    float: left;
    margin-left: 0;
    margin-right: 20px;
  }
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
      title: 'サービス案内 - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: 'サービス案内',
      title_en: 'Service',
      breadcrumbs: [
        {
          title: 'サービス案内',
          link:  ''
        }
      ]
    }
  }
}
</script>