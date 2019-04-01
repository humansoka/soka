//my.js
Page({


  data: {
    nick_name:"humansoka",
    headUrl:"/images/head.png",
    "items_link": [
      {
        "id": "1",
        "title": "收货地址",
        "link_url": "/pages/my/order/order",

      },
      {
        "id": "2",
        "title": "联系客服",
        "link_url": "/pages/my/kefu/kefu",

      },

      


    ],
    "order_tab": [
      {
        "id": "1",
        "order_name": "待付款",
        "order_num":123,
        "iconUrl": "/images/icon_fukuan.png",
        "order_url": "/pages/my/order/order",
     

      },
      {
        "id": "2",
        "order_name": "待发货",
        "order_num": 13,
        "iconUrl": "/images/icon_fahuo.png",
        "order_url": "/pages/my/order/order",

      },
     
      {
        "id": "3",
        "order_name": "待收货",
        "order_num": 3,
        "iconUrl": "/images/icon_shouhuo.png",
        "order_url": "/pages/my/order/order",

      },



    ]
  

  },
 
  clickTo: function (event) {

    let link_url = event.currentTarget.dataset.url;
  

    wx.navigateTo({
      url: link_url
    })

    
  },
   clickOrder: function (event) {

    let order_url = event.currentTarget.dataset.url;


    wx.navigateTo({
      url: order_url
    })


  }
  

 
})