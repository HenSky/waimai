<template>
  <div class="profile">
    <HeadTop />
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <router-link class="user-info-top" tag="p" to="/login">登录/注册</router-link>
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
import HeadTop from "../../components/HeadTop/HeadTop.vue";

export default {
  name: "component_name",
  data() {
    return {};
  },
  components: {
    HeadTop
  }
};
</script>
<style lang='less' scoped>
.profile {
  .profile-number {
    border-top: 1px solid #fff;
    height: 100px;
    display: flex;
    padding: 20px 10px;
    box-sizing: border-box;
    background-color: #fff;
    align-items: center;
    border-bottom: 1px solid #eee;
    .profile-link {
      position: relative;
      display: block;
      background: #fff;
      width: 100%;
    }
    .profile_image {
      float: left;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: top;
      .icon-person {
        background: #e4e4e4;
        font-size: 62px;
        color: #7e8c8d;
      }
    }
    .user-info {
      margin-top: 8px;
      margin-left: 74px;
      p {
        font-weight: 700;
        font-size: 18px;
        color: #000;
        .user-icon {
          display: inline-block;
          margin-left: -15px;
          margin-right: 5px;
          width: 20px;
          height: 20px;
          font-size: 30px;
          vertical-align: text-top;
        }
        .icon-mobile {
          font-size: 30px;
          vertical-align: text-top;
        }
        .icon-mobile-number {
          font-size: 14px;
          color: #000;
          margin-left: 5px;
        }
      }
      .user-info-top {
        padding-bottom: 8px;
      }
    }
  }
  .arrow {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 15px;
    top: 40%;
    .icon-jiantou1 {
      color: #fff;
      font-size: 5px;
    }
  }

  .profile_info_data {
    position: relative;
    width: 100%;
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    .info_data_list {
      display: flex;
      .info_data_link {
        width: 33%;
        text-align: center;
        border-right: 1px solid #f1f1f1;
        .info_data_top {
          display: block;
          width: 100%;
          font-size: 14px;
          color: #333;
          padding: 15px 5px 10px;
          span {
            display: inline-block;
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
          }
        }
        .info_data_bottom {
          display: inline-block;
          font-size: 14px;
          color: #666;
          font-weight: 400;
          padding-bottom: 10px;
        }
      }
    }
  }

  .list {
    .iconfont:before {
      font-size: 30px;
    }
    .iconfont:nth-child(1):before {
      color: #02a774;
    }
    .iconfont:nth-child(2):before {
      color: #ff5f3e;
    }
    .iconfont:nth-child(3):before {
      color: #f90;
    }
    .iconfont:nth-child(4):before {
      color: #02a774;
    }

    .van-cell--clickable:nth-child(4) {
      margin-top: 10px;
    }
  }
}
</style>
