Component({
  "options": {
    "multipleSlots": true
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
      console.log('customMethod')
    }
  }
})