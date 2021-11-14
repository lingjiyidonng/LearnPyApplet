// pages/everyday_project/everyday_project.js

Page({
        data:{
            article : ''// 用于绑定组件的数据使用
        },
        onClick: function (e) {
            var url = "" + e.currentTarget.dataset.str;
            if (url === 'Directory') {
                wx.redirectTo({
                    url: "../" + url + "/" + url
                });
            }
            else {
                wx.navigateTo({
                    url: "../" + url + "/" + url
                });
            }
        },
    
        
    })

