// pages/component/home/home.js

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
            value:'首页',
            
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        dateTitleList: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        date: 0,
    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            const util = require('../../../utils/util.js');
            let time = util.formatTime(new Date());
            console.log('当前日期和时间:', time)
            this.setData({ 
                date: time
            })
            
        },
        hide: function () { },
        resize: function () { },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        click1:function(){
            console.log("click1");
            wx.navigateTo({
              url: '/pages/everyday_exercise/everyday_exercise',
            })
        },
        click2:function(){
            console.log("click2")
            wx.navigateTo({
              url: '/pages/everyday_project/everyday_project',
            })
        },
        

    },
    
})