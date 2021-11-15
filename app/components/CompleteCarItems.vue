<template lang="pug">
  .tabarea
    .tab-header
      ul.tab-list
        li.active Jungle Green
        li Ivory
    .tab-main
      .tab-block
        .sliderarea
          slick(ref="slick" :options="slickOptions")
            template(v-for="val in items[0].gallery")
              .tab-photos: img(:src="val" alt="")
        .content
          h2.title-primary コンプリート価格
          .price
            .price-tab
              ul.price-tablist
                li.active JB74
                li JB64
            .price-content
              .price-block
                .total
                  dl.total-dl
                    dt 合計価格
                    dd
                      |￥
                      span.total-num {{ 2628670 | addComma }}
                  table.price-table
                    tbody
                      tr(v-for="val in items[0].parts")
                        td {{ val.name }}
                        td ￥{{ val.price | addComma }}
                  .captiopn
                    p ※車両、工賃等含む<br>※コンプリートデモカーのホイールとタイヤだけはお好きにカスタムできます。お気軽にお問い合わせください。
</template>

<style lang="scss" scoped>

$color-primary: #616C48;
$color-secondary: #BDB17F;

.tab-list{
  display: flex;
  color: $color-primary;
  li{
    margin-right: 10px;
    color: $color-primary;
    background-color: #E4DCBD;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 255px;
    height: 75px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    @include media(sm){
      font-size: 14px;
      height: 44px;
      width: 120px;
    }
    &.active{
      background-color: #fff;
    }
  }
}

.tab-main{
  padding: 50px;
  background-color: #fff;
  @include media(sm){
    padding: 15px;
  }
}

.sliderarea{
  background-color: #F2EFE5;
  overflow: hidden;
  @include media(sm){
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -15px;
    background-color: lighten(#F2EFE5, 5);
    height: auto;
  }
  img{
    height: 490px;
    width: 670px;
    object-fit: contain;
    margin-left: 70px;
    margin-right: 70px;
    @include media(md-lg){
      padding-top: 30px;
      padding-bottom: 30px;
    }
    @include media(sm){
      width: 220px;
      height: 220px;
    }
  }
}

/deep/ {
  .slick-slide{
    outline: none;
  }

  .slick-arrow{
    height: 80px;
    width: 80px;
    z-index: 100;
    background-color: #DBD6C4;
    height: 100%;
    @include media(sm){
      width: 40px;
    }
    &:before{
      opacity: 0;
    }
    &.slick-next{
      right: 0;
      background-image: url('~assets/images/completecar/complete_right.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 20px;
      @include media(sm){
        right: 0;
        background-size: 10px;
      }
    }
    &.slick-prev{
      left: 0;
      background-image: url('~assets/images/completecar/complete_left.svg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 20px;
      @include media(sm){
        left: 0;
        background-size: 10px;
      }
    }
  }
}

.sliderarea{
  margin-bottom: 50px;
  @include media(sm){
    margin-bottom: 30px;
  }
}

.title-primary{
  color: $color-primary;
  font-weight: 700;
  font-size: 24px;
  border: 3px solid $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 255px;
  margin-bottom: 30px;
  @include media(sm){
    width: 160px;
    font-size: 16px;
    height: 40px;
  }
}

.price-tab{
  margin-bottom: 30px;
}

.price-tablist{
  display: flex;
  border-bottom: 1px solid lighten($color-secondary, 20);
  li{
    cursor: pointer;
    display: inline-flex;
    min-width: 190px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #F2EFE5;
    color: $color-primary;
    
    @include media(sm){
      min-width: 120px;
      height: 44px;
    }
    &.active{
      background-color: #DBD6C4;
    }
  }
}

.total-dl{
  background-color: #F9F9F9;
  font-weight: 700;
  color: $color-primary;
  font-size: 30px;
  padding: 8px 20px;
  margin-bottom: 30px;
  @include media(sm){
    font-size: 20px;
    margin-bottom: 20px;
  }
  dt{
    display: inline-block;
  }
  dd{
    display: inline-block;
  }
}

.price-table{
  font-size: 14px;
  width: 100%;
  border-top: 3px solid $color-primary;
  border-bottom: 1px solid $color-primary;
  color: $color-primary;
  @include media(sm){
    font-size: 12px;
  }
  tr{
    background-color: #F2EFE5;
    &:nth-child(even){
      background-color: #FBFBFB;
    }

    th, td{
      padding: 10px 15px;
      @include media(sp){
        padding: 6px 10px;
        display: block;
      }
      &:nth-child(2){
        text-align: right;
      }
    }
  }
}

.captiopn{
  font-size: 12px;
  margin-top: 10px;
  p{
    margin-bottom: 0;
  }
}

</style>

<script>
export default {
  data: function(){
    return {
      curtrent: 1,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        autoplay: false,
        infinite: true,
        controls: true
      },
      items: [
        {
          title: 'Jungle Green',
          gallery: [
            '/completecar/image4.png',
            '/completecar/image1.png'
          ],
          total: 2628670,
          parts: [
            {
              name: '筆記体クラシック2トーン塗装納品スズスポグリル',
              price: 64680
            },
            {
              name: 'JB74オールドスタイルバンバーフォグランプユニット付き',
              price: 65780
            },
            {
              name: 'スチール製マットプラック塗装　クラシックストレートリアパンバーステップ付き',
              price: 60280
            },
            {
              name: 'タイヤTOYOオーブンカントリーMT225/7SR1×4',
              price: 72600
            },
            {
              name: 'jb74ホイール　ディーン　16インチ6J-SPCD139.4',
              price: 104720
            },
            {
              name: 'JB74専用1インチリフトアップキットコイルリアショック延長　プラケットリア用ロングプレーキホース付き',
              price: 42900
            },
            {
              name: 'その他シートカバーアウトクラスカーズ',
              price: 27500
            },
            {
              name: 'スベアタイヤカバー',
              price: 8800
            },
            {
              name: 'ナンバープレート移動キットLEDナンパー灯付き',
              price: 15180
            },
            {
              name: 'JB74 SZIGENマフラーショートバンバー用',
              price: 84150
            },
            {
              name: 'スベアタイヤ移動プラケットキット',
              price: 19580
            },
            {
              name: 'ラプターカラー塗装リア上部、リア側面上部',
              price: 187000
            },
            {
              name: '工賃JB741インチリフトアッブ',
              price: 38500
            },
            {
              name: 'JB74新車車両価格',
              price: 1793000
            }
          ]
        },
        {
          title: 'Ivory',
          gallery: [
            'image4.png',
            'image4.png'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>