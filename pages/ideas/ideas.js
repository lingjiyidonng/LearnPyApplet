// pages/ideas/ideas.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        problemid:0,
        codelist:[

        ]
    },


    read_code:function (e) {
      var that = this
      wx.navigateTo({
        url: '/pages/my_code_detail/my_code_detail?codeid=' + e.currentTarget.dataset.id,
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        this.setData({
            problemid: options.problemid
        })
        console.log("ideas problemid " + this.data.problemid)
        wx.request({
            url: 'http://172.17.175.235/user/problem/code',
            method: "GET",
            header: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + app.globalData.token
            },
            data: {
              problemid: that.data.problemid,
              // delete project id 
            },
            success(res){
                console.log(res)
              that.setData({
                  codelist: res.data.data.codelist
              })
              console.log(that.data.codelist)
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