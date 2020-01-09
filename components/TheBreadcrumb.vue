<template lang="pug">
.breadcrumb
  .container
    ul.breadcrumb_list(v-for="item in list")
      li: nuxt-link(to="/") ホーム
      template(v-for="item in list")
        li(v-if="item.link"): nuxt-link(:to="item.link") {{ item.title }}
        li(v-else): span {{ item.title }}
</template>

<script>
export default {
  props: {
    'list' : Array,
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb{
  font-size: 14px;
  background-color: #EFEFEF;
  a{
    color: #000;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }

  &_list{
    padding-top: 5px;
    padding-bottom: 5px;
    li{
      display: inline-block;
      &:not(:last-child){
        &:after{
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-image: url('~assets/images/icons/right.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
