// 路由器对象模块
import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import ShopFoods from '../pages/shop/shopFoods/shopFoods.vue'
import ShopInfo from '../pages/shop/shopInfo/shopInfo.vue'
import ShopPinjia from '../pages/shop/shopPinjia/shopPinjia.vue'

Vue.use(Router)

export default new Router({
  // 主要用于判断底部是否显示,加了这个属性后 this.$route 就可以取到属性值,默认就有meta属性
  // meta: {
  //   isShowFooter: true
  // }
  routes: [{
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop/:id',
    component: Shop,
    children: [{
      path: '/shop/foods',
      component: ShopFoods
    },
    {

      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop/:id',
      component: Shop,
      children: [{
        path: '/shop/foods',
        component: ShopFoods
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },
      {
        path: '/shop/pinjia',
        component: ShopPinjia
      },
      {
        path: '',
        redirect: '/shop/foods'
      }
      ]

    }
    ]
  }
  ]
})
