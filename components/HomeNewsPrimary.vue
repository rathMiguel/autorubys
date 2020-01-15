<template lang="pug">
#news
  .container
    .news-wrap
      h3.news-title お知らせ
      dl.news-dl
        dt 2019.12.01
        dd: a(href="") 年末年始の営業について
</template>

<style lang="scss" scoped>
#news{
  background-color: $color-black;
  color: #FFF;
  @include media(lg){
    font-size: 16px;
  }
  @include media(sm){
    padding-top: 10px;
    padding-bottom: 10px;
  }
  a{
    color: #FFF;
  }
}

.news-wrap{
  @include media(md-lg){
    display: flex;
    align-items: center;
    height: 50px;
  }
}

.news-title{
  margin-right: 1em;
  border: 1px solid #FFF;
  display: inline-block;
  padding: 1px 10px;
  @include media(sm){
    margin-bottom: 5px;
  }
}

.news-dl{
  dt{
    float: left;
    font-size: 0.85em;
    margin-top: .15em;
  }
  dd{
    padding-left: 6em;
  }
}
</style>
