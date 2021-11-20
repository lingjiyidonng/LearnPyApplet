// pages/component/project/project.js.js
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
        name:{
            type:String,
            value:'项目'
        },
        project_item:{
            type:Array,
            value:  [{project: 1,
                    projectname: "Mining Twitter Data with Python",
                    projecturl: "https://marcobonzanini.com/2015/03/02/mining-twitter-data-with-python-part-1/",
                    is_collected: true
                    },],
        },
        current_index:{
            type:Number,
            value:0
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        btn_image: '',
        
        type_num: 8,
        title_name_list:[
            "网络爬虫","网络开发","机器人","数据科学","机器学习","OpenCV","深度学习","其他"
        ],
        type_image:'https://learnpystaticpng.obs.cn-north-1.myhuaweicloud.com/images/project/box3.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        choose_type(e){
            
            this.setData({
                current_index:e.currentTarget.dataset.index,
            })
            var that = this
            wx.request({
                url: 'http://124.70.47.51/user/project/getlist',
                method: "GET",
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + app.globalData.token
                },
                success(res){
                    switch(that.data.current_index){
                        case 0:
                            that.setData({
                                project_item: res.data.msg.网络爬虫,
                            })
                            break;
                        case 1:
                            that.setData({
                                project_item: res.data.msg.网络开发,
                            })
                            break;
                        case 2:
                            that.setData({
                                project_item: res.data.msg.机器人
                            })
                            break;
                        case 3:
                            that.setData({
                                project_item: res.data.msg.数据科学
                            })
                            break;
                        case 4:
                            that.setData({
                                project_item: res.data.msg.机器学习
                            })
                            break;
                        case 5:
                            that.setData({
                                project_item: res.data.msg.OpenCV
                            })
                            break;
                        case 6:
                            that.setData({
                                project_item: res.data.msg.深度学习
                            })
                            break;
                        case 7:
                            that.setData({
                                project_item: res.data.msg.其他
                            })
                            break;
                    }
                    
                },
                
            }),
            console.log("当前project_item列表：")
            console.log(this.data.project_item)
        },
        
        copy_url:function (e) {
            // 传递的参数
            let temp = e.currentTarget.dataset['index'];
            var that = this;
            wx.setClipboardData({
              data: that.data.project_item[temp].projecturl,
              success(res){
                  wx.showToast({
                    title: '复制成功',
                  })
                  console.log(that.data.project_item[temp].projecturl)
              }
            })
            
        }
    },
    

    
})