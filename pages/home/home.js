import request from '../../lib/request';

const app = getApp();

Page({
  data: {
    items: app.globalData.items
  },
  onLoad: function (options) {
    // wx.showToast({ title: "页面加载完成" });
    request.get('lessons/lesson-pack/all-list')
      .then(
        res => {
          console.log(res)
        },
        error => {
          console.log(error)
        }
      )
  }
});