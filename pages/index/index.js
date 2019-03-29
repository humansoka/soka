//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "items": [
      {
        "id": "1",
        "imageUrl": "../../images/youka.jpg",
        "title": "中国石化加油卡500元 自动充值全国通用",
        "price":200.00,
        "start_num":2
      },
      {
        "id": "2",
        "imageUrl": "../../images/youka2.jpg",
        "title": "中国石化加油卡500元 自动充值全国通用",
        "price": 500.00,
        "start_num": 5
      },
      {
        "id": "3",
        "imageUrl": "../../images/youka2.jpg",
        "title": "中国石化加油卡500元 自动充值全国通用", "price": "500.00"
      },
      {
        "id": "4",
        "imageUrl": "../../images/youka2.jpg",
        "title": "中国石化加油卡500元 自动充值全国通用",
        "price": 500.00,
        "start_num": 5
      },
      {
        "id": "5",
        "imageUrl": "../../images/youka2.jpg",
        "title": "中国石化加油卡500元 自动充值全国通用",
        "price": 500.00,
        "start_num": 5
      },
      
     
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  }
  
  
})
