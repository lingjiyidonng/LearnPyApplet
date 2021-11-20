// pages/component/course/course.js

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
            type: String,
            value: '教程',
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        courseName: ["初始Python", "语言元素", "分支结构", "循环结构", "构造程序逻辑", "函数与模块"],
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
