<template lang="pug">
header#header
  .header-top
    .container
      .header-top_wrap
        .header-top_catch
          p 車のことならオートルビーズにお任せください
        .header-top_tel
          span TEL：
          a(href="tel:0857720727").tel 0857-72-0727
  .header-main
    .container
      .header-main_wrap
        .header-main_logo
          nuxt-link(to="/"): img(src="~assets/images/common/logo.svg" alt="株式会社　オートルビーズ" width=300)
        .header-main_nav
          ul.header-main_list
            li: nuxt-link(to='/service/') サービス案内
            li: nuxt-link(to='/products/') 製品情報
            li: nuxt-link(to='/access/') 交通アクセス
            li: nuxt-link(to='/company/') 会社概要
            li: nuxt-link(to='/contact/') お問い合わせ
</template>

<style lang="scss" scoped>

$color-primary: #D70247;

#header{
  border-bottom: 2px solid $color-primary;
}

.header-top{
  background-color: $color-black;
  color: #FFF;
  font-size: 14px;
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
    p{
      margin-bottom: 0;
    }
  }

  &_tel{
    margin-left: auto;
  }
}

.nav-top{
  &_wrap{
    display: flex;
    height: 30px;
    justify-content: flex-end;
  }
}

.header-main{
  &_wrap{
    display: flex;
    align-items: center;
  }
  &_logo{
    @include media(lg){
      padding-top: 15px;
      padding-bottom: 15px;
    }
    img{
      display: block;
    }
  }

  &_nav{
    margin-left: auto;
  }
  &_list{
    display: flex;
    li{
      margin-left: 2em;
    }
    a{
      color: darken($color-primary, 5);
      text-decoration: none;
      font-size: 17px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}

</style>
