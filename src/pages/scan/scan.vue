<template>
  <div>
    <button @click="toScan">扫码看书</button>
  </div>
</template>

<script>
  import request from '../../utils/request'
  export default {
    methods: {
      toScan(){
        wx.scanCode({
          success: async (res) => {
            let scanCode = res.result
            // 将isbn码发送给服务器获取详细信息
            let result = await request('/scanCode', {scanCode})
            // console.log(result.data, typeof result);
            wx.navigateTo({
              url: '/pages/detail/main?book=' + JSON.stringify(result.data)
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>