var config = require("../../config/config");
var token = require('../../js/token.js');
var app = getApp();
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';

// pages/mine/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tip: 0,
    active: 2,
    // 标签栏图标
    tabbar_icon: {
      scan: '../../static/images/icon/scan.png',
      index: '../../static/images/icon/index.png',
      indexfill: '../../static/images/icon/index-fill.png',
      mine: '../../static/images/icon/mine.png',
      minefill: '../../static/images/icon/mine-fill.png'
    },
    userInfo: [],
    adminInfo: [],
    classcount: 1,
    isAdmin: false,
    isUser: true,
    avatarUrl: config.host + "/user/avatar/"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var role = app.globalData.userInfo.role
    console.log(role == "user")
    if (role == "user"){
      this.setData({
        userInfo: app.globalData.userInfo,
        classcount: app.globalData.userInfo.class.length,
        isAdmin: false,
        isUser: true
      })
    }else{
      this.setData({
        userInfo: app.globalData.userInfo,
        classcount: app.globalData.userInfo.class.length,
        isAdmin: true,
        isUser: false
      })
    }
  },

  /**
   * 绑定微信
   */
  bindwx(){
    if(this.data.userInfo.wechat != "已绑定"){
      wx.navigateTo({
        url: '/pages/authority/bindwx/index',
      })
    }else{
      Dialog.alert({
        title: '提示',
        message: "该微信已绑定",
      })
    }
  },

  /**
   * 头像
   */
  avatar(){
    wx.chooseMedia({
      count:1, 
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: (res) => {
        const tempFilePaths = res.tempFiles[0].tempFilePath
        wx.uploadFile({
          url: config.host + "/user/avatar/upload", //仅为示例，非真实的接口地址
          filePath: tempFilePaths,
          name: 'avatar',
          header: {"token": config.access_token},
          success: (result) => {
            var data = JSON.parse(result.data)
            if(data.code == -1 && data.data == "TOKEN 无效"){
              Toast.error("TOKEN 无效");
              token.getAccessToken()
            }
            if (data.code == 200){
              Toast.success(data.data);
              wx.request({
                url: config.host + '/user/info/get',
                method: 'POST',
                header: { 'token': config.access_token},
                success: (res) => {
                  console.log(res.data)
                  this.setData({
                    userInfo: res.data.data
                  })
                  app.globalData.userInfo = this.data.userInfo
                }
              })
            }else{
              Toast.success(data.data);
            }
          }
        })
      }
    })
  },


  
  /**
   * 导航栏切换事件
   * @param {*} event 
   */
  onChange(event) {
    if(event.detail != 1){
      // 设置页面变量
      this.setData({ 
        active: event.detail 
      });
    }else{
      // 调用摄像头
      wx.scanCode({
        success(res) {
          console.log(res)
        }
      })
    }
    if(this.data.active == 0){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  },

  view_class(){
    if(this.data.isUser == true){
      wx.navigateTo({
        url: '/pages/info/class_Info/index?id=' + this.data.userInfo.class.id,
      })
    }else{
      wx.navigateTo({
        url: `/pages/info/class_Info/index?data=${JSON.stringify(this.data.userInfo.class)}`,
      })
    }
  },

  view_admininfo(){
    wx.navigateTo({
      url: '/pages/info/admin_Info/index?uid=' + this.data.userInfo.class.administrator.id,
    })
  }
})