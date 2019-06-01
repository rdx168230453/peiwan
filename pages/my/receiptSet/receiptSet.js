// pages/my/receiptSet/receiptSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit:'',
    showModel:false,
    classAry:['英雄联盟','王者荣耀'],
    classIndex:1,
    timeAry:[],
    multiArray:[['至'],],
    multiIndex:[0,0,24],
    items: [
      { name: 'mon', value: '周一', checked: false },
      { name: 'tues', value: '周二', checked: false },
      { name: 'midweek', value: '周三', checked: false },
      { name: 'thursday', value: '周四', checked: false },
      { name: 'friday', value: '周五', checked: false },
      { name: 'sat', value: '周六', checked: false },
      { name: 'sun', value: '周日', checked: false },
    ],
    dispatch:false,//抢单默认
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //给多列赋值时间
    var multiArray = this.data.multiArray
    var ary = []
    for (var i = 0; i <= 24; i++) {
      var num = String(i)
      if (i < 10) {
        num = '0' + i;
      }
      ary.push(num)
    }
    multiArray.unshift(ary)
    multiArray.push(ary)
    this.setData({
      multiArray: multiArray
    })
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
    var that = this;
      wx.getStorage({
        key: 'week',
        success: function (res) {
          var value = res.data
          var items = that.data.items;
          for (var i in value) {
            for (var j in items) {
              if (value[i] == items[j].name) {
                items[j].checked = true
              }
            }
          }
          that.setData({
            items: items
          })
        },
        fail: function (res) {
          var items = that.data.items;
          for (var i in items) {
            items[i].checked = true
          }
          that.setData({
            items: items
          })
        }
      })
  },
  //品类switch
  //抢单switch
  switchDispatch(e){
    console.log(e.detail)
    this.setData({
      dispatch:e.detail.value
    })
  },
  //选择单价
  pickUnit(){
    const dialogCtn = wx.createAnimation({
      duration: 200,
      timingFunction:'ease'
    })
    dialogCtn.bottom(0).step()
    this.setData({
      showModel: true,
      dialogCtn: dialogCtn.export()
    })
  },
  //确认单价
  cofirmUnit(e){
    //获取到dialog的高度，赋值给动画
    var query = wx.createSelectorQuery();
    query.select('.unitPriceModel').boundingClientRect()
    query.exec((res) => {
      var height = res[0].height;
      const dialogCtn = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      dialogCtn.bottom(-height).step()
      this.setData({
        showModel: false,
        dialogCtn: dialogCtn.export()
      })
    })
  }, 
  //主街品类
  bindPickerChange(e){
    this.setData({
      classIndex: e.detail.value
    })
  },
  //时间选择
  bindMultiPickerChange(e){
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //重复时间设置
  bindRepetSet(){
    wx.navigateTo({
      url: 'repetTime/repetTime',
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