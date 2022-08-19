import Vue from 'vue'
import App from './App.vue'


import tool from './utils/tools'
Vue.prototype.tool = tool


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
