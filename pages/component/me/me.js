// pages/component/me/me.js.js
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
            value:'个人'
        },
        user_name: '',
        user_image: ''
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            this.setData({
                user_name: app.globalData.userInfo.nickName,
                user_image: app.globalData.userInfo.avatarUrl
            })
            
        },
        hide: function () {},
        resize: function () {},
    },
    
    /**
     * 组件的方法列表
     */
    methods: {
        toMyStar:function(){
            wx.navigateTo({
              url: '/pages/my_star/my_star',
            })
        },
        toMyCode:function(){
            wx.navigateTo({
              url: '/pages/my_code/my_code',
            })
        }
    }
})