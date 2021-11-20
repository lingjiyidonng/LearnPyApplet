// pages/my_star/my_star.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title_item_list:[
            "josephmisiti/awesome-machine-learning","wepe/MachineLearning","udacity/machine-learning","rasbt/python-machine-learning-book",
        ],
        title_item_content:[
            "Learning frameworks, libraries and software.","Basic Machine Learning and Deep Learning","Content for Udacity's Machine Learning curriculum","The 'Python Machine Learning (1st edition)' book code repository and info resource",
        ],
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
                //console.log(res)
                that.setData({
                    projects: res.data.data.projects
                })
                //console.log(that.data.projects)
            },
            
        })
        
    },
    showProjects:function () {
        console.log(this.data.projects)
    }
})