
import {
  RECEIVE_ADDRESS, // 接收地址
  RECEIVE_SHOPLIST, // 接收商铺列表
  RECEIVE_GOODSTYPE, // 接收食品列表,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutations-type.js'

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
    console.log(state.address, 1111)
  },
  [RECEIVE_GOODSTYPE](state, { foodsType }) {
    state.foodsType = foodsType
  },
  [RECEIVE_SHOPLIST](state, { shopList }) {
    state.shopList = shopList
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  }

}
