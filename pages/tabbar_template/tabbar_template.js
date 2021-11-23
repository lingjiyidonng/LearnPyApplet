// pages/tabbar_template/tabbar_template.js
let app = getApp()
Page({
    data: {
        index:2, //主页面
    tabBar:[
      {
        name:'教程',
        icon:'icon-teach',
      },
      {
        name:'练习',
        icon:'icon-practise',
      },
      {
        name:'首页',
        icon:'icon-home',
      },
      {
        name:'项目',
        icon:'icon-project',
      },
      {
        name:'个人',
        icon:'icon-my',
      },
      
    ]
      },
      
    goto(e){
      if(e.currentTarget.dataset.index!=this.data.index){
        this.setData({
        index:e.currentTarget.dataset.index
        })
        // if (this.data.index==3) {
        //   var that = this
        //     wx.request({
        //         url: 'http://124.70.47.51/user/project/getlist',
        //         method: "GET",
        //         header: {
        //             'Content-Type': 'application/json',
        //             'Authorization': "Bearer " + app.globalData.token
        //         },

        //         success(res){
        //           that.setData({
        //             project_item: res.data.msg.网络爬虫,
        //           })
                  
        //         },
                
        //     })
        //     console.log("当前project_item列表：")
        //     console.log(project_item)
        // }
      }
      
    },  
    onLoad: function (option) {

      console.log("onload")
      
    },

    
})