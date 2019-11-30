// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from '../mutations-type'
import { reqAddress, reqCategorys, reqShops } from '../../api'
const state = {
  // 经度
  longitude: '116.36867',
  // 纬度
  latitude: '40.10038',
  // 地址信息 
  address: {},
  // 食品分类信息
  categorys: [],
  // 商铺列表信息
  shops: []
}
const mutations =  {
   // 更新地址信息
   [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  // 更新分类信息
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  // 更新商铺信息
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}
const actions = {
  // 获取地址信息
  async getAddress({ state, commit }){
    const { longitude, latitude  } = state
    const result = await reqAddress({ latitude, longitude })
    // 判断是否成功
    if ( result.code === 0 ) {
      const address = result.data
      window.console.log(address)
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 获取分类信息
  async getCategorys({ commit }, cb){
    const result = await reqCategorys()
    // 判断是否成功
    if ( result.code === 0 ) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      typeof cb === 'function' && cb() 
    }
  },
  // 获取商铺列表信息
  async getShops({ state, commit }){
    const { longitude, latitude  } = state
    const result = await reqShops({ longitude, latitude })
    // 判断是否成功
    if ( result.code === 0 ) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}