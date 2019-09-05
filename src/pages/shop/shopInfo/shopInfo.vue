<template>
  <!-- <div>shopInfo</div> -->
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="active">
          <van-tag type="primary" class="tag">硅谷专送</van-tag>
          <span>由商家配送提供配送，约28分钟送达，距离1000m</span>
        </div>
        <div class="delivery-money">配送费￥5</div>
      </section>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="active">
          <van-tag type="success" class="tag">首单</van-tag>
          <span>新用户下单立减17元(不与其他活动同享)</span>
        </div>
        <div class="active">
          <van-tag type="danger" class="tag">满减</van-tag>
          <span>满35减19 满65减35</span>
        </div>
        <div class="active">
          <van-tag type="warning" class="tag">特价</van-tag>
          <span>[立减19.5元] 欢乐小食餐</span>
        </div>
        <!-- <div class="active">
        <van-tag type="warning" class="tag">特价</van-tag>
        <span>[立减19.5元] 欢乐小食餐</span>
      </div>
      <div class="active">
        <van-tag type="warning" class="tag">特价</van-tag>
        <span>[立减19.5元] 欢乐小食餐</span>
      </div>
      <div class="active">
        <van-tag type="warning" class="tag">特价</van-tag>
        <span>[立减19.5元] 欢乐小食餐</span>
        </div>-->
      </section>
      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1874949404,1045492423&fm=26&gp=0.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3114641210,3079767940&fm=26&gp=0.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1859362252,3255389245&fm=15&gp=0.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1874949404,1045492423&fm=26&gp=0.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1874949404,1045492423&fm=26&gp=0.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                width="120px"
                height="90px"
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1874949404,1045492423&fm=26&gp=0.jpg"
              />
            </div>
          </div>

          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>-->
          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </div>
      </section>
      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <van-cell-group>
          <van-cell title="品类" value="包子粥店,简餐" />
          <van-cell title="商家电话" value="18501083777" />
          <van-cell title="地址" value="北京市丰台区太平桥44号" />
          <van-cell title="营业时间" value="09:35-24:00" />
        </van-cell-group>
      </section>
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "component_name",
  data() {
    return { swiper: null };
  },
  // computed: {
  //   ...mapState(['info'])
  // },

  mounted() {
    let result = this.$apis.reqShopInfo();
    console.log(result);
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", {
        // autoplay: 3000,
        // speed: 1000,
        // autoplayDisableOnInteraction: false,
        // loop: true,
        // centeredSlides: true,
        slidesPerView: 3
        // pagination: '.swiper-pagination',
        // paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next'
      });
    });
  }
};
</script>
<style lang='less' scoped>
.info-content {
  span {
    font-size: 13px;
    color: gray;
  }
  .section {
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    padding: 16px 14px 14px;
    font-size: 16px;
    color: #666;
    .section-title {
      color: #000;
      font-weight: 700;
      line-height: 16px;
      margin-bottom: 16px;
    }
    .active {
      margin-top: 16px;
    }
    .tag {
      color: #fff;
      margin-right: 10px;
    }
    .delivery-money {
      margin-top: 5px;
      font-size: 13px;
    }

    .swiper-slide {
      width: 120px;
      height: 90px;
      // background: skyblue;
      margin-right: 12px;
    }
  }
}
</style>
