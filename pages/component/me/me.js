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
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        user_name:'LingJiYi_Dong',
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