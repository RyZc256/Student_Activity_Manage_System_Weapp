// app.js
var config = require('./config/config.js');
var token = require('./js/token.js');

App({
  onLaunch() {
    wx.request({
      url: config.host + '/authority/accesstoken?refresh_token=' + config.refresh_token,
      method: 'POST',
      success: (result) => {
          config.access_token = result.data.data
          wx.request({
            url: config.host + '/user/info/get',
            method: 'POST',
            header: { 'token': result.data.data},
            success: (res) => {
              console.log(res.data.data)
              this.globalData.userInfo = res.data.data
            }
          })
      }
    })
    // wx.getSystemInfo({
    //   success: res => {
    //   　　this.globalData.bottomHeight = res.screenHeight - res.safeArea.bottom;
    //   },
    //   fail(err) {
    //   　console.log(err);
    //   }
    // })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('config', config)

    // 微信小程序登录接口
    // wx.login({
    //   success: res => {
    //     console.log(config.host + '/authority/login?code=' + res.code)
        // wx.request({
        //   url: config.host + '/authority/login?code=' + res.code,
        //   method: 'POST',
        //   success: (result) => {
        //     // 获取REFRESH_TOKEN
        //     if(result.data.code == 200){
        //       config.refresh_token = result.data.data
        //     }else{
        //       wx.showToast({
        //         title: 'Token 失效',
        //         icon: 'error',
        //         duration: 2000,
        //       })
        //     }
        //   }
        // })
    //   }
    // })
    console.log(this.globalData.userInfo)
  },
  globalData: {
    userInfo: [],
    bottomHeight: 0,
  }
})
