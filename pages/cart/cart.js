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
    startX: 0, //开始坐标
    startY: 0

    
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

  onLoad: function () {
    for (var i = 0; i < 10; i++) {
      isTouchMove: false //默认全隐藏删除
    }

    this.setData({
      cart_list: this.data.cart_list
    })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.cart_list.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      cart_list: this.data.cart_list
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.cart_list.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      cart_list: that.data.cart_list
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    this.data.cart_list.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      cart_list: this.data.cart_list
    })
  }
  
  
});