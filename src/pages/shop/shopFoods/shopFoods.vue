<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            :class="{current:index==currentIndex}"
            v-for="(foodType, index) in shopGoods"
            :key="index"
            @click="currItem(index)"
          >
            <span class="text bottom-border-1px">
              <img class="icon" v-if="foodType.icon" :src="foodType.icon" />
              {{foodType.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapp3wwer">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(foodType, index) in shopGoods" :key="index">
            <h1 class="title">{{foodType.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food, index) in foodType.foods"
                :key="index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售 {{food.sellCount}} 份</span>
                    <span>好评率 100%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import BScroll from "better-scroll"; //滑动库

import CartControl from "../../../components/CartControl/CartControl.vue";

export default {
  name: "component_name",
  data() {
    return {
      scrollY: 0, //动态滚动的scrollY值
      tops: [] //右边所有li的top值 ,数组
    };
  },
  components: {
    CartControl
  },
  methods: {
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
      let scrollType = new BScroll(".menu-wrapper", {
        click: true
      });
      this.srcollFood = new BScroll(".foods-wrapper", {
        probeType: 2,
        click: true
      });
      this.srcollFood.on("scroll", ({ x, y }) => {
        this.scrollY = Math.abs(y);
      });
      // 给右侧列表绑定scroll结束的监听,解决probeType不触发惯性滑动
      this.srcollFood.on("scrollEnd", ({ x, y }) => {
        console.log("scrollEnd", x, y);
        this.scrollY = Math.abs(y);
      });
    },
    currItem(index) {
      //点击左边右边滚动
      //   let y = this.tops[index];
      //   this.scrollY = y;
      //   this.srcollFood.scrollTo(0, -y, 300);

      // 得到目标位置的scrollY
      const scrollY = this.tops[index];
      // 立即更新scrollY(让点击的分类项成为当前分类)
      this.scrollY = scrollY;
      // 平滑滑动右侧列表
      this.srcollFood.scrollTo(0, -scrollY, 300);
    }
  },
  mounted() {
    this.$store.dispatch("getShopGoods", () => {
      //console.log(this, "this");
      //数据异步获取成功后的回调函数
      this.$nextTick(() => {
        this._intiTops();
        this._initScrollY();
      });
    });
  },
  computed: {
    ...mapState(["shopGoods"]),
    currentIndex() {
      //计算属性什么时候执行: 初始和相关数据发生了变化
      //计算属性,返回true或者false,主要看滑动的srcollY是否在tops某2个值的区间
      return this.tops.findIndex((top, index) => {
        return this.scrollY >= top && this.scrollY < this.tops[index + 1];
      });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl';

.goods {
  display: flex;
  position: absolute;
  top: 195px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: $green;
        font-weight: 700;

        .text {
          border-none();
        }
      }

      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        bottom-border-1px(rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      bottom-border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }

      .content {
        flex: 1;

        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>