<template>
  <div id="booksContainer">
    <swiper indicator-dots indicator-color="green" indicator-active-color="deeppink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
    </swiper>
    <div class="books">
      <div class="books_head">
        <span>全部商品</span>
        <span class="more"> > </span>
      </div>
      <ul class="books_list">
        <li v-for="(book, index) in booksList" :key="index">
          <img :src="book.image" alt="">
          <p>《{{book.title}}》</p>
          <p>{{book.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import booksList from './datas/data.json'
  console.log(booksList, typeof booksList);
  export default {
    data(){
      return {
        booksList
      }
    },
    mounted(){
      setTimeout(() => {
        this.booksList = booksList
      }, 100)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    width 100%;

    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 400rpx
    .books
      .books_head
        padding 10rpx
        .more
          float right
          width 80rpx
          text-align right
          color #02a774


      .books_list
        display flex
        flex-wrap wrap
        li
          width 50%
          display flex
          flex-direction column
          align-items center
          padding 10rpx
          box-sizing border-box
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
          p
            font-size 32rpx
            line-height 60rpx

</style>