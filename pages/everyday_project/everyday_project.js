// pages/everyday_project/everyday_project.js
var app = getApp()
Page({
        data:{
            article : '',// 用于绑定组件的数据使用
            everyday_project:[

            ],
        },

        onLoad:function () {
            //console.log(this.data.problem.is_solved)
            var that = this;
            wx.request({
                url: 'http://124.70.47.51/user/home/project/random',
                method: "GET",
                header: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + app.globalData.token
                },
                success(res){
                  console.log(res)  
                  that.setData({
                    everyday_project: res.data.data.project
                  });
                  console.log(that.data.everyday_project) 
                }
              })
            
            
        },

        copy_url:function () {
            var that = this
            // 传递的参数
            wx.setClipboardData({
              data: that.data.everyday_project.url,
              success(res){
                  wx.showToast({
                    title: '复制成功',
                  })
                  console.log(that.data.everyday_project.url)
              }
            })
            
        },

    })

