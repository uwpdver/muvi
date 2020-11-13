const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow
    filmInfo: {
      id: 1,
      name: '无间道',
      alias: '無間道',
      publishedYear: '2002',
      desc: '1991年，香港黑帮三合会会员刘健明（刘德华）听从老大韩琛（曾志伟）的吩咐，加入警察部队成为黑帮卧底，韩琛许诺刘健明会帮其在七年后晋升为见习督察。1992年，警察训练学校优秀学员陈永仁（梁朝伟）被上级要求深入到三合会做卧底，终极目标是成为韩琛身边的红人。2002年，两人都不负重望，也都身背重压，刘健明渐想成为一个真正的好人，陈永仁则盼着尽快回归警察身份。重案组从陈永仁手中获悉一批毒品交易情报，锁紧目标人物韩琛，没料情报被刘健明泄出，双方行动均告失败。但此事将双方均有卧底的事实暴露，引发双方高层清除内鬼的决心。命运迥异又相似的刘健明和陈永仁开始在无间道的旅程中接受严峻考验。',
      relatedPeople: [
        {
          id: '1',
          name: '刘伟强',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
        {
          id: '2',
          name: '麦兆辉',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },{
          id: '1',
          name: '刘德华',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
        {
          id: '2',
          name: '梁朝伟',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
        {
          id: '3',
          name: '黄秋生',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
        {
          id: '4',
          name: '曾志伟',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
        {
          id: '5',
          name: '郑秀文',
          avatar: 'https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg'
        },
      ],
      categorys: [{
          id: 1,
          name: '剧情'
        },
        {
          id: 1,
          name: '悬疑'
        },
        {
          id: 1,
          name: '犯罪'
        }
      ],
      cover: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2564556863.webp',
      images: [
        'https://img9.doubanio.com/view/photo/raw/public/p1182116984.jpg',
        'https://img1.doubanio.com/view/photo/raw/public/p2581669417.jpg',
        'https://img3.doubanio.com/view/photo/raw/public/p2588860640.jpg'
      ]
    },
    commends: [{
      user: {
        nickname: '法老',
        avatar: ''
      },
      content: '清晨他结束了病痛与寒冷。那晚我在台上演唱了亲密爱人。北风中的乐队配着蜡烛燃尽了痛苦。雨水冲刷墓碑和那颗杨树。生命到尽头，却也解了你的相思之苦。我会带着你的期待走向我的前路'
    }]
  },
  // 页面载入时
  onLoad(e) {
    this.init(e)
  },
  // 页面初始化
  init(e) {
  },
  // 页面准备好时
  onReady() {},
  // 页面显示时
  onShow() {
    const {
      isFirstOnShow
    } = this.data
    console.log(this.route)
    if (isFirstOnShow) {
      // 首次执行时
      this.setData({
        isFirstOnShow: false,
      })
      return
    }
  },
  // 页面隐藏时
  onHide() {},
  // 页面卸载时
  onUnload() {},
  // 下拉页面时
  onPullDownRefresh() {},
  // 到达页面底部时
  onReachBottom() {},
  // 页面滚动时
  onPageScroll() {},
  // 分享时，注：onShareAppMessage不能为async异步函数，会导致不能及时取得返回值，使得分享设置无效
  onShareAppMessage() {
    /* const title = ''
    const path = ''
    const imageUrl = ``

    return {
      title,
      path,
      imageUrl,
    } */
  },
}

Page(pageOptions)