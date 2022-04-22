<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main
    section.section.page-section
      .container
        .section-header
          h2.c-title_info 発注、見積り希望の業者様へ
        p 発注、見積依頼書をご用意しました。<br>下記リンク先の案内に従って、発注、見積りのご依頼をいただきますよう、お願い申し上げます。
        .text-center
          p: nuxt-link(to="/news/post/181"): img(src="~/assets/images/contact/bnr_gyousya_fax.png" alt="")
        .panel-plain
          h3.c-title.c-title_third.has-line 海外配送をご希望の方へ
          .text-left
            p 商品の海外発送をご要望の方は下記までお願いします。
              br
              |（Overseas Customer Service）
              br
              a(href="mailto:autorubys999@gmail.com" target="_blank") &#97;&#117;&#116;&#111;&#114;&#117;&#98;&#121;&#115;&#57;&#57;&#57;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
    section.section.page-section
      .container
        .section-header
          h2.c-title_info お電話からのお問い合わせ
        .touch-raw
          .touch-panel
            h3.c-title_third 本社へのお問い合わせ
            dl.tel-dl.tel-dl--primary
              span.tel-title tel.
              span.tel-text: a(href="tel:0857720727").tel 0857-72-0727
            .touch-worktime: small 受付時間：10：00～19：00 日曜定休
            p E-MAIL：<a href="m&#97;i&#108;t&#111;:&#114;&#97;&#110;&#99;&#105;&#100;&#54;&#57;&#54;&#106;&#112;&#64;&#97;u&#116;o-r&#117;&#98;&#121;&#115;&#46;&#99;&#111;m" target="_blank">&#114;&#97;&#110;&#99;&#105;&#100;&#54;&#57;&#54;&#106;&#112;&#64;&#97;u&#116;o-r&#117;&#98;&#121;&#115;&#46;&#99;&#111;m</a>
            p: nuxt-link(v-scroll-to="'#contact-form'" to) フォームからお問い合わせする
          .touch-panel
            h3.c-title_third ブランチストアへのお問い合わせ
            dl.tel-dl.tel-dl--primary
              span.tel-title tel.
              span.tel-text: a(href="tel:0544265508").tel 0544-26-5508
            .touch-worktime: small 受付時間：10：00～19：00 水・木曜定休
            p E-MAIL：<a href="m&#97;i&#108;t&#111;:&#97;&#117;t&#111;&#114;u&#98;&#121;&#115;&#64;&#103;&#109;&#97;&#105;l&#46;&#99;o&#109;" target="_blank">&#97;&#117;t&#111;&#114;u&#98;&#121;&#115;&#64;&#103;&#109;&#97;&#105;l&#46;&#99;o&#109;</a>
            p: nuxt-link(to='/branchstore/#contact') フォームからお問い合わせする
    section.section.page-section.bg-secondary#contact-form
      .container
        .section-header
          h2.c-title_info メールフォームでのお問い合わせ
        ul.list-dotted.fz-normal
          li いただいたご意見など、すべてにお返事できない場合や、お時間をいただく場合がございます。お急ぎの場合には、お電話にてお問い合わせください。
          li お問い合わせの内容によっては、お電話で回答させていただくこともございます。
          li 当社からの回答は、お問い合わせいただいた内容にお答えすることを目的としておりますので、回答の内容の一部または全部を転載、二次利用することはご遠慮ください。
          li このページから送信される個人情報は、お問い合わせの回答以外には一切利用いたしません。
        ContactForm
</template>

<style lang="scss" scoped>

$color-primary: #D70247;

small{
  font-size: 0.85em;
}

.touch-raw{
  @include media(md-lg){
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
  }
  
  & > *{
    @include media(md-lg){
      width: 100%;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}

.touch-worktime{
  margin-bottom: 10px;
}

.touch-panel{
  background-color: #F6F6F6;
  padding: 25px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  p:last-child{
    margin-bottom: 0;
  }
}


.tel-dl{
  &--primary{
    line-height: 1.3;
    .tel-text{
      font-weight: 700;
      font-size: 2em;
      margin-left: 5px;
      a.tel{
        text-decoration: none;
        color: inherit;
      } 
    }
  }
}

.panel-plain{
  padding: 15px;
  background-color: #F6F6F6;
  @include media(lg){
    padding: 25px;
  }

  & *:last-child{
    margin-bottom: 0;
  }
}

</style>

<script>

export default {
  head () {
    return {
      title: 'お問い合わせ - 株式会社オートルビーズ（鳥取県 岩美町）'
    }
  },
  data: function() {
    return {
      title: 'お問い合わせ',
      title_en: 'Contact',
      breadcrumbs: [
        {
          title: 'お問い合わせ',
          link:  ''
        }
      ]
    }
  }
}
</script>