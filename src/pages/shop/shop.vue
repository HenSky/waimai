<template>
  <div id="box">
    <img
      class="topImg"
      src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
      alt
    />
    <div class="imgHeader">
      <van-icon name="arrow-left" color="white" class="icon" @click="back" size="30px" />
      <img src alt />
    </div>
    <div class="headerText">
      <p class="title">
        <span class="pinpai">品牌</span>
        <span class="mingzi">嘉禾一品(温州水城)</span>
        <span class="tubiao">
          <van-icon name="play" color="black" size="20px" />
        </span>
      </p>
      <p class="title1">
        <span>4.2</span>
        <span>月售90单</span>
        <span>千峰专送</span>
        <span>约28分钟</span>
        <span>距离1000m</span>
      </p>
      <p class="title2">
        <span>首单</span>
        <span>新用户下单立减</span>
        <span>8个优惠</span>
      </p>
    </div>
    <van-tabs v-model="active">
      <van-tab title="点餐">
        <div class="food">
          <div class="food_left">
            <ul>
              <li
                v-for="(food, index) in foods"
                :key="index"
                :class="{liActive:index==currentIndex}"
                @click="itemClick(index)"
              >
                <span>
                  <img width="15px" height="15px" :src="food.icon" v-if="food.icon" alt />
                  {{food.name}}
                </span>
              </li>
            </ul>
          </div>
          <div class="food_right">
            <ul ref="foodsUl">
              <li v-for="(food, index) in foods" :key="index">
                <p class="title">{{food.name}}</p>
                <ul>
                  <li
                    @click="showFoodInfo(foodinfo)"
                    class="img_title"
                    v-for="(foodinfo, index) in food.foods"
                    :key="index"
                  >
                    <div class="img">
                      <img width="57" height="57" alt :src="foodinfo.icon" />
                    </div>
                    <div class="content">
                      <p class="c_title">{{foodinfo.name}}</p>
                      <p class="c_title1">{{foodinfo.description}}</p>
                      <p class="c_title2">
                        <span style="margin-right:10px;">月售{{foodinfo.sellCount}}份</span>
                        <span>好评率{{foodinfo.rating}}%</span>
                      </p>
                      <p class="c_title3">
                        <span class="c3span1" style="color:red">￥{{foodinfo.price}}</span>
                        <span class="c3span2">
                          <CartControl :foodinfo="foodinfo" />
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </van-tab>
      <van-tab title="评价">评价</van-tab>
      <van-tab title="商家">
        <ShopInfo />
      </van-tab>
    </van-tabs>
    <div class="footer">
      <div class="footer1">
        <van-icon name="cart" size="52px" @click="carShow=!carShow" />
      </div>
      <div class="footer2">
        <div>￥0</div>
        <div>另需配送费￥{{shopInfo.deliveryPrice}}元</div>
      </div>
      <div class="footer3">
        <van-button type="danger">提交</van-button>
      </div>
    </div>

    <van-popup v-model="carShow" position="bottom" :style="{ height: '20%' }">
      <div style="display:flex;juset;justify-content: space-between;background:#eee;">
        <span style="display:block;width:50%;">购物车</span>
        <span style="display:block;width:50%;text-align:right">清空</span>
      </div>
      <ul style>
        <li style="display:flex;juset;justify-content: space-between;margin-top:5px;">
          <span>红豆薏米粥</span>
          <span>
            <CartControl />
          </span>
        </li>
        <li style="display:flex;juset;justify-content: space-between;margin-top:5px;">
          <span>红豆薏米粥</span>
          <span>
            <CartControl />
          </span>
        </li>
        <li style="display:flex;juset;justify-content: space-between;margin-top:5px;">
          <span>红豆薏米粥</span>
          <span>
            <CartControl />
          </span>
        </li>
        <li style="display:flex;juset;justify-content: space-between;margin-top:5px;">
          <span>红豆薏米粥</span>
          <span>
            <CartControl />
          </span>
        </li>
        <li style="display:flex;juset;justify-content: space-between;margin-top:5px;">
          <span>红豆薏米粥</span>
          <span>
            <CartControl />
          </span>
        </li>
      </ul>
    </van-popup>

    <van-popup v-model="infoShow" get-container="#box" :style="{ height: '60%' }">
      <img width="256" height="256" :src="foodInfo.image" alt />
      <p>{{foodInfo.name}}</p>
      <p>月售91份 好评率{{foodInfo.rating}}%</p>
      <p>
        ￥{{foodInfo.price}}
        <CartControl :foodinfo="foodInfo" />
      </p>
    </van-popup>
  </div>
</template>
<script>
import ShopInfo from "./shopInfo/shopInfo";

import BScroll from "better-scroll"; // 滑动库

import CartControl from "../../components/CartControl/CartControl.vue";

