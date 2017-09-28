//acceptexpress.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuanimate: {},
    
    date1: '2016-09-01',
    date2: '2016-09-01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '收快递'
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

  },
  showmenu: function (e) {

    // 动画
    let animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    this.menuanimate = animation;
    let steplength = 0;
    if (this.menutap) {
      steplength = '-140rpx';
    } else {
      steplength = '0';
    }
    this.menutap = !(this.menutap);
    animation.bottom(steplength).step()

    this.setData({
      menuanimate: animation.export()
    })
  }, 

  bindDateBegin: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateAfter: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  // 查单
  tosearchorder: function () {
    wx.redirectTo({
      url: '../searchorder/searchorder'
    })
  },
  // 发快递
  topostexpress: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  // 账户中心
  toaccount: function () {
    wx.redirectTo({
      url: '../account/account'
    })
  },
  // 收快递
  toacceptexpress: function () {
    wx.redirectTo({
      url: '../acceptexpress/acceptexpress'
    })
  },


})
