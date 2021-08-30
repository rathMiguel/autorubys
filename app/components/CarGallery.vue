<template lang="pug">
div
  .car-gallery
    - let i = 1;
    while i <= 10
      .car-gallery__block(v-on:click="popupOpen(index)"): img(src="http://placehold.jp/16/b3b3b3/000000/200x200.png?text=%E3%83%91%E3%83%BC%E3%83%84%E5%86%99%E7%9C%9F%0A" alt="")
      - i++
  .popup-layer(v-if="trigger" v-on:click="popupClose()")
    .popup-wrap
      .popup-panel
        .popup-controls
          i.control-close(v-on:click="popupClose")
          //- i.control-left(v-on:click="popupNumberDecrement" v-if="number > 0")
          //- i.control-right(v-on:click="popupNumberIncrement" v-if="number < 8")
        .popup-panel__wrap
          .popup-panel__photo: img(src="http://placehold.jp/16/b3b3b3/000000/400x200.png?text=%E3%83%91%E3%83%BC%E3%83%84%E5%86%99%E7%9C%9F%0A" alt="")
          .popup-panel__contents
            h3.popup-panel__title パーツ名
            p こちらに簡単な説明、アピールポイントが入ります。
</template>

<script>
export default {
  data() {
    return {
      trigger: false
    }
  },
  mounted(){

  },
  methods: {
    popupOpen(index){
      // this.number = index
      return this.trigger = true
    },
    popupClose(){
      return this.trigger = false
    },
  }
}
</script>

<style lang="scss" scoped>
.car-gallery{
  display: flex;
  flex-wrap: wrap;

  &__block{
    border: 1px solid #FFF;
    box-sizing: border-box;
    width: 20%;
    cursor: pointer;
  }

  img{
    vertical-align: middle;
  }
}


.popup-layer{
  position: fixed;
  z-index: 1010;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(#000, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.popup-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  @include media(md-lg){
    padding: 15px;
  }
}

.popup-panel{
  background-color: #fff;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  font-size: 16px;
  position: relative;
  z-index: 10;
  border: 4px solid $color-secondary;
  cursor: default;
  @include media(sm){
    font-size: 13px;
  }

  &__wrap{
    overflow: auto;
    height: 80vh;
    padding: 10px;
  }

  &__photo{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 10px;
    text-align: center;
  }

  &__footer{
    text-align: right;
  }

  &__title{
    font-weight: 700;
    font-size: 1.2em;
    border-bottom: 1px solid #CCC;
    margin-bottom: 1em;
  }


}

</style>
