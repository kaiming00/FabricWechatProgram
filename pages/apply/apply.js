Page({
  data: {
    firstValue:'',
    secondValue:'',
    thirdValue:'',
    dialogKey: '',
    showText: false,
    showMultiText: false,
    showTextAndTitle: false,
    showMultiTextAndTitle: false,
  },

  showok:function() {
    if(this.data.firstValue==''||this.data.secondValue==''||this.data.thirdValue==''){
      wx.showToast({
        title: '不是有效输入！',
        icon: 'none',
        duration: 2000
      })
    }
  else{
    
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    
    var common_Interval = setTimeout(()=>
    {
       console.log("hello World");
       wx.switchTab({
        url: '../index/index'
        });
    }, 2000)

    // 跳转到tabar界面
  
  }
},
});
