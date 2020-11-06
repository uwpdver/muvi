const app = getApp(); 

Page({
  data: {
    items: app.globalData.items
  },
  onShow: function () {
    console.log(this.route)
  },
  filmTap(event) {
    console.log(event);
    console.log(event.target.dataset.id)
    wx.navigateTo({
      url: '../detail/detail',
      success: (result) => {
        console.log(result);
      },
      fail: (error) => {
        console.log(error);
      },
      complete: () => { }
    });
  },
  buttonHandler(event) {
    wx.navigateTo({
      url: '../detail/detail',
      success: (result) => {
        console.log(result);
      },
      fail: (error) => {
        console.log(error);
      },
      complete: () => { }
    });
    // this.setData({
    //   name: "Puzz"
    // }, function(){
    //   // wx.showToast({
    //   //   title: '完成数据修改',
    //   //   duration: 700
    //   // })
    // })
  }
});
