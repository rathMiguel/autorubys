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
          h3.title.title-lg ジムニーは、グリルひとつで<br>激変する
          p 黒単色ならスポーティに、塗り分ければレトロ風味の愛らしさに。あなたのジムニーがスズスポグリル一つで個性的なスタイルに生まれ変わります。
    .gallery-block
      .gallery-block__photo.photo3
    .gallery-block
      .gallery-block__content
        .gallery-block__content-in
          h3.title.title-lg 簡単装着
          p フェンダーやバンパーなど取付に合わせて変更する必要なし！<br>純正のウィンカーを純正グリル側に移植してはめ込むだけで取付できます。
          p 弊社で取付を承っていますので、
             nuxt-link(v-scroll-to="'#form'" to) お気軽にお問い合わせください。
          p: nuxt-link(v-scroll-to="'#howto'" to) 取付方法はこちら
    .gallery-block
      .gallery-block__photo.photo4
    .gallery-block
      .gallery-block__content
        .gallery-block__content-in
          h3.title.title-lg ジムニーを愛するお店が<br>作りました
          p オートルビーズは鳥取県"唯一"のジムニーカスタムメーカー＆ショップです。<br>ジムニーが大好きなお店だからこそのこだわりを体感してください。
</template>

<style lang="scss" scoped>
.gallery{
  border-bottom: 1px solid #CCC;
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
    @include media(sm){
      height: 200px;
    }
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

  &:nth-child(1){
    @include media(md-lg){
      order: 0;
    }
  }

  &:nth-child(2){
    @include media(md-lg){
      order: 3;
    }
  }

  &:nth-child(3){
    @include media(md-lg){
      order: 2;
    }
  }

  &:nth-child(4){
    @include media(md-lg){
      order: 4;
    }
  }

  &:nth-child(5){
    @include media(md-lg){
      order: 5;
    }
  }

  &:nth-child(6){
    @include media(md-lg){
      order: 7;
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
  line-height: 1.3;
  margin-bottom: 15px;
  @include media(sm){
    font-size: 24px;
    margin-bottom: 10px;
  }
}

.photo1{
  background-image: url('~assets/images/suzuspo/19307.jpg');
  background-position: center center;
  background-size: cover;
  @include media(lg){
    background-attachment: fixed;
  }
}

.photo2{
  background-image: url('~assets/images/suzuspo/gallery_photo2.jpg');
  background-position: center center;
}

.photo3{
  background-image: url('~assets/images/suzuspo/gallery_photo3.jpg');
  background-position: center center;
}

.photo4{
  background-image: url('~assets/images/suzuspo/gallery_photo4.jpg');
  background-position: center center;
}

</style>
