<template>
  <div id="box">
    <img
      class="topImg"
      src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
      alt
    />
    <div class="imgHeader">
      <van-icon name="arrow-left" color="white" class="icon" size="30px" />
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
              <li>
                <span>优惠</span>
              </li>
              <li v-for="(item, index) in 30" :key="index">
                <span>
                  <img
                    width="15px"
                    height="15px"
                    src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png"
                    alt
                  />
                  优惠
                </span>
              </li>
            </ul>
          </div>
          <div class="food_right">
            <ul>
              <li v-for="(item, index) in 5" :key="index">
                <p class="title">优惠</p>
                <ul>
                  <li class="img_title">
                    <div class="img">
                      <img
                        width="57"
                        height="57"
                        alt
                        src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                      />
                    </div>
                    <div class="content">
                      <p class="c_title">南瓜粥</p>
                      <p class="c_title1">甜粥</p>
                      <p class="c_title2">
                        <span style="margin-right:10px;">月售91份</span>
                        <span>好评率100%</span>
                      </p>
                      <p class="c_title3">
                        <span class="c3span1" style="color:red">$8</span>
                        <span class="c3span2">
                          <CartControl />
                        </span>
                      </p>
                    </div>
                  </li>
                  <li class="img_title">
                    <div class="img">
                      <img
                        width="57"
                        height="57"
                        alt
                        src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                      />
                    </div>
                    <div class="content">
                      <p class="c_title">南瓜粥</p>
                      <p class="c_title1">甜粥</p>
                      <p class="c_title2">
                        <span style="margin-right:10px;">月售91份</span>
                        <span>好评率100%</span>
                      </p>
                      <p class="c_title3">
                        <span style="margin-right:90px;color:red">$8</span>
                        <span>加减</span>
                      </p>
                    </div>
                  </li>
                  <li class="img_title">
                    <div class="img">
                      <img
                        width="57"
                        height="57"
                        alt
                        src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                      />
                    </div>
                    <div class="content">
                      <p class="c_title">南瓜粥</p>
                      <p class="c_title1">甜粥</p>
                      <p class="c_title2">
                        <span style="margin-right:10px;">月售91份</span>
                        <span>好评率100%</span>
                      </p>
                      <p class="c_title3">
                        <span style="margin-right:90px;color:red">$8</span>
                        <span>加减</span>
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
      <van-tab title="商家"><ShopInfo/></van-tab>
    </van-tabs>
    <div class="footer">
      <div class="footer1">
        <van-icon name="cart" size="52px" />
      </div>
      <div class="footer2">
        <div>$0</div>
        <div>另需配送费$4元</div>
      </div>
      <div class="footer3">
        <van-button type="danger">提交</van-button>
      </div>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
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

    <van-popup v-model="show" get-container="#box" :style="{ height: '60%' }">
      <img
        width="256"
        height="256"
        src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
        alt
      />
      <p>南瓜粥</p>
      <p>月售91份 好评率100%</p>
      <p>
        $9
        <CartControl />
      </p>
    </van-popup>
  </div>
</template>
<script>
import ShopInfo from './shopInfo/shopInfo'

import BScroll from 'better-scroll' // 滑动库

import CartControl from '../../components/CartControl/CartControl.vue'

export default {
  name: 'component_name',
  data() {
    return {
      active: 0, // tab切换的标识,
      show: true
    }
  },
  components: {
    CartControl,
    ShopInfo
  },
  mounted() {
    console.log(document.getElementsByClassName('span'), 'testSpan')

    console.log(document.querySelector('.food_left'), '111111111111111')
    this.$nextTick(() => {
      console.log(
        document.querySelector('.food_left'),
        '2222222222222222222222'
      )

      let scrollLeft = new BScroll('.food_left')
      let scrollRight = new BScroll('.food_right')
    })
  }
}
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
      width: 20%;
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
      }
    }
    .food_right {
      overflow: hidden;
      width: 80%;
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
