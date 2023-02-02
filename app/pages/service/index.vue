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
              p 各種メーカーの新車販売はもちろん、お客様のご希望の中古車もお探し致します。またカスタム車輌のコンプリートカー製作も対応しております。
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 車検、修理、メンテナンス
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/service/service_photo2.jpg")
            .subsection-content
              p カスタムパーツの塗装、取付、FRP補修<br>全塗装を含むカスタムカーペイント<br>ラプターライナーによるチッピング系コーティング塗装
        section.subsection
          .subsection-header
            h2.c-title.c-title_secondary 事故車修理及び鈑金塗装
          .subsection-main.subsection-main_flex
            .subsection-photo: img(src="~/assets/images/service/service_photo3.jpg")
            .subsection-content
              p 万が一の事故による自動車車体の鈑金塗装修理に対応致します。<br>パーツ等の塗装施工を致します。
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

export default {
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