// pages/my_star_course/my_star_course.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_title_list:[
            "初识Python","分支结构","循环结构","函数与模块"
        ],
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
    }
})