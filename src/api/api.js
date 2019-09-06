/**
 * 包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import axios from './myAxios.js';

// 根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => axios('/position/' + geohash)

//获取食品分类列表
export const reqFoodsType = () => axios('/index_category')

//根据经纬度获取商家列表
export const reqShopList = (latitude, longitude) => axios('/shops', {
  latitude,
  longitude
})

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => axios('/search_shops', {
  geohash,
  keyword
})
// 6、用户名密码登陆
export const reqPwdLogin = ({
  name,
  pwd,
  captcha
}) => axios('/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => axios('/sendcode', {
  phone
})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => axios('/login_sms', {
  phone,
  code
}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => axios('/userinfo')
// 10、用户登出
export const reqLogout = () => axios('/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => axios('/api/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => axios('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => axios('/goods')

export default {
  reqAddress(geohash) {
    return axios('/position/' + geohash)
  },
  reqFoodsType() {
    return axios('/index_category')
  },
  reqShopList(latitude, longitude) {
    return axios('/shops', {
      latitude,
      longitude
    })
  },
  reqSearchShop(geohash, keyword) {
    return axios('/search_shops', {
      geohash,
      keyword
    })
  },
  reqPwdLogin({
    name,
    pwd,
    captcha
  }) {
    return axios('/login_pwd', {
      name,
      pwd,
      captcha
    }, 'POST')
  },
  reqSendCode(phone) {
    return axios('/sendcode', {
      phone
    })
  },
  reqSmsLogin(phone, code) {
    return axios('/login_sms', {
      phone,
      code
    }, 'POST')
  },
  reqUserInfo() {
    return axios('/userinfo')
  },
  reqLogout() {
    return axios('/logout')
  },
  reqShopInfo() {
    return axios('/info')
  },
  reqShopRatings() {
    return axios('/ratings')
  },
  reqShopGoods() {
    return axios('/goods')
  }
}
