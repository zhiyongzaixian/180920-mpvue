<script>
  import request from './utils/request'
  export default {
    mounted(){
      wx.login({
        success: async (res) => {
          let code = res.code
          let result = await request('/getOpenId', {code})
          // 缓存openId到storage中
          wx.setStorage({
            key: 'openId',
            data: result
          })
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    height 100%
    width 100%
</style>