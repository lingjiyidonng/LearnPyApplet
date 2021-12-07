// pages/everyday_exercise/everyday_exercise.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag:-1,
        robot_image:'http://124.70.47.51/file/download/images/everyday_exercise/robot_dark.png',
        robot_image_1:'http://124.70.47.51/file/download/images/everyday_exercise/robot_dark.png',
        robot_image_2:'http://124.70.47.51/file/download/images/everyday_exercise/robot_luminous.png',
        problem:[

        ],
        everyday_problem: [

        ],
        problemid: '',
    },

    tap_robot:function(){
        console.log(this.data.flag)
        if (this.data.flag==-1) {
            
            this.setData({
                robot_image:this.data.robot_image_2,
                flag:1
            })
        }
        else{
            this.setData({
                robot_image:this.data.robot_image_1,
                flag:-1
            })
        }
    },
    get_tip:function(){
        console.log("get tip")
        var that = this
        wx.showModal({
            title: 'tip',
            content: that.data.everyday_problem.hint,
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
          url: "/pages/ideas/ideas?problemid=" + that.data.everyday_problem.problemid,
        })
    },
    onLoad:function () {
        //console.log(this.data.problem.is_solved)
        var that = this;
        wx.request({
            url: 'http://172.17.175.235/user/home/problem/random',
            method: "GET",
            header: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + app.globalData.token
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
                wx.request({
                    url: 'http://172.17.175.235/user/problem',
                    method: "GET",
                    header: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + app.globalData.token
                    },
                    data: {
                        problemid: that.data.problem.problemid
                    },
                    success(res){
                      console.log(res)  
                      that.setData({
                        everyday_problem: res.data.data.problem,
                        problemid: that.data.problem.problemid
                      })
                    }
                  })
            }
          })
        
        
    },

    
})
