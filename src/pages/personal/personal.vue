<template>
  <div id="personalContainer">
    <div class="userInfo">
      <img src="/static/imgs/firstView/1.jpg" alt="">
      <button>登录</button>
    </div>
    <div class="list">
      <div class="card">
        <span>扫码看书</span>
        <span class="more">more ></span>
      </div>
      <div class="card">
        <span>我的收藏</span>
        <span class="more">more ></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .userInfo
      background #02a774
      padding 40rpx 0
      img
        width 100rpx
        height 100rpx
        border-radius 50rpx
        vertical-align middle
        margin 0 30rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        font-size 32rpx
        background rgba(255,255,255, .8)
        vertical-align middle
    .list
      .card
        width 94%
        margin auto
        border 1rpx solid #eeeeee
        border-radius 10rpx
        padding 20rpx 10rpx
        margin-top 20rpx
        font-size 34rpx
        .more
          float right
</style>