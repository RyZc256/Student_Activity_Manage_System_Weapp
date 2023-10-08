var config = require("../config/config");

function getAccessToken(){
  wx.request({
    url: config.host + '/authority/accesstoken?refresh_token=' + config.refresh_token,
    method: 'POST',
    success: (result) => {
        console.log(result)
        config.access_token = result.data.data
    }
  })
}

module.exports = {
  getAccessToken,
}