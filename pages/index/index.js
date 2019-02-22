//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab:'1',
    duration:'500',// 动画时长,
    listAry:[]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: app.globalData.server + '/list', // 仅为示例，并非真实的接口地址
      method: 'get',
      success(res) {
        console.log(res.data)
        that.setData({
          listAry:res.data.data
        })
      }
    })
  },
  indexTab(e){
    //切换tab
    var that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    that.setData({
      'currentTab':index
    })
  },
  tabSwiperChange(e){
    //切换内容
    var that = this
    var currentIndex = e.detail.current
    that.setData({
      'currentTab': currentIndex
    })
  },
  onGotUserInfo(e){
    console.log(e.detail.userInfo)
  },
})
