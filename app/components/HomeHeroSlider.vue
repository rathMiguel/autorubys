<template lang="pug">
#hero
  slick(ref="slick" :options="slickOptions")
    .slide-block: img(src="http://placehold.jp/1000x500.png" alt="")
    .slide-block: img(src="http://placehold.jp/1000x500.png" alt="")
    .slide-block: img(src="http://placehold.jp/1000x500.png" alt="")
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        speed: 500,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        infinite: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#hero{
  padding-bottom: 20px;
  padding-top: 20px;
  // background-color: #666;
  background-image: url('~assets/images/home/bg_linen.jpg');
  border-bottom: 1px solid #666;
  overflow: hidden;
  @include media(sm){
    padding-top: 20px;
    padding-bottom: 15px;
  }
  @include media(md-lg){
    padding-top: 50px;
    padding-bottom: 40px;
  }
}

.slide-block{
  margin-left: 20px;
  margin-right: 20px;
  @include media(sm){
    margin-left: 5px;
    margin-right: 5px;
  }
  img{
    @include media(sm){
      width: 290px;
      padding: 5px;
    }
    @include media(md){
      width: 600px;
    }
    background-color: #fff;
    border: 1px solid #DDD;
    padding: 10px;
    box-shadow: 0 4px 4px rgba(#000, 0.35);
  }
}

/deep/ .slick-slide{
  outline: none;
}
</style>
