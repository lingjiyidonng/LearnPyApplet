// pages/tabbar_template/tabbar_template.js
let app = getApp()
Page({
    data: {
        index:2, //主页面
    tabBar:[
      {
        name:'教程',
        icon:'icon-teach',
      },
      {
        name:'练习',
        icon:'icon-practise',
      },
      {
        name:'首页',
        icon:'icon-home',
      },
      {
        name:'项目',
        icon:'icon-project',
      },
      {
        name:'个人',
        icon:'icon-my',
      },
      
    ]
      },
    goto(e){
    if(e.currentTarget.dataset.index!=this.data.index){
        this.setData({
        index:e.currentTarget.dataset.index
        })
    }
    },  
    onLoad: function (option) {

    }
    
})