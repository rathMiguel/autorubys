<template lang="pug">
  div
    header#header
      span.logo: img(src="~/assets/images/common/logo_white.svg")
      h1.title.header-title スズスポグリル
    main(role="main")
      .hero
        .hero_photo
          .hero_text: img(src="~/assets/images/suzuspo/hero_text.svg")
      LpInfo
      .gallery
      LpHowto
      LpMedia
      LpForm

    footer#footer
      p: small Copyright © Auto Ruby's All Rights Reserved.
</template>

<script>
import LpInfo from '~/components/LpInfo.vue'
import LpHowto from '~/components/LpHowto.vue'
import LpMedia from '~/components/LpMedia.vue'
import LpForm from '~/components/LpForm.vue'

export default {
  components: {
    LpInfo,
    LpHowto,
    LpMedia,
    LpForm,
  }
}
</script>

<style lang="scss" scoped>

#header{
  text-align: center;
  background-color: #122A88;
  color: #FFF;
  padding-top: 15px;
  padding-bottom: 15px;
  .logo{
    margin-top: 10px;
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
}

.hero_text{
  text-align: center;
  position: relative;
  bottom: -40px;
}

//
// footer
//

#footer{
  color: #FFF;
  background-color: #122A88;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  small{
    font-size: 13px;
  }
}

</style>
