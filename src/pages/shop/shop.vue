<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/foods">食物列表</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/pinjia">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">商家信息</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ShopHeader from "./shopHeader/shopHeader.vue";
export default {
  name: "component_name",
  data() {
    return {};
  },
  components: {
    ShopHeader
  },
  mounted() {
    //alert(this.$router);
    this.$store.dispatch("getShopInfo");

    this.$store.dispatch("getShopRatings");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  bottom-border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

    a {
      display: block;
      position: relative;

      &.router-link-active {
        color: #02a774;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a774;
        }
      }
    }
  }
}
</style>