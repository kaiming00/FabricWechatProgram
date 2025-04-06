// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dversion:"2",
    textPassword:"ass",
    dcreatetime:"2022/10/5 20:16:02",
    dupdatetime:"2022/10/7 08:17:35",
    dsign:"Ed25519VerificationKey2018",
    dpkmain:"3pGfBKpv8dAsJF6f82SWGq7cfaA1cmuUQGwQWYD1anQcaMm5GTR8F87xejjRFuiiMukrcQzqAkB4ik4S5k7oobw2",
    dpkbak:"64Axy7TZr9dcHkN3XZaWGwLH2Jjcep3qr4oufKv117vEszzpL6zVGScmZJy4ZsAsyDFTz6dznHaRnVA1npSnoodY",

    show:false,
    hide:true,
    ps: 'password',
  },

  show(){
    this.setData({
      show: false,
      hide: true,
      ps: 'password',
    }) 
  },
  hide(){
    this.setData({
      show: true,
      hide: false,
      ps: 'text',
    }) 
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