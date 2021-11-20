// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isLoading: true,
    content: {},
    str: ''
  },
    
  
  onLoad() {
    var that = this
    wx.request({
      url: 'http://124.70.47.51/file/download/courses/1.md',
      method: "GET",
      header: {
        //'Content-Type': 'application/json',
        'content-type': 'application/x-www-form-urlencoded'
        //'Authorization': "Bearer " + app.globalData.token
      },
      success(res){
        that.setData({
          str: res.data,
        })
        //console.log(that.data.str)
        let result = app.towxml(that.data.str,'markdown',{
        base:'http://',// 相对资源的base路径，可以省略
        theme:'dark',// 主题，默认`light`，可以省略
        events:{// 为元素绑定的事件方法，可以省略
              tap:(e)=>{
              console.log('tap',e);
            }
          }
        });
      // 更新解析数据
      that.setData({
        content:result,
        isLoading: false
      });
      }
    })
    //`str`
    
  }
})