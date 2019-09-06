import {
  reqAddress,
  reqFoodsType,
  reqShopList,
  reqShopInfo,
  reqShopGoods
} from '../api/api.js' // 导入获取数据的api

import {
  RECEIVE_ADDRESS, // 接收地址
  RECEIVE_SHOPLIST, // 接收商铺列表
  RECEIVE_GOODSTYPE, // 接收食品列表
  RECEIVE_SHOPINFO,
  RECEIVE_FOODS
} from './mutations-type.js'

export default {
  // 获取地址
  async getAddress({ commit, state }) {
    // 拼接经纬度
    let geohash = state.latitude + ',' + state.longitude
    // 通过经纬度,去执行api里面的通过经纬度获取地址方法
    let { code, data } = await reqAddress(geohash)
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
    commit(RECEIVE_SHOPLIST, { 'shopList': data })
  },
  //获取商家详细信息
  async getShopInfo({ commit, state }) {
    let { code, data } = await reqShopInfo();
    console.log(data, "调用方法");
    commit(RECEIVE_SHOPINFO, { "shopInfo": data });
  },
  //获取商家食物列表
  async getShopGoods({ commit, state }) {
    let { code, data } = await reqShopGoods();
    commit(RECEIVE_FOODS, { "foods": data });
  }
}
