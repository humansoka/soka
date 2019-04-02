//detail.js
Page({
  data: {
    hiddenName: true,
    movies: [
      { url: '/images/youka.jpg' },
      { url: '/images/youka2.jpg' },
      { url: '/images/youka2.jpg' },
      { url: '/images/youka2.jpg' }
    ],
    "detail_price": 500.00,
    "detail_title": "中国石化加油卡500元 自动充值全国通用中国石化加油卡500元 自动充值全国通用中国石化加油卡500元 自动充值全国通用",
    "information": [
      {
        "id": 1,
        "inf_pro": "快递：",
        "inf_data": "免运费",

      },
      {
        "id": 2,
        "inf_pro": "起购：",
        "inf_data": "4张",

      },
      {
        "id": 3,
        "inf_pro": "库存：",
        "inf_data": "999张",

      },


    ],
    "detail_data": [
      {
        "id": 1,
        "detail_data_name": "充值类型",
        "detail_data_cont": "直充",

      },
      {
        "id": 2,
        "detail_data_name": "品牌",
        "detail_data_cont": "中国石化",

      },
      {
        "id": 3,
        "detail_data_name": "省份",
        "detail_data_cont": "全国通用",

      },
      {
        "id": 4,
        "detail_data_name": "面值",
        "detail_data_cont": "500元",

      },


    ],
    "btm_cart_num" :5,
  }, 

  clickMe: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  }
})