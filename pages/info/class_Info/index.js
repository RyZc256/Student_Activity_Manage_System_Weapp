// pages/user/organize_Info/index.js
var config = require("../../../config/config");
var token = require('../../../js/token.js');
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
      keyword: '',
      classInfo: [],
      userInfo: [],
      usercount: '',
      dropdowncurrent: 0,
      isAdmin: false,
      option: [],
      data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.id != undefined){
      var id = options.id
      this.setData({
        isAdmin: false
      })
      wx.request({
        url: config.host + '/user/info/getclass?id=' + id,
        method: 'POST',
        header: {"token": config.access_token},
        success: (res) =>{
          if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
            Toast.error("TOKEN 无效");
            token.getAccessToken()
          }
          if(res.data.code == 200){
            this.setData({
              classInfo: res.data.data.class,
              userInfo: res.data.data.userInfoList,
              usercount: res.data.data.userNumber
            })
          }
        }
      }) 
    }else{
      this.setData({
        isAdmin: true
      })
      var data = JSON.parse(options.data);
      console.log(data)
      var option = [];
      for(var i=0;i<data.length;i++)
        option.push({"text":data[i].name,"value":data[i].id})
      this.setData({
        option: option,
        isAdmin: options.isAdmin,
        dropdowncurrent: data[0].id
      })
      wx.request({
        url: config.host + '/user/info/getclass?id=' + this.data.dropdowncurrent,
        method: 'POST',
        header: {"token": config.access_token},
        success: (res) =>{
          if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
            Toast.error("TOKEN 无效");
            token.getAccessToken()
          }
          if(res.data.code == 200){
            this.setData({
              classInfo: res.data.data.class,
              userInfo: res.data.data.userInfoList,
              usercount: res.data.data.userNumber
            })
          }
        }
      }) 
    }
    
  },

  /**
   * 关键字搜索
   * @param {调用时间} event 
   */
  keyword_search(event){
    var keyword = event.detail
    wx.request({
      url: config.host + '/user/info/getclass?id=' + this.data.dropdowncurrent + "&keyword=" + keyword,
      method: 'POST',
      header: {"token": config.access_token},
      success: (res) =>{
        if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
          Toast.error("TOKEN 无效");
          token.getAccessToken()
        }
        if(res.data.code == 200){
          this.setData({
            classInfo: res.data.data.class,
            userInfo: res.data.data.userInfoList,
            keyword: keyword
          })
        }
      }
    })
  },

  /**
   * 管理员下拉选择框改变事件
   * @param {}} event 
   */
  dropdownChange(event){
    this.setData({
      dropdowncurrent: event.detail
    })
    wx.request({
      url: config.host + '/user/info/getclass?id=' + this.data.dropdowncurrent,
      method: 'POST',
      header: {"token": config.access_token},
      success: (res) =>{
        if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
          Toast.error("TOKEN 无效");
          token.getAccessToken()
        }
        if(res.data.code == 200){
          this.setData({
            classInfo: res.data.data.class,
            userInfo: res.data.data.userInfoList,
            usercount: res.data.data.userNumber
          })
        }
      }
    })
  },

  /**
   * 查看管理员信息
   */
  view_admininfo(){
    wx.navigateTo({
      url: '/pages/info/admin_Info/index?uid=' + this.data.classInfo.administrator.id,
    })
  },

  /**
   * 拨打电话
   * @param {}} event 
   */
  calltel(event){
    var tel = event.target.id
    wx.makePhoneCall({
      phoneNumber: tel,
    })
  }
})