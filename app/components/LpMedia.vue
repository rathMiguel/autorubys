<template lang="pug">
.media
  .section-header
    h2.title.section-title メディア掲載
    span.section-title__en Media
  .container
    .gallery-media
      .gallery-media__block
        .gallery-media__photo: img(src="~assets/images/suzuspo/media_photo1.jpg")
        .gallery-media__caption
          p ジムニースタイル 01
      .gallery-media__block
        .gallery-media__photo: img(src="~assets/images/suzuspo/media_photo2.jpg")
        .gallery-media__caption
          p ジムニー天国2020
</template>

<style lang="scss" scoped>
.media{
  background-color: lighten(#7DA1CE, 30);
  padding-top: 80px;
  padding-bottom: 80px;
  @include media(sm){
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.gallery-media{
  display: flex;
  justify-content: center;
  &__block{
    margin-bottom: 20px;
    width: 240px;
    margin-bottom: 20px;
    @include media(sm){
      padding-left: 5px;
      padding-right: 5px;
    }
    @include media(md-lg){
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}

</style>
