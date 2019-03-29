//my.js
Page({


  data: {
    nick_name:"humansoka",
    headUrl:"/images/head.png",
    "items_link": [
      {
        "id": "1",
        "title": "收货地址",
        "link_url": "/pages/detail/detail",

      },
      {
        "id": "2",
        "title": "联系客服",
        "link_url": "/pages/my/kefu/kefu",

      },

      


    ]
  

  },
 
  clickTo: function (event) {

    let link_url = event.currentTarget.dataset.url;
  

    wx.navigateTo({
      url: link_url
    })

    
  }
  

 
})