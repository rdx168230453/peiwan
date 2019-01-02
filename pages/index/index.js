//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab:'1',
    duration:'500',// 动画时长
  },
  onLoad: function () {
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
