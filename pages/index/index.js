//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '育儿智慧',
    motto1: '当国内很多父母都在抱怨中国教育制度糟糕，一门心思要把孩子送出国时，有这样一个父亲分享自己独特的教子智慧，他对于出国教育、叛逆期教育、高中和大学教育的看法与心得，相信对很多人有启发。',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
