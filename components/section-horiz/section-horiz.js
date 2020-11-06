Component({
  "options": {
    
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: '',
    },
    items: {
      type: Array,
      value: [],
    },
  }
})