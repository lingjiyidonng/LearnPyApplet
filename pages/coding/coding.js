// pages/coding/coding.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        charList: ["tab", "[", "]", "{", "}", "<", ">", "+", "="],
        codeInput: '',
        tempInput: '',
        courseid: '',
        course: '',
        is_collect: '',
        cursor: 0,
        file: '',
        result: '',
        ideaInput: '',
        showModal: false,
        codeid: '',

    },
    upload: function () { 
        this.setData({
            showModal: true
        })
    },

    preventTouchMove: function () {

    },


    cancel: function () {
        this.setData({
            showModal: false
        })
    },
    submit: function () {
        var that = this;
        if(app.globalData.userInfo == null){
            wx.showToast({
                icon: 'error',
                title: '您未登录',

            })
        }
        else{
        wx.request({
            url: "http://124.70.47.51/user/code/commit",
            method: "post",
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + app.globalData.token
            },
            data: {
                "codeid": that.data.codeid,
                "courseid": that.data.courseid,
                "describe": that.data.ideaInput,
                "username": app.globalData.userInfo.nickName,
                "avatar": app.globalData.userInfo.avatarUrl,
            },
            success: function (res) {
                wx.showToast({
                    title: '上传成功',
    
                })
                console.log(res.data)
                console.log(that.data.file.filename)
                console.log(that.data.courseid)
                console.log(that.data.ideaInput)
                console.log(app.globalData.userInfo.nickName)
                console.log(app.globalData.userInfo.avatarUrl)
                
                
                
            }
        
        })
        this.setData({
            showModal: false
        })
    }
    },
    bindTextAreaBlur: function (e) {
        console.log(e.detail.value)
    },
    bind: function (e) {
        console.log(e.detail.value)
        console.log(e.detail.cursor)
        this.setData({
            // codeInput: e.detail.value,
            tempInput: e.detail.value,
            cursor: e.detail.cursor,

        });

    },
    getcursor: function (e) {
        console.log(e.detail.cursor)
        this.setData({
            // codeInput: e.detail.value,s
            cursor: e.detail.cursor
        });
    },
    addChar: function (e) {
        console.log(e.currentTarget.dataset.charindex)
        var index = e.currentTarget.dataset.charindex;
        var that = this;
        var char, tempcursor;
        tempcursor = 1;
        if (index == 0) {
            char = "    ";
            tempcursor = 4;
        } else if (index == 1) char = "[";
        else if (index == 2) char = "]";
        else if (index == 3) char = "{";
        else if (index == 4) char = "}";
        else if (index == 5) char = "<";
        else if (index == 6) char = ">";
        else if (index == 7) char = "+";
        else char = "=";
        var tempstr = that.data.tempInput.slice(0, that.data.cursor) + char + that.data.tempInput.slice(that.data.cursor)
        that.setData({
            tempInput: tempstr,
            cursor: that.data.cursor + tempcursor,
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
    run: function () {
        const fs = wx.getFileSystemManager();
        var that = this;
        fs.writeFile({
            filePath: `${wx.env.USER_DATA_PATH}/_l${123}.py`,
            data: that.data.tempInput,
            encoding: 'utf8',
            success(res) {
                console.log("success write")
                wx.uploadFile({
                    url: 'http://124.70.47.51/file/upload',
                    filePath: `${wx.env.USER_DATA_PATH}/_l${123}.py`,
                    name: 'file',
                    header: {
                        'content-type': 'multipart/form-data'
                    },
                    formData: null,
                    success: function (res) {
                        console.log("success upload")
                        var data = JSON.parse(res.data)
                        console.log(data.data)
                        that.setData({
                            file: data.data,
                        })
        
                        wx.request({
                            url: "http://124.70.47.51/user/code/run",
                            method: "post",
                            header: {
                                "content-type": "application/json",
                                "Authorization": "Bearer " + app.globalData.token
                            },
                            data: {
                                "codefile": that.data.file.filename,
                            },
                            success: function (res) {
                                console.log("success run")
                                console.log(res.data)
                                var str = '';
                                var list1 = res.data.data.res;
                                var len = res.data.data.res.length;
                                for (var i = 0; i < len; i++) {
                                    str += list1[i] + "\n";
                                }
                                console.log(str)
                                console.log(res.data.data.codeid)
                                that.setData({
                                    result: str,
                                    codeid: res.data.data.codeid,
                                })
                            }
                        })
                    }
                })
            }
        })
        fs.unlink({
            filePath: `${wx.env.USER_DATA_PATH}/_l${123}.py`,
            encoding: 'utf8',
            success(res) {
                console.log("delete py")
            }
        })
    },
    getidea: function (e) {
        console.log(e.detail.value)
        this.setData({
            ideaInput: e.detail.value,

        });
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