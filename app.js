// app.js
App({
  // 引入`towxml3.0`解析方法
	towxml:require('/towxml/index'),
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        var that = this
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'http://124.70.47.51/user/login',
            method: "POST",
            header: {
              'Content-Type': 'application/json',
              //'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: res.code,
            },
            success(res){
              //console.log(res.data.data.token)
              that.globalData.token = res.data.data.token;
              console.log(that.globalData.token)  //拿到后将token存入全局变量  以便其他页面使用
            }

          })
          
          //res = JSON.parse(res); //字符串转为对象 JSON字符串->JSON对象
          //res = JSON.stringify(res) //对象->字符串
        }else{
          console.log('登陆失败')
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    token: '',
   
  }
})
