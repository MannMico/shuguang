import Vue from 'vue'
Vue.prototype.$setTitle = function (text) {
    document.title = text
}
Vue.prototype.$getPX = function (design, designWidth = 750) { // 750为设计稿宽度
    // 获取窗口尺寸
    let width = document.documentElement.getBoundingClientRect().width
    // 计算缩放比例
    let scale = width / designWidth
    // 获取实时尺寸
    return design * scale
}

Vue.prototype.toThisRoute = function (toThis){
  if (toThis) {
    this.$router.push({
      path: `/${toThis}`
    });
  } else {
    this.$router.push({
      path: '/'
    });
  } 
}