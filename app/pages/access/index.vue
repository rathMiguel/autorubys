<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main.access-main
    .area-accessmap
      .container
        .access-gmap
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.6744566162477!2d134.29484793520336!3d35.57349107327562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bbc0f2a76068959!2zKOagqinjgqrjg7zjg4jjg6vjg5Pjg7zjgrrvvIjvvKHvvZXvvZTvvY_vvLLvvZXvvYLvvZnigJnvvZPvvIk!5e0!3m2!1sja!2sjp!4v1578555671147!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        .access-map_footer
          ul.access-map_buttons
            li: a(href="https://www.google.co.jp/maps/place/(%E6%A0%AA)%E3%82%AA%E3%83%BC%E3%83%88%E3%83%AB%E3%83%93%E3%83%BC%E3%82%BA%EF%BC%88%EF%BC%A1%EF%BD%95%EF%BD%94%EF%BD%8F%EF%BC%B2%EF%BD%95%EF%BD%82%EF%BD%99%E2%80%99%EF%BD%93%EF%BC%89/@35.5726902,134.2962995,16.25z/data=!4m5!3m4!1s0x0:0x3bbc0f2a76068959!8m2!3d35.5734085!4d134.294115?hl=ja" target="_blank").c-button.c-button_secondary.button 大きな地図で見る
            li: a(href="https://www.google.com/maps/dir//%28%E6%A0%AA%29%E3%82%AA%E3%83%BC%E3%83%88%E3%83%AB%E3%83%93%E3%83%BC%E3%82%BA%EF%BC%88%EF%BC%A1%EF%BD%95%EF%BD%94%EF%BD%8F%EF%BC%B2%EF%BD%95%EF%BD%82%EF%BD%99%E2%80%99%EF%BD%93%EF%BC%89/data=!4m8!4m7!1m0!1m5!1m1!1s0x3555870d9816fffb:0x3bbc0f2a76068959!2m2!1d134.294115!2d35.573409" target="_blank").c-button.c-button_secondary.button ルートを検索
    section.section.bg-secondary.area-worktime#worktime
      .container.container-single
        .section-header
          h2.c-title_info 営業時間のご案内
        table.worktime-table
          tr
            th 月曜日
            td 10時00分～19時00分
          tr
            th 火曜日
            td 10時00分～19時00分
          tr
            th 水曜日
            td 10時00分～19時00分
          tr
            th 木曜日
            td 10時00分～19時00分
          tr
            th 金曜日
            td 10時00分～19時00分
          tr
            th 土曜日
            td 10時00分～19時00分
          tr.bg-sunday
            th 日曜日
            td 定休日
</template>

<style lang="scss" scoped>

.access-main{
  margin-top: 60px;
}

.area-accessmap{
  margin-bottom: 80px;
}

.access-gmap{
  iframe{
    width: 100%;
    @include media(sm){
      height: 280px;
    }
  }
}

.access-map{
  &_footer{
    margin-top: 20px;
  }
  &_buttons{
    display: flex;
    justify-content: center;
    li{
      margin-left: 5px;
      margin-right: 5px;
    }

    .button{
      @include media(md-lg){
        width: 300px;
        height: 50px;
      }
    }
  }
}

.worktime-table{
  width: 100%;
  tr{
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
  }

  th, td{
    padding: 10px 15px;
  }
  th{
    font-weight: 700;
    text-align: left;
    width: 5em;
  }
  td{}
}

.bg-saturday{
  color: #2D00B2;
  background-color: lighten(#2D00B2, 61);
}

.bg-sunday{
  color: #D90000;
  background-color: lighten(red, 48);
}

</style>

<script>

export default {
  head () {
    return {
      title: '交通アクセス - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: '交通アクセス',
      title_en: 'Access',
      breadcrumbs: [
        {
          title: '交通アクセス',
          link:  ''
        }
      ]
    }
  }
}
</script>