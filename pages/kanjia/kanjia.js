import server from './server'
console.log(server);
const app = getApp();

const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow,
    isEventRuleModalVisible: false,
    isFetching: false, // 是否为首次执行onShow,
    userInfo: app.globalData.userInfo,
    messages: [],
    goodsInfo: {},
    records: []
  },
  // 页面载入时
  async onLoad(e) {
    this.init(e)
    this.fetchData()
  },
  // 页面初始化
  init(e) { },
  // 页面准备好时
  onReady() { },
  // 页面显示时
  onShow() {
    const { isFirstOnShow } = this.data

    if (isFirstOnShow) {
      // 首次执行时
      this.setData({
        isFirstOnShow: false,
      })
      return
    }
  },
  // 页面隐藏时
  onHide() { },
  // 页面卸载时
  onUnload() { },
  // 下拉页面时
  onPullDownRefresh() { },
  // 到达页面底部时
  onReachBottom() { },
  // 页面滚动时
  onPageScroll() { },
  // 分享时，注：onShareAppMessage不能为async异步函数，会导致不能及时取得返回值，使得分享设置无效
  onShareAppMessage() {
    const title = ''
    const path = ''
    const imageUrl = ``
    return ({
      title,
      path,
      imageUrl
    })
  },
  showModal() {
    this.setData({isEventRuleModalVisible: true})
  },
  closeModal() {
    this.setData({isEventRuleModalVisible: false})
  },
  // 获取数据
  async fetchData() {
    this.setData({ isFetching: true })
    return await Promise.all([
      server.getOrderRecord(),
      server.getGoodsInfo(),
      server.getHelpRecords()
    ])
      .then(
        res => {
          console.log('success', res);
          this.setData({
            messages: res[0],
            goodsInfo: res[1],
            records: res[2]
          })
        },
        error => {
          console.log('success', error)
        }
      )
      .then(
        () => {
          console.log('complete')
          this.setData({ isFetching: false })
        }
      )
  },
}

Page(pageOptions)
