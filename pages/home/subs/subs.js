// pages/sub/subs/subs.js
var app = getApp()
var hander = require('../../../utils/dataHander.js')
Page({
  data: {
    windowHeight: 0,
    items: [],
    order: false,
    modalHidden: true,
    selectSub: '',
    actionSheetHidden: true,
    alterShow: false,
    fallibleShow: false,
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
  start: function (tp) {
    var that = this;
    if (tp == 0) {
      wx.navigateTo({
        url: '../single/single',
      })
    }
  },
  itemtap: function (e) {
    var that = this;
    if (that.data.touchend - that.data.touchstart < 350) {
      var selectSub = e.currentTarget.id;
      app.globalData.selectSub = selectSub;
      var sub = app.globalData.libs[app.globalData.selectLib][selectSub];
      var items = sub['items'];
      var tp = sub['type'];
      var order = new Array(items.length)
      for (var i = 0; i < order.length; i++) {
        order[i] = i;
      }
      //设置items乱序
      if (that.data.order == true) {
        order = hander.outOfOrder(order);
      }
      app.globalData.items = items;
      app.globalData.order = order;
      app.globalData.starMsg = app.globalData.fallible[app.globalData.selectLib][selectSub];
      app.globalData.isFall = false;
      app.globalData.tp = tp;
      that.start(tp);
    }
  },
  
  onLoad: function () {
    this.setData({ windowHeight: app.globalData.windowHeight })
  },
  onShow: function () {
    this.setData({
      items: hander.getSubsName(),
      alterShow: false,
      fallibleShow: false,
    })
  }
})