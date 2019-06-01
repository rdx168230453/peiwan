// pages/my/receiptSet/repetTime/repetTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { name: 'mon', value: '周一', checked: false},
      { name: 'tues', value: '周二', checked: false},
      { name: 'midweek', value: '周三', checked: false},
      { name: 'thursday', value: '周四', checked: false},
      { name: 'friday', value: '周五', checked: false},
      { name: 'sat', value: '周六', checked: false},
      { name: 'sun', value: '周日', checked: false},
    ],
    values:[]
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
    var that = this;
    wx.getStorage({
      key: 'week',
      success: function (res) {
        var value = res.data
        var items = that.data.items;
        for(var i in value){
          for(var j in items){
            if(value[i] == items[j].name){
                items[j].checked = true
            }
          }
        }
        that.setData({
          items: items
        })
      },
      fail:function(res){
        var items = that.data.items;
        for(var i in items){
          items[i].checked = true
        }
        that.setData({
          items:items
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //checkbox改变值触发
  checkboxChange(e){
    var value = e.detail.value;
    wx.setStorage({
      key: 'week',
      data: value
    })
  },
  saveWeek(){
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