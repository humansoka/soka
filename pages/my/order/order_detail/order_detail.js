// pages/my/order/order_detail/order_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "order_detail_status":"等待付款",
    "address_person": "李某某",
    "address_tel": "13515713382",
    "address_location": "杭州杭州杭州市拱墅区莱茵矩阵国际杭州市拱墅区莱茵矩阵国际杭州市拱墅区莱茵矩阵国际杭州市拱墅区莱茵矩阵国际杭州市拱墅区莱茵矩阵国际杭州市拱墅区莱茵矩阵国际",
    "order_list": [
      {
        "id": 1,
        "orderUrl": "/images/youka.jpg",
        "order_list_title": "中国石化加油卡500元",
        "order_list_price": 2000.00,
        "order_list_by": 2,

      },
      {
        "id": 2,
        "orderUrl": "/images/youka2.jpg",
        "order_list_title": "中国石化加油卡500元 自动充值全国通用中国石化加油卡500元中...",
        "order_list_price": 3000.00,
        "order_list_by": 1,

      },
      
    ],
    "order_total_list": [
      {
        "id": 1,
        "order_total_title":"创建时间",
        "order_total_data":"2019-03-03 10:30:25",
        "order_total_money":"",

      },
      {
        "id": 2,
        "order_total_title": "订单编号",
        "order_total_data": "121511111",
        "order_total_money": "",
      },
      {
        "id": 3,
        "order_total_title": "合计总额",
        "order_total_data": 2500.00,
        "order_total_money": "￥",
      },
      {
        "id": 4,
        "order_total_title": "运费",
        "order_total_data": 0.00,
        "order_total_money": "￥",

      },
      {
        "id": 5,
        "order_total_title": "实付金额",
        "order_total_data": 2500.00,
        "order_total_money": "￥",
        "order_total_class":"order_total_class",

      },

    ],
    
    "order_op": [{
      "id": 1,
      "op_class": "",
      "op_name": "取消订单",
    },
    {
      "id": 2,
      "op_class": "btn_op",
      "op_name": "确认付款",
    }
    ],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})