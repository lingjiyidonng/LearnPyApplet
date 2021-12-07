// pages/my_star_course/my_star_course.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_title_list:[
            "初识Python","分支结构","循环结构","函数与模块"
        ],
        btn_image: 'http://124.70.47.51/file/download/images/me/box3.png',
        courses:[

        ]
    },
    toProject:function(){
        wx.redirectTo({
          url: '/pages/my_star/my_star',
        })
    },
    toCourse:function(){
        wx.redirectTo({
          url: '/pages/my_star_course/my_star_course',
        })
    },
    onLoad:function () {
        var that = this;
        wx.request({
            url: 'http://172.17.175.235/user/home/courses',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                //console.log(res)
                that.setData({
                    courses: res.data.data.courses
                })
                //console.log(that.data.projects)
            },
            
        })
        
    },
    onShow:function () {
        var that = this;
        wx.request({
            url: 'http://172.17.175.235/user/home/courses',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                //console.log(res)
                that.setData({
                    courses: res.data.data.courses
                })
                //console.log(that.data.projects)
            },
            
        })
        
    },
    toCourse_content:function (e) {
        console.log(e.currentTarget.dataset.id)
        var that = this
        var temp = e.currentTarget.dataset.id
            wx.navigateTo({
                url: "../course-content/course-content?courseid=" + that.data.courses[temp].courseid,
              })
    }
})