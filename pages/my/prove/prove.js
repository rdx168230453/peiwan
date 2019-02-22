// pages/my/prove/prove.js
const getRecorderManager = wx.getRecorderManager()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankAry: ['请选择', '王者', '宗师', '大师', '钻石', '白金'],
    imageSrc:[],
    voiceData:'',
    rankVal:'',
    index:0,
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
  bindPickerChange(e){
    console.log(e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  transferImgs(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          imageSrc:tempFilePaths
        })
        console.log(that.data.imageSrc)
      },
      fail(res){

      }
    })
  },
  preview(){
    const images = this.data.imageSrc
    wx.previewImage({
      current: images[0],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  gitvoice(){
    var that = this;
    getRecorderManager.start({
      duration: 5000,
    })
    getRecorderManager.onStop(function(res){
      console.log(res.tempFilePath)
      const tempFilePath = res.tempFilePath
      that.setData({
        voiceData: tempFilePath
      })
    })
  },
  sublimtData(){
    //提交资料
    var that = this;
    console.log(that.data.imageSrc[0])
    wx.request({
      url: app.globalData.server + '/skillSubmit', // 仅为示例，并非真实的接口地址
      method:'post',
      data: {
        id:'10000004',
        type:'0',
        ranking:'白金',
        skillimg: that.data.imageSrc[0],
        voiceintro:'http://voice',
        textintro:'textIntor!!!',
      },
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