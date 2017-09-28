//linkman.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pOra:1,
    callsexarray: ['先生', '女士'],
    callsexindex: 0,

    region: ['北京市', '北京市', '全部'],
    customItem: '全部',
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (data) {
    wx.setNavigationBarTitle({
      title: '新建联系人'
    })

    // 页面传递的参数，寄还是收
    this.setData({
      pOra: data.postOraccept
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
  tabtype:function(e){
    this.setData({
      pOra: 1 * e.target.dataset.type
    })
  },
  f_name: function (e) {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      [data_key + '_name']: e.detail.value
    })
  },
  f_phone: function (e) {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      [data_key + '_' + 'phone']: e.detail.value
    })
  },
  f_company: function (e) {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      [data_key + '_' + 'company']: e.detail.value
    })
  },
  f_street: function (e) {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      [data_key + '_' + 'street']: e.detail.value
    })
  },
  f_doorplate: function (e) {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      [data_key + '_' + 'doorplate']: e.detail.value
    })
  },
  bindPickerChange_callsex: function (e) {
    let index = e.detail.value;
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    let sex = this.data.callsexarray[index]
    this.setData({
      callsexindex: index,
      [data_key + '_' + 'sex']: sex
    })

  },
  bindRegionChange: function (e) {
    let val = e.detail.value;
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';
    this.setData({
      region: e.detail.value,
      [data_key + '_' + 'province']: val[0],
      [data_key + '_' + 'city']: val[1],
      [data_key + '_' + 'area']: val[2]
    })
  },
  // 查单
	tosearchorder:function(){
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
