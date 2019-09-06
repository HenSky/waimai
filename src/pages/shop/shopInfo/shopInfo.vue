<template>
  <!-- <div>shopInfo</div> -->
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="active">
          <van-tag type="primary" class="tag">{{list.description}}</van-tag>
          <span>由商家配送提供配送，约{{list.deliveryTime}}分钟送达，距离{{list.distance}}</span>
        </div>
        <div class="delivery-money">配送费￥{{list.deliveryPrice}}</div>
      </section>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="active" v-for="(support,index) in list.supports" :key="index">
          <van-tag type="success" class="tag">{{support.name}}</van-tag>
          <!-- <span class="content-tag">
            <span class="mini-tag">{{support.name}}</span>
          </span>-->
          <span class="activity-content">{{support.content}}</span>
        </div>
        <!-- <div class="active">
          <van-tag type="danger" class="tag"></van-tag>
          <span>满35减19 满65减35</span>
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
            <div class="swiper-slide" v-for="(pic,index) in list.pics" :key="index">
              <img
                width="100%"
                height="90px"
                :src="pic"
              />
            </div>
            <!-- <div class="swiper-slide">
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
            </div> -->
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <van-cell-group>
          <van-cell title="品类" :value="list.category" />
          <van-cell title="商家电话" :value="list.phone" />
          <van-cell title="地址" :value="list.address" />
          <van-cell title="营业时间" :value="list.workTime" />
        </van-cell-group>
      </section>
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'component_name',

  data() {
    return {
      swiper: null,
      list: {}
      // supportClasses: ['activity-green', 'activity-red', 'activity-orange']
    }
  },
  created() {
    this.mounted()
  },
  methods: {
    async mounted() {
      let result = await this.$apis.reqShopInfo()
      this.list = result.data

      console.log(this.list)
      console.log(result)
      this.$nextTick(() => {
        this.swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 12
        })
      })
    }
  }
}
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
      // .content-tag {
      color: #fff;
      margin-right: 10px;
      // width: 36px;
      // height: 18px;
      // display: inline-block;
      // border: 1px solid #000;
      // .activity-red {
      //   background-color: red;
      // }
      // .activity-green {
      //   background-color: green;
      // }
      // .activity-orange {
      //   background-color: orange;
      // }
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
