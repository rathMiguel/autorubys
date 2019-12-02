<template lang="pug">
.gallery
  .gallery__main
    .gallery-block.gallery-block__full
      .gallery-block__photo.photo1
    .gallery-block
      .gallery-block__photo.photo2
    .gallery-block
      .gallery-block__content
        .gallery-block__content-in
          h3.title.title-lg セールスポイント1
          p 詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります
    .gallery-block
      .gallery-block__photo.photo3
    .gallery-block
      .gallery-block__content
        .gallery-block__content-in
          h3.title.title-lg セールスポイント2
          p 詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります
    .gallery-block
      .gallery-block__photo.photo4
    .gallery-block
      .gallery-block__content
        .gallery-block__content-in
          h3.title.title-lg セールスポイント3
          p 詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります詳細が入ります
</template>

<style lang="scss" scoped>
.gallery{
  &__main{
    display: flex;
    flex-wrap: wrap;
    @include media(sm){
      flex-direction: column;
    }
  }
}

.gallery-block{
  @include media(md-lg){
    width: 50%;
  }
  &__full{
    width: 100%;
  }
  &__photo{
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
  }
  &__content{
    @include media(md-lg){
      height: 400px;
      display: flex;
      align-items: center;
    }
    &-in{
      padding: 10px;
      @include media(md-lg){
        padding: 30px;
      }
    }
  }

  &:nth-child(4){
    @include media(md-lg){
      order: 3;
    }
  }

  &:nth-child(7){
    @include media(md-lg){
      order: 6;
    }
  }
}

.title{
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  @include media(sm){
    font-size: 20px;
  }
}

.photo1{
  background-image: url('~assets/images/suzuspo/gallery_photo1.jpg');
  background-position: center bottom;
}

.photo2{
  background-image: url('~assets/images/suzuspo/gallery_photo2.jpg');
  background-position: center center;
}

.photo3{
  background-image: url('~assets/images/suzuspo/gallery_photo2.jpg');
  background-position: center center;
}

.photo4{
  background-image: url('~assets/images/suzuspo/gallery_photo2.jpg');
  background-position: center center;
}

</style>
