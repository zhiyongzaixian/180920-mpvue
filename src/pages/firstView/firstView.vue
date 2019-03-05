<template>
  <div id="firstViewContainer">
    <swiper @change="handleChange" :indicator-dots="index < 3" indicator-color="green" indicator-active-color="deeppink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toBooks" v-if="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0
      }
    },
    methods: {
      handleChange(event){
        this.index = event.mp.detail.current
      },
      toBooks(){
        // 跳转页面
        wx.navigateTo({
          url: '/pages/books/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #firstViewContainer
    height 100%
    width 100%
    swiper
      height 100%
      width 100%
      img
        height 100%
        width 100%
    button
      position absolute
      bottom 40rpx
      left 50%
      margin-left -140rpx
      width 280rpx
      height 60rpx
      border-radius 10rpx
      line-height 60rpx
      text-align center
      background rgba(255,255,255, .7)

</style>