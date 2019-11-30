// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入文件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// // 引入模块
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'
// 声明使用
Vue.use(Vuex)
// 暴露
export default new Vuex.Store({
  state, // 总的store
  mutations, // 总的mutations
  actions, // 总的actions
  getters, // 总的getters
  modules: {
    msite,
    shop,
    user
  }
})
