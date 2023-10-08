// pages/about/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    run_time: '',
    developer: 'hz157'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var date1= '2023-01-01 00:00:00';  //开始时间
    var date2 = new Date();    //结束时间
    var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数      
    // var subMinutes = Math.floor( date3/(60*1000) ) //获取总共的分钟差
    //计算出相差天数
    var days=Math.floor(date3/(24*3600*1000))
    //计算出小时数
    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    // //计算相差秒数
    // var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    // var seconds=Math.round(leave3/1000)
    this.setData({
        run_time: " 已运行 "+days+"天 "+hours+"小时 "+minutes+" 分钟"
    }) 
  },

  github(){
    
  }
})