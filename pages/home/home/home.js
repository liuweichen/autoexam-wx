// pages/Home/home/home.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '/assets/carousel/1.png'
    }, {
      id: 1,
      type: 'image',
        url: '/assets/carousel/2.png',
    }, {
      id: 2,
      type: 'image',
        url: '/assets/carousel/3.png',
    }, {
      id: 3,
      type: 'image',
        url: '/assets/carousel/4.png',
    }],
    elements: [{
      title: '我的题库',
      name: 'Item bank',
      color: 'cyan',
      icon: 'edit',
      url:"/pages/home/libs/libs"
    },
    {
      title: '使用说明',
      name: 'introduce',
      color: 'blue',
      icon: 'add',
      url: "/pages/home/introduce/introduce"
    },
    {
      title: '即将上线',
      name: 'coming',
      color: 'purple',
      icon: 'searchlist',
    },
    {
      title: '即将上线 ',
      name: 'coming',
      color: 'mauve',
      icon: 'discover'
    }]


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
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.cooperation_img // 需要预览的图片http链接列表  
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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