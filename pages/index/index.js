//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuanimate: {},
    coverpageanimate: {},

    goodstypearray: ['文件资料', '数码电器产品', '书籍文件刊物', '办公文化用品', '服装箱包鞋帽', '化妆美容用品', '食品及保健品', '贵重珠宝首饰', '陶瓷玻璃制品', '专用运动器械', '危险品'],
    goodstypeindex: 0,

    paypersonarray: ['发件人支付', '收件人支付'],
    paypersonindex: 0,

    callsexarray: ['先生', '女士'],
    callsexindex: 0,

    region: ['北京市', '北京市', '全部'],
    customItem: '全部',

    postOraccept: 1,

    p_name: '发到名字',
    p_sex: '先生',
    p_phone: '17600407493',
    p_province: '北京市',
    p_city: '北京市',
    p_area: '西城区',
    p_street: '德外大街',
    p_doorplate: '999',
    p_company: '阿里菜鸟',

    a_name: '收到名字',
    a_sex: '女士',
    a_phone: '17600407490',
    a_province: '浙江省',
    a_city: '杭州市',
    a_area: '西湖区',
    a_street: '良睦路',
    a_doorplate: '8888',
    a_company: '博彦科技',

    goods_weight: 1,
    goods_msg: {
      l: '20',
      w: '30',
      h: '10'
    },
    goods_des: '物品描述'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '下单'
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
  showcoverpage: function (e) {

    if (e) {
      let taptype = e.currentTarget.id;
      if (taptype === 'post_box') {
        this.setData({
          postOraccept: 1
        })
      } else if (taptype === 'accept_box') {
        this.setData({
          postOraccept: 0
        })
      }

      this.nsync_data();
    }


    // 动画
    let animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })

    let steplength = 0;
    if (this.coverpagetap) {
      steplength = '100vh';
    } else {
      steplength = '0';
    }
    this.coverpagetap = !!!(this.coverpagetap);
    animation.top(steplength).step()

    this.setData({
      coverpageanimate: animation.export()
    })


  },
  closecoverpage: function () {
    this.showcoverpage();
  },
  i_weight: function (e) {
    this.setData({
      goods_weight: e.detail.value
    })
  },
  i_g_l: function (e) {
    this.data.goods_msg.l = e.detail.value;
  },
  i_g_w: function (e) {
    this.data.goods_msg.w = e.detail.value;
  },
  i_g_h: function (e) {
    this.data.goods_msg.h = e.detail.value;
  },
  g_des: function (e) {
    this.setData({
      goods_des: e.detail.value
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
  nsync_data: function () {
    let post_accept = this.data.postOraccept;
    let data_key = post_accept ? 'p' : 'a';

    if (this.data[data_key + '_' + 'sex'] === '先生') {
      this.setData({
        callsexindex: 0
      })
    } else {
      this.setData({
        callsexindex: 1
      })
    }

    let p = this.data[data_key + '_' + 'province'];
    let c = this.data[data_key + '_' + 'city'];
    let a = this.data[data_key + '_' + 'area'];

    this.setData({
      region: [p, c, a]
    })
  },

  submit: function () {
    let r = this.data;
    console.log(r);
    
    const requestTask = wx.request({
      url: 'http://www.5a56.com/index/wxindex/dealorder',
      data: {
        sendproid: 1,        
        sendcityid: 1,        
        sendzoneid: 1,
        sendproname: r.p_province,
        sendcityname: r.p_city,
        sendzonename: r.p_area,
        sendstr: r.p_street,
        sendaddress: r.p_doorplate,
        
        receproid: 1,
        rececityid: 1,
        recezoneid: 1,
        receproname: r.a_province,
        rececityname: r.a_city,
        recezonename: r.a_area,        
        recestr: r.a_street,
        receaddress: r.a_doorplate,

        serviceTypeID: r.goodstypeindex,
        fromthings: r.goodstypearray[r.goodstypeindex],
        weight: r.goods_weight,
        length: r.goods_msg.l,
        width: r.goods_msg.w,
        height: r.goods_msg.h,
        distance: 200,

        sendname: r.p_name,
        sendtelphone: r.p_phone,
        sendcompany: r.p_company,

        recename: r.a_name,
        recetelphone: r.a_phone,
        rececompany: r.a_company,

        describename: r.goods_des,
        sendsex: r.p_sex,
        recesex: r.a_sex,
        ifgetpay: r.paypersonarray[r.paypersonindex]

      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: '成功返回数据了',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '请求失败了',
          icon: 'fail',
          duration: 2000
        })
      }
    })

    // 取消请求任务
    // requestTask.abort() 
  },

  bindPickerChange_goodstype: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goodstypeindex: e.detail.value
    })
  },
  bindPickerChange_payperson: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      paypersonindex: e.detail.value
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
  // 常用联系人
  tolinkman: function () {
    wx.redirectTo({
      url: '../linkman/linkman'
    })
  },


})
