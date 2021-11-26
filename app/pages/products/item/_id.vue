<template lang="pug">
div
  TheBreadcrumb(v-bind:list="breadcrumbs")
  ThePagetitle(:title="title", :title_en="title_en")
  .page-main.product-main
    .container
      //- pre {{ post }}
      .single-header
        h2.c-title.c-title_secondary {{ post.title.rendered }}
      .single-content(v-if="post.content.rendered" v-html="post.content.rendered")
      .single-info
        .single-info__side
          .single-info__photo(v-if="post.acf.photo"): img(:src="post.acf.photo.url" :alt="post.title.rendered")
          .single-info__supplement(v-if="post.acf.supplement" v-html="post.acf.supplement")
        .single-info__main
          .price-main(v-if="post.acf.price")
            span.price {{post.acf.price | addComma }}
            |円
            small （税込）
          .product-option(v-if="post.acf.options")
            h3.c-title.title-option 追加オプション
            table.c-table.product-table
              tbody
                tr(v-for="option in post.acf.options")
                  td {{ option.option_group.option_name }}
                  td +{{ option.option_group.option_price | addComma }}円
                    small （税込）
            // .product-table__caption
              p: small 価格は全て税抜です。
          .product-buttons
            ul.product-buttons__list
              li.layout-half: nuxt-link(to="/contact/#contact-form").c-button.button.c-button_primary.button-email メールでのお問い合わせ
              li.layout-half: a(href="tel:0857720727").c-button.button.c-button_primary.button-tel 電話でのお問い合わせ
              li(v-if="post.acf.link_yahoo"): a(:href="post.acf.link_yahoo" target="_blank").c-button.button.c-button_primary.button-shopping ショッピングで購入
</template>


<style lang="scss" scoped>
.product-main{
  padding-bottom: 20px;
  @include media(md-lg){
    padding-bottom: 40px;
  }
}

.single-header{
  margin-bottom: 1.6em;
  margin-top: 2em;
}

.title-single{
  font-size: 1.4em;
  margin-bottom: 20px;
  padding: 14px 20px;
  background-color: #EFEFEF;
  border-left: 8px solid $color-secondary;
}

.single-content{
  margin-bottom: 40px;
  @include media(md-lg){
    margin-bottom: 80px;
  }
}

.single-info{
  display: flex;
  @include media(sm-md){
    flex-direction: column;
  }
  @include media(md){
    margin-left: -10px;
    margin-right: -10px;
  }
  @include media(lg){
    margin-left: -20px;
    margin-right: -20px;
  }

  &__side{
    @include media(md-lg){
      }
    @include media(md){
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
    @include media(lg){
      width: 40%;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__main{
    @include media(md){
      width: 100%;
    }
    @include media(lg){
      width: 60%;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  &__photo{
    margin-bottom: 10px;
  }

  &__supplement{
    margin-bottom: 10px;
  }
}

.title-option{
  color: $color-secondary;
  border-bottom: 1px solid $color-secondary;
  font-size: 1.2em;
  padding: 10px 15px;
}

.product-table{
  width: 100%;
  margin-bottom: 1.5em;
  tr{
    border-bottom: 1px solid #DDD;
  }
  th, td{
    padding: 14px 20px;
  }

  small{
    font-size: 0.8em;
    display: inline-block;
  }

  &__caption{
    text-align: right;
    margin-top: 10px;
  }
}

.price-main{
  margin-bottom: 10px;
  .price{
    font-weight: 700;
    font-size: 2em;
  }

  small{
    font-size: 0.86em;
  }
}

.product-buttons{
  margin-left: -5px;
  margin-right: -5px;
  &__list{
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 5px;
      box-sizing: border-box;
      width: 100%;
    }

    .layout-half{
      @include media(md-lg){
        width: 50%;
      }
    }
  }
}

.button{
  border-radius: 0;
  width: 100%;
  height: 44px;
  min-width: auto;
  @include media(md-lg){
    height: 60px;
    font-size: 18px;
  }
  @include media(md){
    font-size: 16px;
  }

  &-email{
    color: #FFF;
    background-color: $color-info;
    flex-direction: row;
    align-items: center;
    &:before{
      content: "";
      display: inline-block;
      background-image: url('~assets/images/icons/mail_hoso.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      height: 25px;
      width: 25px;
      margin-right: 5px;
    }
  }

  &-tel{
    color: #FFF;
    background-color: $color-info;
    flex-direction: row;
    align-items: center;
    &:before{
      content: "";
      display: inline-block;
      background-image: url('~assets/images/icons/467_s_h.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      height: 30px;
      width: 30px;
      margin-right: 5px;
      position: relative;
      top: 1px;
    }
  }

  &-shopping{
    background-color: #FF0027;
    flex-direction: row;
    align-items: center;
    &:before{
      content: "";
      display: inline-block;
      background-image: url('~assets/images/icons/logo_yahoo.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      height: 35px;
      width: 100px;
      margin-right: 5px;
      position: relative;
      top: -1px;
    }
  }
}

</style>

<script>

export default {
  head () {
    return {
      title: `${this.post.title.rendered} - 株式会社オートルビーズ（鳥取県 岩美町）`
    }
  },
  data: function() {
    return {
      title: '製品カタログ',
      pagetitle: null,
      title_en: 'Catalog',
      post: {},
      breadcrumbs: null
    }
  },
  async asyncData ({ $axios, params }) {
    return await $axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/products/${params.id}`)
    .then(response => {
      return {
        post: response.data,
        pagetitle: response.data.title.rendered,
        breadcrumbs: [
            {
              title: '製品カタログ',
              link:  '/products/'
            },
          {
            title: response.data.title.rendered,
            link:  ''
          }
        ]
      }
    })
  }
}
</script>