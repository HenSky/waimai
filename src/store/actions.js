import {
  reqAddress,
  reqFoodsType,
  reqShopList
<<<<<<< HEAD
} from '../api/api.js'// 导入获取数据的api
=======
} from '../api/api.js' // 导入获取数据的api
>>>>>>> bc5e756ebe4480718d928ed8f6afe556b26326eb

import {
  RECEIVE_ADDRESS, // 接收地址
  RECEIVE_SHOPLIST, // 接收商铺列表
  RECEIVE_GOODSTYPE // 接收食品列表
} from './mutations-type.js'

export default {
  // 获取地址
<<<<<<< HEAD
  // async getAddress ({ commit, state }) {
  //   // 拼接经纬度
  //   let geohash = state.latitude + ',' + state.longitude
  //   // 通过经纬度,去执行api里面的通过经纬度获取地址方法
  //   let { code, data } = await reqAddress(geohash)
  //   console.log(data, 'data')
  //   if (code !== 0) { // 判断返回数据是否成功(0:成功,1:失败);
  //     return
  //   }
  //   commit(RECEIVE_ADDRESS, { 'address': data })
  // },
  // 获取食品分类列表
  async getFootType ({ commit }) {
=======
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
>>>>>>> bc5e756ebe4480718d928ed8f6afe556b26326eb
    let { code, data } = await reqFoodsType()
    if (code !== 0) { // 判断返回数据是否成功(0:成功,1:失败);
      return
    }
    commit(RECEIVE_GOODSTYPE, { 'foodsType': data })
  },
  // 根据经纬度获取商家列表
<<<<<<< HEAD
  async getShopList ({ commit, state }) {
=======
  async getShopList({ commit, state }) {
>>>>>>> bc5e756ebe4480718d928ed8f6afe556b26326eb
    let { code, data } = await reqShopList(state.latitude, state.longitude)
    if (code !== 0) return
    console.log(data, '商家列表')
    commit(RECEIVE_SHOPLIST, { 'shopList': data })
  }

}
