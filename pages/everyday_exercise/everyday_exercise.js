// pages/everyday_exercise/everyday_exercise.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag:-1,
        robot_image:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_dark.png',
        robot_image_1:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_dark.png',
        robot_image_2:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/everyday_exercise/robot_luminous.png'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    tap_robot:function(){
        console.log(this.data.flag)
        if (this.data.flag==-1) {
            
            this.setData({
                robot_image:this.data.robot_image_2,
                flag:1
            })
        }
        else{
            this.setData({
                robot_image:this.data.robot_image_1,
                flag:-1
            })
        }
    },
    tip:function(){
        console.log("tip")
    },
    coding:function(){
        wx.navigateTo({
          url: '/pages/coding/coding',
        })
    },
    ideas:function(){
        wx.navigateTo({
          url: '/pages/ideas/ideas',
        })
    }
})