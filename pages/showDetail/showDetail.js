// pages/showDetail/showDetail.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH:'',
    navFade:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight,
      imgHeight:''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var query = wx.createSelectorQuery();
    query.select('.personShow').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height;
      this.setData({
        imgHeight:height
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onPageScroll: function (e) {
    //如果滚动不在范围内，return
    if (e.scrollTop > this.data.imgHeight - App.globalData.navHeight) return false
    //在范围内，添加透明度
    if (this.data.imgHeight - App.globalData.navHeight >= e.scrollTop){
      var opacity = Math.floor(e.scrollTop / (this.data.imgHeight - App.globalData.navHeight) * 100) / 100
      this.setData({
        navFade: "rgba(255,255,255," + opacity +")"
      })
    }
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