import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "component_name",
  data() {
    return {
      active: 0, // tab切换的标识,
      carShow: false, //购物车显示隐藏标识
      infoShow: false, //商品信息显示隐藏标识
      scrollY: 0, //动态滚动的scrollY值
      tops: [], //右边所有li的top值 ,数组
      foodInfo: {}
    };
  },
  methods: {
    ...mapActions(["getShopInfo", "getShopGoods"]),
    back() {
      this.$router.back();
    },
    _intiTops() {
      //初始化获取食物li的tops
      let top = 0;
      let tops = [];
      tops.push(top);
      //console.log(this.$refs.foodsUl.children);
      //this.$refs.foodsUl.children 是个伪数组 HTMLCollection(9)
      Array.prototype.slice.call(this.$refs.foodsUl.children).forEach(el => {
        //console.log(el.clientHeight);
        top += el.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },
    _initScrollY() {
      //动态获取srcollY
      let scrollType = new BScroll(".food_left", {
        click: true
      });
      this.srcollFood = new BScroll(".food_right", {
        probeType: 2,
        click: true
      });
      this.srcollFood.on("scroll", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
      // 给右侧列表绑定scroll结束的监听,解决probeType不触发惯性滑动
      this.srcollFood.on("scrollEnd", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
    },
    itemClick(index) {
      //const scrollY = this.tops[index];
      // 立即更新scrollY(让点击的分类项成为当前分类);
      this.scrollY = this.tops[index];
      // 平滑滑动右侧列表
      this.srcollFood.scrollTo(0, -this.scrollY, 300);
    },
    showFoodInfo(foodinfo) {
      //查看商品详情
      this.foodInfo = foodinfo;
      this.infoShow = true;
    }
  },
  components: {
    CartControl,
    ShopInfo
  },
  computed: {
    ...mapState(["shopInfo", "foods"]),
    currentIndex() {
      return this.tops.findIndex((top, index) => {
        return this.scrollY >= top && this.scrollY < this.tops[index + 1];
      });
    }
  },
  mounted() {
    console.log(this.currentIndex);
    this.getShopInfo();
    this.getShopGoods();
  },
  watch: {
    foods(newVal) {
      this.$nextTick(() => {
        this._intiTops();
        this._initScrollY();
      });
    }
  }
};
</script>

<style lang="less" scope>
#box {
  .van-popup--bottom {
    bottom: 51px;
  }
  .topImg {
    width: 66px;
    height: 66px;
    position: absolute;
    left: 50%;
    margin-left: -33px;
    top: 8px;
    box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
  }
  .imgHeader {
    height: 50px;
    width: 100%;
    background: url("https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png");
  }
  .icon {
    line-height: 50px;
  }
  .headerText {
    padding-top: 24px;
    background: white;
    box-sizing: border-box;
    width: 100%;
    height: 110px;
    .title {
      display: block;
      margin-top: 20px;
      margin-bottom: 15px;
      width: 280px;
      margin: auto;
      height: 30px;
      line-height: 30px;
      .pinpai {
        font: 14px;
        background: yellow;
        padding: 2px;
        margin-right: 15px;
      }
      .mingzi {
        font-size: 20px;
        margin-right: 15px;
      }
      .tubiao {
        padding: 2px;
        margin-right: 15px;
        padding-top: 10px;
      }
    }
    .title1 {
      display: block;
      margin-bottom: 15px;
      height: 30px;
      line-height: 30px;
      width: 280px;
      margin: auto;
      span {
        margin-right: 10px;
        font-size: 12px;
      }
    }
    .title2 {
      width: 280px;
      margin: auto;
      border: 1px solid #eee;
      span {
        font-size: 12px;
      }
    }
  }
  .food {
    display: flex;
    .food_left {
      width: 25%;
      background: #f3f5f7;
      height: 333px;
      overflow: hidden;
      ul {
        li {
          box-sizing: border-box;
          height: 54px;
          line-height: 54px;
          border-bottom: 1px solid #eee;
          text-align: center;
          font-size: 14px;
        }
        .liActive {
          background: white;
        }
      }
    }
    .food_right {
      overflow: hidden;
      width: 75%;
      height: 333px;
      .img_title {
        height: 97px;
        background: white;
        display: flex;
        .img {
          width: 30%;
          margin: 17px 2px 19px 13px;
        }
        .content {
          width: 70%;
          margin-top: 10px;
          p {
            line-height: 20px;
            height: 20px;
            font-size: 14px;
            color: #93999f;
          }
          .c_title {
            font-weight: bold;
            color: black;
          }
          .c_title3 {
            display: flex;
            justify-content: space-between;
            .c3span1 {
              display: block;
            }
            .c3span2 {
              display: block;
              margin-right: 10px;
            }
          }
        }
      }
      .title {
        height: 26px;
        background: #f3f5f7;
        font-size: 14px;
        line-height: 26px;
        text-indent: 1em;
        border-left: 2px solid #93999f;
      }
    }
  }

  .footer {
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 50px;
    background: white;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    .footer1 {
      width: 20%;
    }
    .footer2 {
      width: 50%;
      display: flex;
      flex-direction: column;
      div {
        margin-top: 5px;
      }
    }
    .footer3 {
      width: 30%;
      button {
        width: 100%;
        height: 100%;
        padding: 0px;
      }
    }
  }
}
</style>
