import Mock from 'mockjs'
import data from './data.json'

let url = 'http://127.0.0.1:4000/api/'
Mock.mock(url + '/info', { code: 0, data: data.info })// 获取商家信息
Mock.mock(url + '/goods', { code: 0, data: data.goods })// 获取商家食物列表
Mock.mock(url + '/ratings', { code: 0, data: data.ratings })// 获取商家评论
