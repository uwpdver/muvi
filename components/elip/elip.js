const componentOptions = {
  // 组件选项
  options: {
    multipleSlots: false,
  },
  behaviors: [],
  properties: {
    line: {
      type: Number,
      value: 1,
    }
  },
  // 组件数据
  data: {
    isShowAll: false, // 展示更多按钮是否处于隐藏状态
  },
  // 数据监听器
  observers: {},
  // 组件方法
  methods: {
    toggleShowAll: function() {
      this.setData({isShowAll: !this.data.isShowAll});
    }
  }
}

Component(componentOptions)
