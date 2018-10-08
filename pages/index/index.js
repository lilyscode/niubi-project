// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _canvas: {
      w: 100,
      h: 100
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    this.setCanvasWH();
    
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
  /**
   * @name getUserInfo
   * @description Get user Authorization, 1.uer authorization, 2.save to system album
   */
  getUserInfo () {
    // Gets the user's current settings.
    // Only the permissions that the applet has requested from the user will appear in the return value.
    wx.getSetting({
      success: (authSetting)=>{

        // get user info authorization
        if (!!!authSetting.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials: 'true',
            lang: 'zh_CN',
            timeout:10000,
            success: (result)=>{
              console.log(' get user information success:', result);
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        }
        // get save to system album authorization 
        if (!!!authSetting.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: (res)=>{
              console.log(res);
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        }
        console.log(authSetting);
        console.log('get user infomation authorization', authSetting.authSetting['scope.userInfo']);
        console.log('get user infomation authorization', authSetting.authSetting['scope.writePhotosAlbum'] || false);
      },
      fail: ()=>{
        console.log("getSetting error");
      },
      complete: ()=>{
        console.log("getSetting completed");
      }
    });
  },
  /**
   * @name setCanvasWH
   * @description get system infomation
   * 
   */
  setCanvasWH () {
    wx.getSystemInfo({
      success: (result)=>{
        console.log(result);
        // set the inner canvas height and width
        this.setData({
          _canvas: {
            w: result.windowWidth,
            h: result.windowHeight
          }
        });
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})