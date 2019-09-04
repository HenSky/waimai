/**
 * 包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import axios from './myAxios.js'

// 根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
<<<<<<< HEAD
export const reqAddress = (geohash) => axios('/position/' + geohash)
=======
// export const reqAddress = (geohash) => axios('/position/' + geohash)
>>>>>>> 496563b1ecc12fd3581d00c9a2c232af9cf4df18

// 获取食品分类列表
export const reqFoodsType = () => axios('/index_category')

// 根据经纬度获取商家列表
<<<<<<< HEAD
export const reqShopList = (latitude, longitude) => axios('/shops', {
  latitude,
  longitude
})

// 登录
export const reqPwdLogin = (name, pwd, captcha) => axios('/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
export const reqSendCode = (phone) => axios('/sendcode', {
  phone
})

=======
export const reqShopList = (latitude, longitude) => axios('/shops', { latitude, longitude })

>>>>>>> 496563b1ecc12fd3581d00c9a2c232af9cf4df18
// mock数据
// 获取商家详情信息
export const reqShopInfo = () => axios('/info')
