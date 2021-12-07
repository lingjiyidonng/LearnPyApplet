// pages/component/home/home.js

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
        name: {
            type: String,
            value: '首页',
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        dateTitleList: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        date: 0,
        days: '',

        project: '',

    },
    lifetimes:{
        attached: function () {
            const util = require('../../../utils/util.js');

            let time = util.formatTime(new Date());
            console.log('当前日期和时间:', time)
            this.setData({
                date: time,
                
            })

            // 登录
            wx.login({
                success: res => {
                    var that = this

                    console.log(res.code)
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    if (res.code) {
                        console.log(res.code)

                        wx.request({
                            url: 'http://172.17.175.235/user/login',
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
                                console.log(app.globalData.token) //拿到后将token存入全局变量  以便其他页面使用
                                wx.request({
                                    url: "http://172.17.175.235/user/sign",
                                    method: "GET",
                                    header: {
                                        "content-type": "application/json",
                                        "Authorization": "Bearer " + app.globalData.token
                                    },
                                    success: function (res) {
                                        that.days = res.data.data.days;
                                        console.log(that.days)
                                        that.setData({
                                            days: res.data.data.days,
                                        })
                                    }
                                })
                            }
                        })

                        //res = JSON.parse(res); //字符串转为对象 JSON字符串->JSON对象
                        //res = JSON.stringify(res) //对象->字符串
                    } else {
                        console.log('登陆失败')
                    }
                }
            })

            // wx.request({
            //     url: "http://172.17.175.235/user/home/project/random",
            //     method: "GET",
            //     header: {
            //         "content-type": "application/json",
            //         "Authorization": "Bearer " + app.globalData.token
            //     },
            //     success: function (res) {
            //         var that = this;
            //         console.log(res.data)
            //         that.setData({
            //             project: res.data.data.project
            //         })
            //     }
            // })
        },

    },
    // pageLifetimes: {
    //     // 组件所在页面的生命周期函数
    //     show: function () {
    //         const util = require('../../../utils/util.js');

    //         let time = util.formatTime(new Date());
    //         console.log('当前日期和时间:', time)
    //         this.setData({
    //             date: time,
                
    //         })
    //         // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    //         // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    //         wx.getUserProfile({
    //             desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //             success: (res) => {
    //               app.globalData.userInfo = res.userInfo;
    //               console.log(app.globalData.userInfo)
    //             }
    //         })
    //         // 登录
    //         wx.login({
    //             success: res => {
    //                 var that = this
    //                 // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //                 if (res.code) {
    //                     wx.request({
    //                         url: 'http://172.17.175.235/user/login',
    //                         method: "POST",
    //                         header: {
    //                             'Content-Type': 'application/json',
    //                             //'content-type': 'application/x-www-form-urlencoded'
    //                         },
    //                         data: {
    //                             code: res.code,
    //                         },
    //                         success(res) {
    //                             //console.log(res)
    //                             app.globalData.token = res.data.data.token;
    //                             console.log(app.globalData.token) //拿到后将token存入全局变量  以便其他页面使用
    //                             wx.request({
    //                                 url: "http://172.17.175.235/user/sign",
    //                                 method: "GET",
    //                                 header: {
    //                                     "content-type": "application/json",
    //                                     "Authorization": "Bearer " + app.globalData.token
    //                                 },
    //                                 success: function (res) {
    //                                     that.days = res.data.data.days;
    //                                     console.log(that.days)
    //                                     that.setData({
    //                                         days: res.data.data.days,
    //                                     })
    //                                 }
    //                             })
    //                         }
    //                     })
    //                     //console.log(this.globalData.token)
    //                     //res = JSON.parse(res); //字符串转为对象 JSON字符串->JSON对象
    //                     //res = JSON.stringify(res) //对象->字符串
    //                 } else {
    //                     console.log('登陆失败')
    //                 }
    //             }
    //         })
    //         // wx.request({
    //         //     url: "http://172.17.175.235/user/home/project/random",
    //         //     method: "GET",
    //         //     header: {
    //         //         "content-type": "application/json",
    //         //         "Authorization": "Bearer " + app.globalData.token
    //         //     },
    //         //     success: function (res) {
    //         //         var that = this;
    //         //         console.log(res.data)
    //         //         that.setData({
    //         //             project: res.data.data.project
    //         //         })
    //         //     }
    //         // })
    //     },
    //     hide: function () {},
    //     resize: function () {},
    // },
    /**
     * 组件的方法列表
     */
    methods: {
        click1: function () {
            console.log("click1");
            wx.navigateTo({
                url: '/pages/everyday_exercise/everyday_exercise',
            })
        },
        click2: function () {
            console.log("click2")
            wx.navigateTo({
                url: '/pages/everyday_project/everyday_project',
            })
        },


    },


})