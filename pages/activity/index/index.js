var config = require("../../../config/config");
import Toast from '@vant/weapp/toast/toast';
var response = [];
function getActivity(type){
  var url = config.host + '/activity/getnear'
  console.log("type" + type)
  if (type == "live"){
    url = config.host + '/activity/getnear?type=live'
  }
  wx.request({
    url: url,
    method: 'POST',
    header: {"token":config.access_token},
    success: (res) =>{
      if(res.data.code == -1 && res.data.data == "TOKEN 无效"){
        Toast.error("TOKEN 无效");
        token.getAccessToken()
      }
      if(res.data.code == 200){
        var data = res.data.data
        var cutoff_time;
        //现在时间
        var now = new Date();
        for(var i=0;i<res.data.data.length;i++){
            data[i].status = "不可参加"
            data[i].simpleintro = data[i].detail.substr(0, 35)
            if(data[i].cutoff_time=="None"){
                data[i].status = "可参加"
            }else{
              cutoff_time = new Date(data[i].cutoff_time.split("-").join('/'));
            }
            if(!(cutoff_time < now)){
                //判断时间是否过期
                data[i].status = "可参加"
            }
        }
        console.log(data)
        response = data
        console.log(response)
      }
    }
  })
  console.log(response)
};

// pages/activity/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    isAdmin: true,
    todayIsNone: true,
    activityInfo: [],
    keyword: '',
    time: 30 * 60 * 60 * 1000,
    livechecked: false,
  },

  tabsChange(event) {
    var tabId = event.detail.name;
    if(tabId == 1){
      this.setData({
        activityInfo: getActivity("null")
      })
    }
  },

  checkboxChange(event) {
    this.setData({
      livechecked: event.detail,
    });
    if(event.detail==true){
      activityInfo: getActivity("live")
    }else{
      activityInfo: getActivity("null")
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})