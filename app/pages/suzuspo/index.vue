<template lang="pug">
  div
    TheBreadcrumb(v-bind:list="breadcrumbs")
    .hero
      .hero_photo
        .hero_text: img(src="~/assets/images/suzuspo/hero_text.svg" width="900")
    LpInfo
    LpGallery
    LpColors
    LpHowto
    LpMedia
    LpForm
</template>

<script>
import LpInfo from '~/components/LpInfo.vue'
import LpHowto from '~/components/LpHowto.vue'
import LpMedia from '~/components/LpMedia.vue'
import LpForm from '~/components/LpForm.vue'
import LpColors from '~/components/LpColors.vue'
import LpGallery from '~/components/LpGallery.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'

export default {
  layout: 'lpSuzuspo',
  components: {
    LpInfo,
    LpHowto,
    LpMedia,
    LpForm,
    LpColors,
    LpGallery,
    TheBreadcrumb
  },
  head () {
    return {
      title: 'スズスポグリル - あなたのジムニーを可愛く変身させるグリルパーツ',
      meta: [
        { hid: 'description', name: 'description', content: '「ジムニーがカッコ良くあり続けるには、時には"可愛く"なければならない」――――スズスポグリルは、あなたのジムニーをもっと愛したくなる、おしゃれなフロントパーツです。' }
      ],
    }
  },
  data: function() {
    return {
      breadcrumbs: [
        {
          title: 'スズスポグリル',
          link:  ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
body{
  font-family:$ja_suzuspo;
  @include media(pc){
    font-size: 18px;
  }
}

#header{
  text-align: center;
  background-color: #122A88;
  color: #FFF;
  padding-top: 15px;
  padding-bottom: 15px;
  .logo{
    margin-top: 10px;
    @include media(sm){
      width: 300px;
    }
  }

  .header-title{
    margin-top: 5px;
  }
}

//
// hero
//

.hero_photo{
  height: 800px;
  width: 100%;
  background-image: url('~assets/images/suzuspo/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @include media(sm){
    height: 250px;
  }
}

.hero_text{
  text-align: center;
  position: relative;
  bottom: -60px;
  @include media(sm){
    padding-left: 10px;
    padding-right: 10px;
    max-width: 340px;
    bottom: -30px;
  }
}

//
// footer
//

#footer{
  color: #FFF;
  background-color: #122A88;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  small{
    font-size: 13px;
  }
  p{
    margin-bottom: 0;
  }
}

</style>
