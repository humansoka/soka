var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["全部订单", "待付款", "待发货", "待收货"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    
    "order_list": [
      {
        "id": 1,
        "order_id":124121,
        "order_stat":"等待付款",
        order_detail: [{
          "id": 11,
          "orderUrl": "/images/youka.jpg",
          "order_list_title": "中国石化加油卡500元",
          "order_list_price": 500.00,
          "order_list_by": 1,
        }, {
          'id': 12,
            "orderUrl": "/images/youka2.jpg",
            "order_list_title": "中国石化加油卡500元 自动充值全国通用中国石化加油卡500元中...",
            "order_list_price": 2000.00,
            "order_list_by": 2,
        }],
        "order_list_num": 3,
        "total_price":4000.00,
        order_op: [{
          "id":21,
          "op_class":"",
          "op_name":"取消订单",
        },
          {
            "id": 22,
            "op_class": "btn_op",
            "op_name": "确认付款",
          }
        ],

      },
      {
        "id": 2,
        "order_id": 124121,
        "order_stat": "交易成功",
        order_detail: [{
          "id": 11,
          "orderUrl": "/images/youka2.jpg",
          "order_list_title": "中国石化加油卡500元 自动充值全国通用中国石化加油卡500元中...",
          "order_list_price": 2000.00,
          "order_list_by": 2,
        }, 
        ],
        "order_list_num": 3,
        "total_price": 4000.00,
        order_op: [
        {
          "id": 22,
          "op_class": "btn_op",
          "op_name": "再次购买",
        }
        ],

      },
      {
        "id": 3,
        "order_id": 124121,
        "order_stat": "交易关闭",
        order_detail: [{
          "id": 11,
          "orderUrl": "/images/youka2.jpg",
          "order_list_title": "中国石化加油卡500元 自动充值全国通用中国石化加油卡500元中...",
          "order_list_price": 2000.00,
          "order_list_by": 2,
        },
        ],
        "order_list_num": 3,
        "total_price": 4000.00,
        
        order_op: [
          {
            "id": 22,
            "op_class": "",
            "op_name": "删除订单",
          }
        ],
      },
     
    ],

    
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});