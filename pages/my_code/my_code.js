// pages/my_code/my_code.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        codes:[
        ],
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: 'http://172.17.175.235/user/home/code',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                //'content-type': 'application/x-www-form-urlencoded'
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                that.setData({
                    codes: res.data.data.codes,
                })
                console.log(res.data.data.codes)
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

    },

    code_detail:function (e) {
            console.log("go to my history code detail")
            var that = this
            var t = e.currentTarget.dataset.id
            console.log(t)
            wx.navigateTo({
              url: "/pages/my_code_detail/my_code_detail?codeid=" + t
            })
    }
})