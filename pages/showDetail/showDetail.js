// pages/showDetail/showDetail.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH:0,
    navFade:'',
    scrollTop: 0,
    scroll:0,
    windowHeight:0,
    imgHeight: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //保存状态栏和屏幕信息
    this.setData({
      navH: App.globalData.navHeight,
      windowHeight: App.globalData.systemInfo.windowHeight
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
  //监听滚动条
  onScrollView(e){
    var scrollTop = e.detail.scrollTop
    var navHeight = this.data.navH
    var imgHeight = this.data.imgHeight
    if (scrollTop > imgHeight- navHeight ) return false
    //在范围内，添加透明度
    if (imgHeight - navHeight >= scrollTop){
      var opacity = scrollTop / (imgHeight - navHeight)
      this.setData({
        navFade: "rgba(255,255,255," + opacity +")",
        scroll: scrollTop
      })
    }
  },
  moveEnd(){
    var scroll = this.data.scroll
    if (scroll < (this.data.imgHeight - App.globalData.navHeight) / 2 ){
      console.log('scrollTop')
      this.setData({
        scrollTop:0,
        navFade:"rgba(255,255,255,0)"
      })
    }
    if (scroll >= (this.data.imgHeight - App.globalData.navHeight) / 2) {
      this.setData({
        scrollTop: this.data.imgHeight - App.globalData.navHeight,
        navFade: "rgba(255,255,255,1)"
      })
    }
  },
  navBack(){
    wx.navigateBack({
      delta:1
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