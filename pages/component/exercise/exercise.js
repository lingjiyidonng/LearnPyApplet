// pages/component/exercise/exercise.js.js
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
            value:'练习'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        num_list:[
            "1","2","3","4","5","6"
        ],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toExercise:function(){
            wx.navigateTo({
              url: '/pages/exercise_detail/exercise_detail',
            })
        }
    }
})