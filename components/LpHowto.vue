<template lang="pug">
.howto.section#howto
  .section-header
    h2.title.section-title 取付方法
    span.section-title__en How to Install
  .container
    .youtube
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zin17PZPRxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .outro
      p 弊社での取り付けも承っております。お気軽にお問合せください。
</template>

<style lang="scss" scoped>
.youtube{
  text-align: center;

  iframe{
    @include media(sm){
      width: 100%;
    }
  }
}

.outro{
  text-align: center;
  padding-top: 1em;
}
</style>
