var config = require("../../../config/config");
var token = require('../../../js/token.js');
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';

// pages/authority/bindwx/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uid: '',
      password: ''
  },
  
  /**
   * 绑定微信操作
   */
  bindwx(){
    wx.login({
      success: (res) => {
        console.log(res.code)
        wx.request({
          url: config.host + '/authority/bindwx',
          method: 'POST',
          data:{
            uid: this.data.uid,
            password: this.data.password,
            code: res.code
          },
          success: (result) => {
            console.log(result)
            if(result.data.code == -1 && result.data.data == "TOKEN 无效"){
              Toast('Token失效');
              token.getAccessToken()
            }
            if (result.data.code == 200){
              Dialog.alert({
                title: '提示',
                message: result.data.data,
              }).then(() => {
                wx.navigateBack()
              });
            }else{
              Dialog.alert({
                title: '提示',
                message: result.data.data,
              })
            }
          }
        })
      },
    })
  }
})