// pages/coding/coding.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        courseTitle: "初识Python",
        charList: ["tab","[","]","{","}","<",">","+","="],
        codeInput: '',
        tempInput: '',
        courseid: '',
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


            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        that.setData({
            courseTitle: options.title,
            courseid: options.courseid,
            is_collect:  options.iscollect,
        })
        console.log(that.data.is_collect)
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