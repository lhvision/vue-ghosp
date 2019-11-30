// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import router from './router'
import store from './store'
import './vee-validate'
import { Button } from 'mint-ui';
// 执行一次mock-server
import './mock/mock-server'
// 注册全局组件
Vue.component(Header.name, Header)
Vue.component(Star.name, Star)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
