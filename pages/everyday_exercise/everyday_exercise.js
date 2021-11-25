// pages/everyday_exercise/everyday_exercise.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag:-1,
        robot_image:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_dark.png',
        robot_image_1:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_dark.png',
        robot_image_2:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_luminous.png'
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
    tip:function(){
        console.log("tip")
    },
    coding:function(){
        wx.navigateTo({
          url: '/pages/coding/coding',
        })
    },
    ideas:function(){
        wx.navigateTo({
          url: '/pages/ideas/ideas',
        })
    }
}) 