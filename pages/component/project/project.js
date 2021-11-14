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
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        list_num:10,
        title_name_list:[
            "机器学习","OpenCV","爬虫","语言识别","自然语言处理",
        ],
        title_item_list:[
            "josephmisiti/awesome-machine-learning","wepe/MachineLearning","udacity/machine-learning","rasbt/python-machine-learning-book",
        ],
        title_item_content:[
            "Learning frameworks, libraries and software.","Basic Machine Learning and Deep Learning","Content for Udacity's Machine Learning curriculum","The 'Python Machine Learning (1st edition)' book code repository and info resource",
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})