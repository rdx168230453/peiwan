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
  //选择单价
  pickUnit(){
    var query = wx.createSelectorQuery();
    query.select('.unitPriceModel').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height;
      
      const dialogBg = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      dialogBg.top(0).step();
      dialogBg.opacity(1).step();
      const dialogCtn = wx.createAnimation({
        delay:200,
        duration: 500,
        timingFunction: 'ease',
      })
      dialogCtn.bottom(0).opacity(1).step()
      this.setData({
        dialogBg: dialogBg.export(),
        dialogCtn: dialogCtn.export()
      })
    })
  },
  //确认单价
  cofirmUnit(e){
    var query = wx.createSelectorQuery();
    query.select('.unitPriceModel').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height;
      const dialogCtn = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      dialogCtn.bottom(-height -1).opacity(0).step()
      const dialogBg= wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      dialogBg.opacity(0).step();
      dialogBg.top('100%').step();
      this.setData({
        dialogBg: dialogBg.export(),
        dialogCtn: dialogCtn.export()
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