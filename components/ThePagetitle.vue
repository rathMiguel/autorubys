<template lang="pug">
.pagetitle
  .pagetitle_wrap
    h1.title {{ title }}
    span.title-en {{ title_en }}
</template>

<script>
export default {
  props: ['title', 'title_en']
}
</script>

<style lang="scss" scoped>
.pagetitle{
  background-image: url('~assets/images/common/pagetitle_bg.jpg');
  background-size: cover;
  position: relative;
  color: #FFF;
  &:before{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 2px;
    background-image: url('~assets/images/common/ami_black.png');
    background-color: rgba(#000, 0.6);
  }
  &_wrap{
    height: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title{
    font-weight: 700;
    font-size: 2em;
    letter-spacing: 0.4em;
  }

  .title-en{
    display: block;
    font-size: 0.8em;
    position: relative;
    padding-top: 10px;
    margin-top: 10px;
    color: #CCC;
    &:before{
      display: block;
      content: "";
      border-top: 1px solid #CCC;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -(50px / 2);
      width: 50px;
    }
  }
}
</style>
