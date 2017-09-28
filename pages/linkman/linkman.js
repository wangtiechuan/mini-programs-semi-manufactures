//linkman.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pOra:1,
    p_liArr: [
      { 'name': '名字1', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号','company':'你猜公司' }, 
      { 'name': '名字2', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号', 'company': '你猜公司'},
      { 'name': '名字3', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号', 'company': '你猜公司'}],
    a_liArr: [
      { 'name': '名字a', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号', 'company': '你猜公司'},
      { 'name': '名字b', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号', 'company': '你猜公司'},
      { 'name': '名字c', 'phone': '17600407493', 'province': '河北省', 'city': '唐山市', 'area': '乐亭县', 'street': '不知道街道', 'doorplate': '123号', 'company': '你猜公司'}],
    p_tapnow:0,
    a_tapnow:0,
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (data) {
    wx.setNavigationBarTitle({
      title: '地址薄'
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
  nowtapradio:function(e){
    let tapindex = e.target.dataset.index;
    let nowpOra = this.data.pOra;
    let letter = nowpOra ? 'p':'a';

    // 点击显示选中状态
    this.setData({
      [letter+'_tapnow']: tapindex
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
