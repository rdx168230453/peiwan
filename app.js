//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    //获取手机高度
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
        this.globalData.systemInfo = res
      }
    })
    var that = this
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          method:'post',
          url: that.globalData.server + 'login',
          data:{
            code:res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res){
            that.globalData.openid = res.data.openid
            that.globalData.session_key = res.data.session3rd
          },
          fail(err){
            console.log(err)
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid:'',
    session_key:'',
    appId:'wx1d21ec5801a949a9',
    secret:'0120cfe4a748562dcfcc30579283a7e3',
    server:'http://127.0.0.1:5051/app/',
    navHeight:0,
    systemInfo:{},
  }
})