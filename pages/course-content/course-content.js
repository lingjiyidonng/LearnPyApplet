// pages/course-content/course-content.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        courseTitle: "初识Python",
        course: '',
        is_collect: false,
        courseid: '',
    },

    coding: function () {
        console.log("coding")
        var that = this;
        wx.navigateTo({
            url: "../coding/coding?courseid=" + that.data.course.courseid + "&iscollect=" + that.data.is_collect + "&title=" + that.data.course.title,
        })
    },

    ideas:function () {
        console.log("ideas")
        var that = this;
        wx.navigateTo({
            url: "../ideas/ideas?problemid=" + that.data.course.courseid 
        })
    },
    collection: function () {
        var that = this;
        wx.request({
            url: "http://124.70.47.51/user/course/collect",
            method: "post",
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + app.globalData.token
            },
            data: {
                "courseid": that.data.course.courseid,
            },
            success: function (res) {
                console.log(res.data)
                // console.log(that.data.course)
                that.setData({
                    is_collect: true,
                })
                console.log(that.data.is_collect)


            }
        })
    },
    nocollection: function () {
        var that = this;
        wx.request({
            url: "http://124.70.47.51/user/course/collect",
            method: "delete",
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + app.globalData.token
            },
            data: {
                "courseid": that.data.course.courseid,
            },
            success: function (res) {
                console.log(res.data)
                // console.log(that.data.course)
                that.setData({
                    is_collect: false,
                })
                console.log(that.data.is_collect)


            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // var temp = options.courseid;
        this.setData({
            courseid: options.courseid,
        })
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that = this;
        wx.request({
            url: "http://124.70.47.51/user/course",
            method: "GET",
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + app.globalData.token
            },
            data: {
                "courseid": that.data.courseid,
            },
            success: function (res) {
                console.log(res.data.data.course)
                that.setData({
                    course: res.data.data.course,
                    is_collect: res.data.data.course.is_collect,
                    courseid: that.data.courseid,
                })
                // console.log(res.data.data.course.is_collect)
                wx.request({
                    url: res.data.data.course.coursedetail,
                    method: "GET",
                    header: {
                        //'Content-Type': 'application/json',
                        'content-type': 'application/x-www-form-urlencoded'
                        //'Authorization': "Bearer " + app.globalData.token
                    },
                    success(res) {
                        that.setData({
                            str: res.data,
                        })
                        // console.log(that.data.str)
                        let result = app.towxml(that.data.str, 'markdown', {
                            base: 'http://', // 相对资源的base路径，可以省略
                            theme: 'dark', // 主题，默认`light`，可以省略
                            events: { // 为元素绑定的事件方法，可以省略
                                tap: (e) => {
                                    console.log('tap', e);
                                }
                            }
                        });
                        // 更新解析数据
                        that.setData({
                            content: result,
                            isLoading: false
                        });
                    }
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})