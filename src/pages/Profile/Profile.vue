<template>
  <div class="profile">
    <HeadTop />
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </a>
    </section>

    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0.00</span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span style="color:#ff5f3e;">0</span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link" style="border:0;">
          <span class="info_data_top">
            <span style="color:#6ac20b;">0</span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>

    <div class="list">
      <van-cell is-link class="iconfont icon-order-s">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-cell is-link class="iconfont icon-jifen">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">积分商城</span>
        </template>
      </van-cell>
      <van-cell is-link class="iconfont icon-vip">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">硅谷外卖会员卡</span>
        </template>
      </van-cell>
      <van-cell is-link class="iconfont icon-fuwu">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">服务中心</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue';

export default {
  name: 'component_name',
  data() {
    return {}
  },
  components: {
    HeadTop
  }
}
</script>
<style lang='less' scoped>
</style>
