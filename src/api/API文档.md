# 接口文档

## 目录：
[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
[5、获取一次性验证码](#5获取一次性验证码)<br/>
[6、用户名密码登陆](#6用户名密码登陆)<br/>
[7、发送短信验证码](#7发送短信验证码)<br/>
[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
[10、用户登出](#10用户登出)<br/>

## 1、根据经纬度获取位置详情
     
### 请求URL：
	http://localhost:3000/position/:geohash

### 示例：
[http://localhost:3000/position/40.10038,116.36867](http://localhost:3000/position/40.10038,116.36867)

### 请求方式：
	GET

### 参数类型：param

	|参数		|是否必选 |类型     |说明
	|geohash    |Y       |string   |经纬度

### 返回示例：

	{
      "code": 0,
      "data": {
        "address": "北京市昌平区337省道",
        "city": "北京市",
        "geohash": "40.10038,116.36867",
        "latitude": "40.10038",
        "longitude": "116.36867",
        "name": "昌平区北七家宏福科技园(337省道北)"
      }
    }

## 2、获取食品分类列表

### 请求URL：
	http://localhost:3000/index_category

### 请求方式：
	GET

### 参数类型：
	无

### 返回示例：
	{
	  "code": 0,
	  data: [
              {
                id: 1,
                is_in_serving: true,
                description: "0元早餐0起送，每天都有新花样。",
                title: "预订早餐",
                link: "",
                image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                icon_url: "",
                title_color: "",
                __v: 0
              },
              {
                id: 65,
                is_in_serving: true,
                description: "",
                title: "土豪推荐",
                image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                link: "",
                icon_url: "",
                title_color: "",
                __v: 0
              },
              ... 共n条数据
            ]
	}


## 3、根据经纬度获取商铺列表

### 请求URL：
	http://localhost:3000/shops

### 示例：
[http://localhost:3000/shops?latitude=40.10038&longitude=116.36867](http://localhost:3000/shops?latitude=40.10038&longitude=116.36867)

### 请求方式：
	GET

### 参数类型：query
	|参数          |是否必选  |类型     |说明|
	|latitude      |Y        |string   |纬度|
	|longitude     |Y       |string    |经度|

### 返回示例：
	{
	  "code": 0,
	  data: [
              {
                name: "肯德基",
                address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
                id: 1,
                latitude: 31.38098,
                longitude: 121.50146,
                location: [
                  121.50146,
                  31.38098
                ],
                phone: "1232313124324",
                category: "快餐便当/简餐",
                supports: [
                  {
                    description: "已加入“外卖保”计划，食品安全有保障",
                    icon_color: "999999",
                    icon_name: "保",
                    id: 7,
                    name: "外卖保",
                    _id: "591bec73c2bbc84a6328a1e5"
                  }
                ],
                status: 0,
                recent_order_num: 615,
                rating_count: 389,
                rating: 1.6,
                promotion_info: "他依然有人有人有人有人有人",
                piecewise_agent_fee: {
                  tips: "配送费约¥5"
                },
                opening_hours: [
                  "8:30/20:30"
                ],
                license: {
                  catering_service_license_image: "",
                  business_license_image: ""
                },
                is_new: true,
                is_premium: true,
                image_path: "/img/shop/15c1513a00615.jpg",
                identification: {
                  registered_number: "",
                  registered_address: "",
                  operation_period: "",
                  licenses_scope: "",
                  licenses_number: "",
                  licenses_date: "",
                  legal_person: "",
                  identificate_date: null,
                  identificate_agency: "",
                  company_name: ""
                },
                float_minimum_order_amount: 20,
                float_delivery_fee: 5,
                distance: "19.5公里",
                order_lead_time: "40分钟",
                description: "好吃的",
                delivery_mode: {
                  color: "57A9FF",
                  id: 1,
                  is_solid: true,
                  text: "蜂鸟专送"
                },
                activities: [
                  {
                    icon_name: "减",
                    name: "满减优惠",
                    description: "满30减5，满60减8",
                    icon_color: "f07373",
                    id: 1,
                    _id: "591bec73c2bbc84a6328a1e7"
                  }
                ],
              }
            ]
	}


## 4、根据经纬度和关键字搜索商铺列表

### 请求URL：
	http://localhost:3000/search_shops
	例子: http://localhost:3000/search_shops?keyword=test&geohash=40.10038,116.36867
	
### 请求方式：
    GET

### 参数类型：query
	|参数          |是否必选  |类型     |说明|
	|geohash      |Y       |string    |经纬度
	|keyword      |Y       |string    |关键字

### 返回示例：
	{
      "code": 0,
      "data": [
        {
          "name": "test_shop",
          "address": "广东省广州市海珠区马涌直街20号",
          "id": 1196,
          "latitude": 23.09499,
          "longitude": 113.26166,
          "location": [
            113.26166,
            23.09499
          ],
          "phone": "18320326523",
          "category": "鲜花蛋糕/面包",
          "supports": [
            {
              "description": "准时必达，超时秒赔",
              "icon_color": "57A9FF",
              "icon_name": "准",
              "id": 9,
              "name": "准时达",
              "_id": "5ad00b4febf543051ea2e5f6"
            },
            {
              "description": "该商家支持开发票，请在下单时填写好发票抬头",
              "icon_color": "999999",
              "icon_name": "票",
              "id": 4,
              "name": "开发票",
              "_id": "5ad00b4febf543051ea2e5f5"
            }
          ],
          "status": 1,
          "recent_order_num": 444,
          "rating_count": 246,
          "rating": 4,
          "promotion_info": "便靓正",
          "piecewise_agent_fee": {
            "tips": "配送费约¥5"
          },
          "opening_hours": [
            "09:00/21:30"
          ],
          "license": {
            "catering_service_license_image": "162bcabb96f9264.jpg",
            "business_license_image": "162bcabb9869263.jpg"
          },
          "is_new": true,
          "is_premium": true,
          "image_path": "162bcab6f889262.jpg",
          "identification": {
            "registered_number": "",
            "registered_address": "",
            "operation_period": "",
            "licenses_scope": "",
            "licenses_number": "",
            "licenses_date": "",
            "legal_person": "",
            "identificate_date": null,
            "identificate_agency": "",
            "company_name": ""
          },
          "float_minimum_order_amount": 20,
          "float_delivery_fee": 5,
          "distance": "2124.6公里",
          "order_lead_time": "31小时27分钟",
          "description": "普通商店",
          "delivery_mode": {
            "color": "57A9FF",
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
          },
          "activities": [
            {
              "icon_name": "减",
              "name": "满减优惠",
              "description": "参加活动满减优惠",
              "icon_color": "f07373",
              "id": 1,
              "_id": "5ad00b4febf543051ea2e5f7"
            }
          ],
          "__v": 0
        },
        {
          "name": "test",
          "address": "浙江省杭州市余杭区高教路阿里巴巴西溪园区2号楼",
          "id": 1271,
          "latitude": 30.27817,
          "longitude": 120.022003,
          "location": [
            120.022003,
            30.27817
          ],
          "phone": "111",
          "category": "快餐便当/简餐",
          "supports": [
            {
              "description": "已加入“外卖保”计划，食品安全有保障",
              "icon_color": "999999",
              "icon_name": "保",
              "id": 7,
              "name": "外卖保",
              "_id": "5ad7101aebf543051ea30192"
            },
            {
              "description": "准时必达，超时秒赔",
              "icon_color": "57A9FF",
              "icon_name": "准",
              "id": 9,
              "name": "准时达",
              "_id": "5ad7101aebf543051ea30191"
            },
            {
              "description": "该商家支持开发票，请在下单时填写好发票抬头",
              "icon_color": "999999",
              "icon_name": "票",
              "id": 4,
              "name": "开发票",
              "_id": "5ad7101aebf543051ea30190"
            }
          ],
          "status": 1,
          "recent_order_num": 820,
          "rating_count": 305,
          "rating": 4.2,
          "promotion_info": "111",
          "piecewise_agent_fee": {
            "tips": "配送费约¥5"
          },
          "opening_hours": [
            "05:30/05:45"
          ],
          "license": {
            "catering_service_license_image": "162d816cf909817.png",
            "business_license_image": "162d816c82e9816.png"
          },
          "is_new": true,
          "is_premium": true,
          "image_path": "162d81696a79815.png",
          "identification": {
            "registered_number": "",
            "registered_address": "",
            "operation_period": "",
            "licenses_scope": "",
            "licenses_number": "",
            "licenses_date": "",
            "legal_person": "",
            "identificate_date": null,
            "identificate_agency": "",
            "company_name": ""
          },
          "float_minimum_order_amount": 20,
          "float_delivery_fee": 5,
          "distance": "1265.1公里",
          "order_lead_time": "18小时13分钟",
          "description": "111",
          "delivery_mode": {
            "color": "57A9FF",
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
          },
          "activities": [],
          "__v": 0
        }
      ]
    }

## 5、获取一次性验证码
     
### 请求URL：
	http://localhost:3000/captcha

### 请求方式：
	GET

### 返回示例：
    


## 6、用户名密码登陆
     
### 请求URL：
	http://localhost:3000/login_pwd

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|name       |Y       |string   |用户名
	|pwd        |Y       |string   |密码
	|captcha    |Y       |string   |验证码

### 返回示例：
    * 登陆成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "name": "aaa"
        }
      }
    * 登陆失败
      {
        "code": 1,
        "msg": "用户名或密码不正确!"
      }


## 7、发送短信验证码
     
### 请求URL：
	http://localhost:3000/sendcode

### 示例：
[http://localhost:3000/sendcode?phone=13716962779](http://localhost:3000/sendcode?phone=13716962779)

### 请求方式：
	GET

### 参数类型: query

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号

### 返回示例：
	* 成功:
		{
			"code": 0,
		}
	* 失败:
		{
			"code": 1, 
			"msg": "短信验证码发送失败"
		}
      
      
## 8、手机号验证码登陆
     
### 请求URL：
	http://localhost:3000/login_sms

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号
	|code        |Y       |string   |验证码

### 返回示例：
    * 登陆成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "phone": "13716962779"
        }
      }
    * 登陆失败
      {
        "code": 1,
        "msg": "手机号或验证码不正确"
      }
      
### 9、根据会话获取用户信息

#### 请求URL：
	http://localhost:3000/userinfo

#### 请求方式：
	GET

#### 返回示例：
	* 获取成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "phone": "13716962779"
        }
      }
    * 获取失败
      {
        "code": 1,
        "msg": "请先登陆"
      }
      

### 10、用户登出

#### 请求URL：
	http://localhost:3000/logout

#### 请求方式：
	GET

#### 返回示例：
    {code: 0}