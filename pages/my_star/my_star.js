// pages/my_star/my_star.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title_item_list:[
            "josephmisiti/awesome-machine-learning","wepe/MachineLearning","udacity/machine-learning","rasbt/python-machine-learning-book",
        ],
        title_item_content:[
            "Learning frameworks, libraries and software.","Basic Machine Learning and Deep Learning","Content for Udacity's Machine Learning curriculum","The 'Python Machine Learning (1st edition)' book code repository and info resource",
        ]
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