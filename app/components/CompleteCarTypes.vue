<template lang="pug">
  .price
    //- pre {{ option }}
    .price-tab
      ul.price-tablist
        template(v-for="(name, index) in option")
          li(:class="{'active' : index == current }" v-on:click="tabClick(index)") {{ name.cartype }}
    .price-content
      .price-block(v-for="(val, index) in option" v-show="index == current")
        .total
          dl.total-dl
            dt コンプリート価格：
            dd
              |￥
              span.total-num {{ val.total | addComma }}
          .total-caption
            p: small ※コンプリート価格とは、車両、工賃等を含んだ価格です。
        table.price-table
          tbody
            tr(v-for="val in val.pricelist")
              td {{ val.item }}
              td ￥{{ val.price | addComma }}
        .captiopn
          p(v-html="val.caption")
</template>

<style lang="scss" scoped>

$color-primary: #616C48;
$color-secondary: #BDB17F;

.price-tab{
  margin-bottom: 30px;
}

.price-tablist{
  display: flex;
  border-bottom: 1px solid lighten($color-secondary, 20);
  li{
    cursor: pointer;
    display: inline-flex;
    min-width: 190px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #F2EFE5;
    color: $color-primary;
    
    @include media(sm){
      min-width: 120px;
      height: 44px;
    }
    &.active{
      background-color: #DBD6C4;
    }
  }
}

.total{
  background-color: #F9F9F9;
  padding: 12px 20px;
  margin-bottom: 30px;
  color: $color-primary;
  line-height: 1.2;
  @include media(sm){
    margin-bottom: 20px;
  }

  p{
    margin-bottom: 0;
    small{
      font-size: 0.8em;
    }
  }
}

.total-dl{
  font-weight: 700;
  color: $color-primary;
  font-size: 30px;
  @include media(sm){
    font-size: 20px;
  }
  dt{
    display: inline-block;
    font-size: 0.8em;
    @include media(sm){
      font-size: 0.7em;
    }
  }
  dd{
    display: inline-block;
  }
}

.price-table{
  font-size: 14px;
  width: 100%;
  border-top: 3px solid $color-primary;
  border-bottom: 1px solid $color-primary;
  color: $color-primary;
  @include media(sm){
    font-size: 12px;
  }
  tr{
    background-color: #F2EFE5;
    &:nth-child(even){
      background-color: #FBFBFB;
    }

    th, td{
      padding: 10px 15px;
      @include media(sp){
        padding: 6px 10px;
        display: block;
      }
      &:nth-child(2){
        text-align: right;
      }
    }
  }
}

.captiopn{
  font-size: 12px;
  margin-top: 10px;
  p{
    margin-bottom: 0;
  }
}

</style>

<script>

export default {
  props: {
    option: {
      type: Array,
      default: [],
      required: true
    }
  },
  data: function(){
    return {
      current: 0
    }
  },
  methods: {
    tabClick: function(val) {
      return this.current = val
    }
  }
}
</script>
