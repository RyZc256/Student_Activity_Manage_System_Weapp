// pages/user/info/index.js
var config = require("../../../config/config");
var token = require("../../../js/token.js");
var app = getApp();
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    bottomHeight: 0,
    isAdmin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var isAdmin = false;
    wx.request({
      url: config.host + '/user/info/get',
      method: 'POST',
      header: { 'token': config.access_token},
      success: (res) => {
        if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
          Toast.error("TOKEN 无效");
          token.getAccessToken()
        }
        if(res.data.code == 200){
          if(res.data.data.role != "user")
            isAdmin = true
          this.setData({
            userInfo: res.data.data,
            isAdmin: isAdmin
          })
        }else{
          Toast.success(data.data);
        }
      }
    })
  },
  edit(){
    wx.request({
      url: config.host + '/user/info/edit',
      method: 'POST',
      header: {"token": config.access_token},
      data: {
          "id":  this.data.userInfo.id,
          "tel":  this.data.userInfo.tel,
          "mail": this.data.userInfo.mail,
          "address": this.data.userInfo.address
      },
      success: (res) =>{
        if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
          Toast.error("TOKEN 无效");
          token.getAccessToken()
        }
        if(res.data.code == 200){
          Dialog.alert({
            title: '提示',
            message: res.data.data,
          }).then(() => {
            wx.navigateBack()
          })
        }else{
          Toast.success(data.data);
        }
      }
    })
  },
  change(event){
    var type = event.currentTarget.id
    this.setData({
      [type]: event.detail
    })
  }
})