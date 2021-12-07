// pages/exercise_detail/exercise_detail.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        problemid: 0,
        problem:{
            
        },
        robot_image:'http://124.70.47.51/file/download/images/everyday_exercise/robot_dark.png',
        robot_image_1:'http://124.70.47.51/file/download/images/everyday_exercise/robot_dark.png',
        robot_image_2:'http://124.70.47.51/file/download/images/everyday_exercise/robot_luminous.png'
        
    },

    onLoad:function (options) {
        //console.log(this.data.problem.is_solved)
        var that = this;
        that.setData({
            problemid: options.problemid,
        }),
        wx.request({
            url: 'http://172.17.175.235/user/problem',
            method: "GET",
            header: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + app.globalData.token
            },
            data: {
              problemid: that.data.problemid,
              // delete project id 
            },
            success(res){
              console.log(res)  
              that.setData({
                problem: res.data.data.problem
              });
              console.log(that.data.problem) 
              if (that.data.problem.is_solved==true) {
                    that.setData({
                        robot_image: that.data.robot_image_2
                    })
                }
                else{
                    that.setData({
                        robot_image: that.data.robot_image_1
                    })
                }
            }
          })
        
        
    },

    tap_robot:function(){
        var that = this
        if (this.data.problem.is_solved==false) {
            wx.request({
                url: 'http://172.17.175.235/user/problem/solve',
                method: "POST",
                header: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + app.globalData.token
                },
                data: {
                  problemid: that.data.problemid,
                  // star project id 
                },
                success(res){
                  console.log(res)  
                  console.log("user solve the problem")
                  that.setData({
                    robot_image:that.data.robot_image_2,
                })
                }
              })
            
            
        }
        else{
            wx.request({
                url: 'http://172.17.175.235/user/problem/solve',
                method: "DELETE",
                header: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + app.globalData.token
                },
                data: {
                  problemid: that.data.problemid,
                  // delete project id 
                },
                success(res){
                  console.log(res)  
                  console.log("user cancel solve the problem")
                  that.setData({
                    robot_image:that.data.robot_image_1,
                
                    })
                }
              })
            
            
        }
    },
    get_tip:function(){
        console.log("get tip")
        var that = this
        wx.showModal({
            title: 'tip',
            content: that.data.problem.hint,
            showCancel: false,
            success (res) {
                console.log('用户获取题目提示')
              }
        })
    },
    coding:function(){
      var that = this;
        wx.navigateTo({
          url: '/pages/exercise_detail_code/exercise_detail_code?problemid=' + that.data.problemid,
        })
    },
    ideas:function(){
      var that = this
        wx.navigateTo({
          url: "/pages/ideas/ideas?problemid=" + that.data.problemid,
        })
    },

    
   
})