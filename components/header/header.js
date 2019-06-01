// component/hyalineHead/hyalineHead.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleText:{
      type:String,
      value:''
    },
    backBtn:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navH: app.globalData.navHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navBack(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})
