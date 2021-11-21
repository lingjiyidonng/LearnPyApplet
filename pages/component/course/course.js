// pages/component/course/course.js

var app = getApp();

Component({

    /* 开启全局样式设置 */
    options: {
        addGlobalClass: true,
    },

    /**
     * 组件的属性列表
     */
    properties: {
        name:{
            type: String,
            value: '教程',
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        courselist: '',
    },
    lifetimes:{
        attached:  function () {
            
            
        },
    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
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
                            success(res) {
                                //console.log(res)
                                app.globalData.token = res.data.data.token;
                                // console.log(app.globalData.token) //拿到后将token存入全局变量  以便其他页面使用
                                wx.request({
                                    url: "http://124.70.47.51/user/course/getlist",
                                    method: "GET",
                                    header: {
                                        "content-type": "application/json",
                                        "Authorization": "Bearer " + app.globalData.token
                                    },
                                    success: function (res) {
                                        console.log(res.data.data.courselist)
                                        that.setData({
                                            courselist: res.data.data.courselist
                                        })
                                    }
                                })
                            }
                        })
                        //console.log(this.globalData.token)
                        //res = JSON.parse(res); //字符串转为对象 JSON字符串->JSON对象
                        //res = JSON.stringify(res) //对象->字符串
                    } else {
                        console.log('登陆失败')
                    }
                }
            })
        },
        hide: function () {},
        resize: function () {},
    },
    /**
     * 组件的方法列表
     */
    methods: {
        courseSelect: function(e){
            console.log(e.currentTarget.dataset.courseid)
            wx.navigateTo({
                url: "../course-content/course-content?courseid=" + e.currentTarget.dataset.courseid,
              })
        },
        collection: function(e){
            var that = this;
            var temp = e.currentTarget.dataset.courseid;
            console.log(e.currentTarget.dataset.courseid)
            wx.request({
                url: "http://124.70.47.51/user/course/collect",
                method: "post",
                header: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + app.globalData.token
                },
                data: {
                    "courseid": temp,
                },
                success: function (res) {
                    console.log(res.data)
                    // wx.request({
                    //     url: "http://124.70.47.51/user/course/getlist",
                    //     method: "GET",
                    //     header: {
                    //         "content-type": "application/json",
                    //         "Authorization": "Bearer " + app.globalData.token
                    //     },
                    //     success: function (res) {
                    //         console.log(res.data.data.courselist)
                    //         that.setData({
                    //             courselist: res.data.data.courselist
                    //         })
                    //     }
                    // })
                    
                }
            })
        }
    }
})
