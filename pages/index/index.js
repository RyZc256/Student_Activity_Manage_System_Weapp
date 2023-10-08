// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: 'SAMS活动管理系统',
    scrollPoster:[
      {
        poster:'https://pic1.zhimg.com/v2-e726985f44869b525e50f826caf042c4_1440w.jpg?source=172ae18b'
      },
      {
        poster:'https://i0.hdslb.com/bfs/article/c4ab3145e4a5c875ad329810106a8d001d0c658b.jpg@progressive.webp'
      },
      {
        poster:'https://pic1.zhimg.com/v2-f1c786879e229d8b30bc8f2f7bb723b6_1440w.jpg?source=172ae18b'
      },
    ],
    tip: 0,
    active: 0,
    // 标签栏图标
    tabbar_icon: {
      scan: '../../static/images/icon/scan.png',
      index: '../../static/images/icon/index.png',
      indexfill: '../../static/images/icon/index-fill.png',
      mine: '../../static/images/icon/mine.png',
      minefill: '../../static/images/icon/mine-fill.png'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

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

    if(this.data.active == 2){
      wx.reLaunch({
        url: '/pages/mine/index',
      })
    }
  },
  test(){
    wx.login({
      success: (res) => {
        // console.log(config.access_token)
      },
    })
  }
})