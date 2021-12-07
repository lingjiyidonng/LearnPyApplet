// pages/my_star/my_star.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btn_image: 'http://124.70.47.51/file/download/images/me/box3.png',
        projects:[
            
        ],
        length: 0,
        is_collected:[
            true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true
        ],
        icon: 'http://124.70.47.51/file/download/images/project/collection_luminous.png',
        collected: 'http://124.70.47.51/file/download/images/project/collection_luminous.png',
        no_collected: 'http://124.70.47.51/file/download/images/project/collection_dark.png'
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
            url: 'http://172.17.175.235/user/home/projects',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                console.log(res)
                that.setData({
                    projects: res.data.data.projects,
                    length: res.data.data.projects.length,
                })
                for(var i=0;i<that.data.length;i++){
                    that.data.is_collected[i]=true
                }
            },
            
        })
        
    },
    onShow:function () {
        var that = this;
        wx.request({
            url: 'http://172.17.175.235/user/home/projects',
            method: "GET",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            success(res){
                console.log(res)
                that.setData({
                    projects: res.data.data.projects,
                    length: res.data.data.projects.length,
                })
                for(var i=0;i<that.data.length;i++){
                    that.data.is_collected[i]=true
                }
                console.log(that.data.is_collected)
            },
            
        })
        
    },
    showProjects:function () {
        console.log(this.data.projects)
    },

    copy_url:function (e) {
        // 传递的参数
        let temp = e.currentTarget.dataset.id;
        console.log(temp)
        var that = this;
        wx.setClipboardData({
          data: that.data.projects[temp].url,
          success(res){
              wx.showToast({
                title: '复制成功',
              })
              console.log(that.data.projects[temp].url)
          }
        })
        
    },

    star_delete:function (e) {
        var that = this
        console.log(e.currentTarget.dataset.id)
        console.log(e.currentTarget.dataset.index)
        if(that.data.is_collected[e.currentTarget.dataset.index])
        {
            wx.request({
          url: 'http://172.17.175.235/user/project/collect',
          method: "DELETE",
            header: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + app.globalData.token
            },
            data: {
                projectid: e.currentTarget.dataset.id
            },
            success(res){
                console.log(res)
                var t = "is_collected["+e.currentTarget.dataset.index+"]";
                that.setData({
                    [t]: false
                })
            },
        })
        }

        else{
            wx.request({
                url: 'http://172.17.175.235/user/project/collect',
                method: "POST",
                  header: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + app.globalData.token
                  },
                  data: {
                      projectid: e.currentTarget.dataset.id
                  },
                  success(res){
                      console.log(res)
                      var t = "is_collected["+e.currentTarget.dataset.index+"]";
                      that.setData({
                          [t]: true
                      })
                  },
              })
        }
        
    }
})