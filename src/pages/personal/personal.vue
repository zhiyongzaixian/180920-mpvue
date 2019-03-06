<template>
  <div id="personalContainer">
    <div class="userInfo">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button @getuserinfo="handleGetUserInfo" open-type="getUserInfo" v-if="!userInfo.nickName">登录</button>
      <button v-else>{{userInfo.nickName}}</button>
    </div>
    <div class="list">
      <div class="card" @click="handleScanCode">
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
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
      // 获取用户信息, 在用户授权之后才能成功获取用户数据
      wx.getUserInfo({
        success: (res) => {
          console.log(res);
          this.userInfo = res.userInfo
        },
        fail: () => {
          console.log('获取失败');
        }
      })
    },
    methods: {
      handleGetUserInfo(res){
        // 用户点击的是允许
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      },
      handleScanCode(){
        wx.navigateTo({
          url: '/pages/scan/main'
        })
      }
    }
  }
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