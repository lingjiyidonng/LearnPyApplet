// pages/my_star/my_star.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btn_image: 'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/me/box3.png',
        projects:[
            
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
            url: 'http://124.70.47.51/user/home/project',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                console.log(res)
                that.setData({
                    projects: res.data.data.projects
                })
            },
            
        })
        
    },
    showProjects:function () {
        console.log(this.data.projects)
    },

    // delete_star:function (e) {
    //     var that = this
    //         console.log(e.currentTarget.dataset.id)
    //             console.log("user want to delete the star project")
    //             //delete
    //             wx.request({
    //                 url: 'http://124.70.47.51/user/project/collect',
    //                 method: "DELETE",
    //                 header: {
    //                   'Content-Type': 'application/json',
    //                   'Authorization': "Bearer " + app.globalData.token
    //                 },
    //                 data: {
    //                   projectid: e.currentTarget.dataset.id,
    //                   // delete project id 
    //                 },
    //                 success(res){
    //                   console.log(res)  
    //                 }
    //               })

    //     }
})