// pages/my/receiptSet/receiptSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit:'',
    showModel:true,
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
  cofirmUnit(e){
    var query = wx.createSelectorQuery();
    query.select('.unitPriceModel').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height;
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      animation.bottom(-height -1).opacity(0).step()
      const animationDilog = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      animationDilog.opacity(0).step();
      this.setData({
        animationData: animation.export(),
        animationDilog: animationDilog
      })
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