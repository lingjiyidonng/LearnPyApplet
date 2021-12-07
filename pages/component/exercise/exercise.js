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
        },
        problem_list:{
            type:Array,
            value:  [{problemid: 1,
                        level: 1,
                        is_solve: false
                    },],
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        num_list:[
            "1","2","3","4","5","6"
        ],
    },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            // 登录
            wx.login({
                success: res => {
                    var that = this
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    if (res.code) {
                        wx.request({
                            url: 'http://172.17.175.235/user/login',
                            method: "POST",
                            header: {
                                'Content-Type': 'application/json',
                                //'content-type': 'application/x-www-form-urlencoded'
                            },
                            data: {
                                code: res.code,
                                // username: 
                            },
                            success(res) {
                                //console.log(res)
                                app.globalData.token = res.data.data.token;
                                console.log(app.globalData.token) //拿到后将token存入全局变量  以便其他页面使用
                                wx.request({
                                    url: "http://172.17.175.235/user/problem/getlist",
                                    method: "GET",
                                    header: {
                                        "content-type": "application/json",
                                        "Authorization": "Bearer " + app.globalData.token
                                    },
                                    success: function (res) {
                                        that.setData({
                                            problem_list: res.data.data.problemlist,
                                        })
                                        //console.log(res)
                                    }
                                })
                            }
                        })
                        //res = JSON.parse(res); //字符串转为对象 JSON字符串->JSON对象
                        //res = JSON.stringify(res) //对象->字符串
                    } else {
                        console.log('登陆失败')
                    }
                }
            })
        },
        hide: function () {},
        resize: function () {},
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toExercise:function(e){
            console.log("go to exercise detail")
            var that = this
            var t = that.data.problem_list[e.currentTarget.dataset.id]
            wx.navigateTo({
              url: "/pages/exercise_detail/exercise_detail?problemid=" + t.problemid
            })
        },

        star_delete:function (e) {
            var that = this
            console.log(e.currentTarget.dataset.id)
            if(this.data.problem_list[e.currentTarget.dataset.id].is_solve)
            {
                console.log("this problem is solved")
                //delete
                wx.request({
                    url: 'http://172.17.175.235/user/problem/solve',
                    method: "DELETE",
                    header: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer " + app.globalData.token
                    },
                    data: {
                      problemid: that.data.problem_list[e.currentTarget.dataset.id].problemid,
                      // delete project id 
                    },
                    success(res){
                      console.log(res)  
                      var t = "problem_list["+e.currentTarget.dataset.id+"].is_solve";
                      that.setData({
                        [t]: false,
                      });
                    }
                  })

            }
            else{
                console.log("this problem is not solved")
                //star
                wx.request({
                  url: 'http://172.17.175.235/user/problem/solve',
                  method: "POST",
                  header: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + app.globalData.token
                  },
                  data: {
                    problemid: that.data.problem_list[e.currentTarget.dataset.id].problemid,
                    // star project id 
                  },
                  success(res){
                    console.log(res)  
                    var t = "problem_list["+e.currentTarget.dataset.id+"].is_solve";
                    that.setData({
                      [t]: true,
                    });
                  }
                })
            }
        }

        
    }
})