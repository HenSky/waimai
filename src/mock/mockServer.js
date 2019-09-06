import Mock from 'mockjs'
import data from './data.js/index.js'

Mock.mock('/info', { code: 0, data: data.info })// 获取商家信息
Mock.mock('/goods', { code: 0, data: data.goods })// 获取商家食物列表
Mock.mock('/ratings', { code: 0, data: data.ratings })// 获取商家评论
