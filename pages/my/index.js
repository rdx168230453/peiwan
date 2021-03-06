// pages/my/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  //跳转全部技能
  toSkill(){
    wx.navigateTo({
      url:'skill/skill'
    })
  },
  //跳转接单设置
  toSetting(){
    wx.navigateTo({
      url: 'receiptSet/receiptSet',
    })
  },
  //用户授权
  bindGetUserInfo(e){
    console.log(e.detail.userInfo)
    var userInfo = e.detail.userInfo
    userInfo.openid = app.globalData.openid
    userInfo.session_key = app.globalData.session_key
    //上传用户资料
    console.log(userInfo)
    wx.request({
      url: app.globalData.server + 'saveInfo',
      method: 'post',
      data: userInfo,
      success(res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})