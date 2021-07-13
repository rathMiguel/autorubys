<template lang="pug">
header#header
  .header-top
    .container.header-container
      .header-top_wrap
        .header-top_catch
          p 車のことならオートルビーズにお任せください
        .header-top_tel
          span TEL：
          a(href="tel:0857720727").tel 0857-72-0727
  .header-spnav
    a(href="tel:0857720727").tel-sp: img(src="~/assets/images/icons/467_s_h.svg" alt="株式会社　オートルビーズ" width=32)
    #menu_btn.menu_btn(v-on:click="navToggle()" v-bind:class="(isActive === true) ? 'is-active' : ''")
      span
      span
      span
  .header-main
    .container.header-container
      .header-main_wrap
        .header-main_logo
          nuxt-link(to="/"): img(src="~/assets/images/common/logo.svg" alt="株式会社　オートルビーズ" width=300)
        .header-main_nav(v-bind:class="(isActive === true) ? 'is-active' : ''")
          nav#nav
            ul.header-main_list
              li: nuxt-link(to='/service/') サービス案内
              li: nuxt-link(to='/products/') 製品カタログ
              li: nuxt-link(to='/access/') 交通アクセス
              li: nuxt-link(to='/company/') 会社概要
              li: nuxt-link(to='/branchstore/') ブランチストア
              li: nuxt-link(to='/contact/') お問い合わせ
</template>

<script>
export default {
  data(){
    return {
      isActive: false
    }
  },
  methods: {
    navToggle: function() {
      this.isActive = !this.isActive
    }
  },
  watch: {
    '$route' () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>

#header{
  border-bottom: 2px solid $color-secondary;
}

.header-container{
  max-width: 1280px;
}

.header-top{
  background-color: $color-black;
  color: #FFF;
  font-size: 14px;
  @include media(sm){
    background-color: #EFEFEF;
    color: $color-black;
  }

  a{
    color: #FFF;
    text-decoration: none;
    font-size: 14px;
    &:hover{
      text-decoration: underline;
    }
  }

  &_wrap{
    display: flex;
  }

  &_catch{
    @include media(sm){
      display: flex;
      align-items: center;
      height: 15px;
    }
    p{
      margin-bottom: 0;
      @include media(sm){
        font-size: 10px;
        line-height: 1;
      }
    }
  }

  &_tel{
    margin-left: auto;
    @include media(sm){
      display: none;
    }
  }
}

.nav-top{
  &_wrap{
    display: flex;
    height: 44px;
    justify-content: flex-end;
  }
}

.header-main{
  &_wrap{
    display: flex;
    align-items: center;
    @include media(md){
      flex-direction: column;
      justify-content: center;
    }
    @include media(sm){
      height: 30px;
      align-items: center;
    }
  }
  &_logo{
    @include media(md-lg){
      padding-top: 15px;
      padding-bottom: 15px;
    }
    img{
      display: block;
      @include media(sm){
        width: 180px;
      }
    }
  }

  &_nav{
    @include media(md-lg){
      height: 65px;
      display: flex;
      align-items: center;
    }
    @include media(lg){
      margin-left: auto;
      font-size: 14px;
    }
    @include media(md){
      margin-bottom: 10px;
      width: 100%;
    }
    @include media(sm){
      position: absolute;
      z-index: 10;
      top: 15px + 30px;
      left: 0;
      width: 100%;
      background-color: $color-secondary;
      display: none;
    }
    nav{
      width: 100%;
    }
    &.is-active{
      @include media(sm){
        display: block;
      }
    }
  }
  
  &_list{
    display: flex;
    @include media(sm){
      flex-direction: column;
    }
    @include media(md){
      justify-content: space-between;
    }
    li{
      @include media(lg){
        margin-left: 2em;
      }
      @include media(md){
        font-size: 14px;
      }
      &:last-child{
        @include media(sm){
          a{
            border-bottom: none;
          }
        }
      }
    }
    a{
      color: darken($color-secondary, 5);
      text-decoration: none;
      font-size: 17px;
      @include media(sm){
        color: #FFF;
        font-size: 14px;
        display: block;
        border-bottom: 1px dotted #FFF;
        padding: 8px 15px;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
}

//
// sp menu
//

.header-spnav{
  @include media(md-lg){
    display: none;
  }
}

.menu_btn{
  display: block;
  width: 47px;
  height: 47px;
  padding-top: 15.5px;
  padding-left: 11.5px;
  z-index: 1010;
  right: 0;
  top: -2px;
  box-sizing: border-box;
  position: absolute;
  background-color: $color-secondary;
  span{
    display: block;
    width: 27px;
    height: 2px;
    background-color: #FFF;
    border-radius: 2px;
    transition: all .35s ease;
    &:nth-child(2){
      margin-top: 7px;
    }
    &:nth-child(3){
      margin-top: 7px;
    }
  }

  &.is-active{
    @include media(sp){
      span:nth-child(1){
        transform: rotate(45deg);
        margin-top: 10px;
      }
      span:nth-child(2){
        display: none;
      }
      span:nth-child(3){
        transform: rotate(-45deg);
        margin-top: -1.5px;
      }
    }
  }
}

.tel-sp{
  background-color: lighten($color-secondary, 5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 47px;
  top: 0;
  width: 47px;
  height: 47px;
  img{
    display: block;
    width: 34px;
  }
}
</style>
