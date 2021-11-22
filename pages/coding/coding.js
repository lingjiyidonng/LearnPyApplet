// pages/coding/coding.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        charList: ["tab","[","]","{","}","<",">","+","="],
        codeInput: '',
        tempInput: '',
        courseid: '',
        course: '',
        is_collect: '',
        
    },
    bindTextAreaBlur: function(e) {
        console.log(e.detail.value)
    },
    bind: function(e){
        
        console.log(e.detail.value)
        this.setData({
            codeInput: e.detail.value,

        });
        
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
                "courseid": that.data.courseid,
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
                "courseid": that.data.courseid,
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
        var temp = options.courseid;
        var that = this;
        wx.request({
            url: "http://124.70.47.51/user/course",
            method: "GET",
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + app.globalData.token
            },
            data: {
                "courseid": temp,
            },
            success: function (res) {
                console.log(res.data.data.course.is_collect)
                that.setData({
                    courseid: options.courseid,
                    course: res.data.data.course,
                    is_collect: res.data.data.course.is_collect,
                })
            }
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