<template>
  <div id="detailContainer">
    <h1>{{book.title}}</h1>
    <img class="detailImg" :src="book.image" alt="">
    <div class="bookInfo">
      <p>作者: {{book.author}}</p>
      <p>出版社: {{book.publisher}}</p>
      <p>出版日期: {{book.pubdate}}</p>
      <p>定价：{{book.price}}</p>
    </div>
    <button>收藏该文章</button>
    <article>
      <h2>作者简介</h2>
      <p>{{book.author_intro}}</p>
    </article>
    <article>
      <h2>文章简介</h2>
      <p>{{book.summary}}</p>
    </article>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        book: {}
      }
    },
    mounted(){
      this.book = JSON.parse(this.$mp.query.book)
      wx.setNavigationBarTitle({
        title: this.book.title
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #detailContainer
    h1
      font-size 40rpx
      font-weight bold
      text-align center
      line-height 80rpx
    .detailImg
      width 70%
      height 700rpx
      margin-left 15%
    .bookInfo
      padding-left 15%
      font-size 32rpx
    button
      width 280rpx
      height 60rpx
      line-height 60rpx
      font-size 30rpx
    article
      margin-top 40rpx
      h2
        font-size 36rpx
        font-weight bold
        color #02a774
        text-align center
        line-height 80rpx
      p
        font-size 28rpx
        text-indent 28rpx
        padding 0 10%
</style>