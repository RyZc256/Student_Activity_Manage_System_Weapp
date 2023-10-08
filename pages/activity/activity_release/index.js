// pages/activity/activity_release/index.js
function timestampToTime(times) {
  let hms = times[1]
  hms = hms.split(':')
  console.log(hms)
  let hour = parseInt(hms[0]).toString().padStart(2,'0')
  let minute = parseInt(hms[1]).toString().padStart(2,'0')
  let mdy = times[0]
  mdy = mdy.split('/')
  let month = parseInt(mdy[0]).toString().padStart(2,'0');
  let day = parseInt(mdy[1]).toString().padStart(2,'0');
  let year = parseInt(mdy[2]).toString().padStart(2,'0');
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity: {
      "name": '',
      "detail": '',
      "regiser_time": '',
      "cutoff_time": '',
      "limit_number": 0,
      "start_time": '',
      "end_time": '',
      "address": '',
      "administrator": '',
      "user": ''
    },
    isdatetimeSelect: false,
    currentFieId: '',
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2050, 12, 12).getTime(),
    currentDate: new Date().getTime(),
    latitude: 0, //首次加载维度
    longitude: 0, //首次加载的经度
    mapName: "", //选点的位置,
    detaillocalt: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let time = new Date()
    let nowTime = timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))
    this.setData({
      'activity.regiser_time': nowTime
    })
  },

  /**
   * 选择时间
   * @param {*} event 
   */
  SelectDateTime(event){
    console.log(event)
    this.setData({
      isdatetimeSelect: true,
      currentFieId: event.currentTarget.id
    })
  },


  /**
   * 时间选择器点下确认
   */
  comformSelectDateTime(){
    var type = 'activity.' + this.data.currentFieId
    let time = new Date(this.data.currentDate)
    var selectDate = timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "));
    this.setData({
      isdatetimeSelect: false,
      [type]: selectDate,
      currentFieId: '',
      currentDate: new Date().getTime()
    })
  },

  cancelSelectDateTime(){
    this.setData({
      isdatetimeSelect: false,
      currentDate: new Date().getTime()
    })
  },

  location() {
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        var address = res.address
        _this.setData({
          'activity.address': address
        })
      },
      complete(r){
        console.log(r)
        console.log(222)
      }
    })
  },

  detaillocalt(event){
    let address = this.data.activity.address
    let detailaddress = event.detail.value
    this.setData({
      'activity.address':  address + detailaddress
    })
  },


  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  }
})