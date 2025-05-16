// pages/lib/libs/libs.js
var app = getApp()
var hander = require('../../../utils/dataHander.js')
Page({
  data: {
    windowHeight: 0,
    items: [],
    modalHidden: true,
    selectLib: '',
    actionSheetHidden: true,
    alterShow: false,
    name: '',
    touchstart: null,
    touchend: null
  },
  touchstart: function (e) {
    this.setData({ touchstart: e.timeStamp })
  },
  touchend: function (e) {
    this.setData({ touchend: e.timeStamp })
  },
  itemtap: function (e) {
    var that = this;
    if (that.data.touchend - that.data.touchstart < 350) {
      app.globalData.selectLib = e.currentTarget.id;
      wx.navigateTo({
        url: '../subs/subs',
      })
    }
  },
  onShow: function () {
    this.setData({
      items: hander.getLibsName(),
      alterShow: false,
    })
    console.log("lins...showing")
  }
})