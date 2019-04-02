// pages/cart/cart.js
Page({
  data: {
    isAllSelect: false,
    "cart_sum":120000.00,
    "btn_disable":"",
    cart_list:[
      {
        "id":1,
        "isSelect": false,
        "input_num":1,
        "min_num":"btn_disable2",
        "max_num": "",
        "cart_imgUrl":"/images/youka.jpg",
        "cart_cont_title":"中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price":"200000.00",
      },
      {
        "id": 2,
        "input_num": 4,
        "min_num": "",
        "max_num": "btn_disable2",
        "isSelect": false,
        "cart_imgUrl": "/images/youka2.jpg",
        "cart_cont_title": "中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price": 2000.00,
      },
      {
        "id": 3,
        "input_num": 4,
        "min_num": "",
        "max_num": "btn_disable2",
        "isSelect": false,
        "cart_imgUrl": "/images/youka2.jpg",
        "cart_cont_title": "中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price": 2000.00,
      },
      {
        "id": 4,
        "input_num": 4,
        "min_num": "",
        "max_num": "btn_disable2",
        "isSelect": false,
        "cart_imgUrl": "/images/youka2.jpg",
        "cart_cont_title": "中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price": 2000.00,
      },
      {
        "id": 5,
        "input_num": 4,
        "min_num": "",
        "max_num": "btn_disable2",
        "isSelect": false,
        "cart_imgUrl": "/images/youka2.jpg",
        "cart_cont_title": "中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price": 2000.00,
      },
      {
        "id": 6,
        "input_num": 4,
        "min_num": "",
        "max_num": "btn_disable2",
        "isSelect": false,
        "cart_imgUrl": "/images/youka2.jpg",
        "cart_cont_title": "中国石化加油卡500元 自动充值全国通用自动充值全国通用",
        "cart_cont_price": 2000.00,
      }
  

    ],

    
  },
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
  
    let id = e.target.dataset.id,
     

      index = parseInt(e.target.dataset.index);
    this.data.cart_list[index].isSelect = !this.data.cart_list[index].isSelect;
   
    this.setData({
     
      cart_list: this.data.cart_list,
   
    })
  },
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.cart_list.length; i++) {
        this.data.cart_list[i].isSelect = true;
        
      }
    }
    else {
      for (i = 0; i < this.data.cart_list.length; i++) {
        this.data.cart_list[i].isSelect = false;
      }
      
    }
    this.setData({
      cart_list: this.data.cart_list,
      isAllSelect: !this.data.isAllSelect,
     
    })
  },


  
  
});