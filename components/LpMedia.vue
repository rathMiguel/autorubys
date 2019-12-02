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
    margin-top: 20px;
    margin-bottom: 20px;
    width: 240px;
  }
}

</style>
