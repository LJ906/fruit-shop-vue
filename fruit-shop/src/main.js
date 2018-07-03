// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import App from './App'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 公共组件挂载全局
import publicComponents from './components/componentsList'
Object.keys(publicComponents).forEach((key) => {
  Vue.component(key, publicComponents[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
