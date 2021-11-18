<template lang="pug">
.equiparea(v-if="gallery.length")
  //- pre {{ gallery }}
  .equip-header
    h3.equip-title Equipment
  .equip-main
    .equip-block(v-for="val, index in gallery" v-on:click="popupOpen(index)"): img(:src="val.sizes.thumbnail" :alt="val.alt")
  transition(name="fade")
    .popup-layer(v-if="trigger" v-on:click.self="popupClose")
      .popup-wrap
        .popup-panel
          .popup-controls
            i.control-close(v-on:click="popupClose")
          .popup-panel__wrap
            h3.popup-title {{ gallery[index].title }}
            .popup-panel__photo: img(:src="gallery[index].url" :alt="gallery[index].alt")
            .popup-panel__contents
              p {{ gallery[index].caption }}
</template>

<style lang="scss" scoped>

$color-primary: #616C48;
$color-secondary: #BDB17F;

.equiparea{
  margin-bottom: 50px;
  @include media(sm){
    margin-bottom: 30px;
  }
}

.equip-header{
  margin-bottom: 10px;
  .equip-title{
    display: flex;
    align-items: center;
    color: $color-secondary;
    font-family: 'Bebas Neue', serif;
    font-size: 30px;
    line-height: 1.2;
    @include media(sm){
      font-size: 22px;
    }
    &:after{
      margin-left: 0.5em;
      width: 100%;
      content: "";
      display: inline-block;
      height: 1px;
      background-color: $color-secondary;
      position: relative;
      top: -2px;
    }
  }
}

.equip-main{
  display: flex;
  flex-wrap: wrap;

  .equip-block{
    width: 20%;
    cursor: pointer;
    padding: 1px;
    aspect-ratio: 1 / 1;
    img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all ease 0.2s 0.1s;
      opacity: 0.9;
    }

    &:hover{
      img{
        opacity: 1;
      }
    }
  }
}

.popup-layer{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(#000, 0.1);
  padding: 15px;
}

.popup-panel{
  background-color: #fff;
  padding: 50px;
  max-width: 800px;
  position: relative;
  @include media(sm){
    padding: 15px;
  }

  img{
    display: block;
    width: 100%;
  }

  .popup-title{
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.1em;
    color: $color-primary;
    border-bottom: 1px solid $color-primary;
    color: #FFF;
    background-color: $color-primary;
    padding-left: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  p{
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 8px;
    @include media(sm){
      font-size: 12px;
    }
  }
}

.control-close{
  display: flex;
  height: 50px;
  width: 50px;
  background-color: $color-primary;
  position: absolute;
  right: 0;
  top: 0;
  background-image: url('~assets/images/common/times-solid-w.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22px;
  cursor: pointer;
  @include media(sm){
    height: 44px;
    width: 44px;
    top: -44px;
    right: 0;
  }
}

.fade-enter-active,.fade-leave-active{ 
  transition: opacity ease 0.3s;
  opacity: 1;
  .popup-panel{
    opacity: 1;
    transition: all ease 0.2s 0.1s;
  }
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  .popup-panel{
    opacity: 0;
    transform: scale(0.9);
  }
}


</style>

<script>

export default {
  props: {
    gallery: {
      type: Array,
      default: [],
      required: true
    }
  },
  data(){
    return {
      trigger: false,
      index: 0
    }
  },
  methods: {
    popupOpen(index){
      this.index = index
      return this.trigger = true
    },
    popupClose(){
      return this.trigger = false
    }
  }
}
</script>
