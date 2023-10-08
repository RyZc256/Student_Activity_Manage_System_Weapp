// pages/user/admininfo/index.js
var config = require("../../../config/config");
var token = require("../../../js/token.js");
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
      adminInfo: [],
      avatarUrl: config.host + "/user/avatar/"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let uid = options.uid;
    wx.request({
      url: config.host + '/user/info/getadmin?uid=' + uid,
      method: 'POST',
      header: {"token": config.access_token},
      success: (res) => {
        if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
          Toast.error("TOKEN 无效");
          token.getAccessToken()
        }
        if (res.data.code == 200){
          this.setData({
            adminInfo: res.data.data
          })
        }
      }
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * 拨打电话
   * @param {} event 
   */
  calltel(){
    wx.makePhoneCall({
      phoneNumber: this.data.adminInfo.tel,
    })
  }
})