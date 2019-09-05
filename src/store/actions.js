import {
  reqAddress,
  reqFoodsType,
  reqShopList,
  reqUserInfo,
  reqLogout
} from '../api/api.js' // 导入获取数据的api

import {
  RECEIVE_ADDRESS, // 接收地址
  RECEIVE_SHOPLIST, // 接收商铺列表
  RECEIVE_GOODSTYPE, // 接收食品列表
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutations-type.js'

export default {
  // 获取地址
  async getAddress({ commit, state }) {
    // 拼接经纬度
    let geohash = state.latitude + ',' + state.longitude
    // 通过经纬度,去执行api里面的通过经纬度获取地址方法
    let { code, data } = await reqAddress(geohash)
    console.log(data, 'data')
    if (code !== 0) { // 判断返回数据是否成功(0:成功,1:失败);
      return
    }
    commit(RECEIVE_ADDRESS, { 'address': data })
  },
  // 获取食品分类列表
  async getFootType({ commit }) {
    let { code, data } = await reqFoodsType()
    if (code !== 0) { // 判断返回数据是否成功(0:成功,1:失败);
      return
    }
    commit(RECEIVE_GOODSTYPE, { 'foodsType': data })
  },
  // 根据经纬度获取商家列表
  async getShopList({ commit, state }) {
    let { code, data } = await reqShopList(state.latitude, state.longitude)
    if (code !== 0) return
    console.log(data, '商家列表')
    commit(RECEIVE_SHOPLIST, { 'shopList': data })
  },
  // TODO: 同步记录用户信息
  recordUser ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },

  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },

  // 异步登出
  async logout ({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }

}
