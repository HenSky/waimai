<template>
  <!-- //容器 -->
  <div class="commentBox">
    <!-- 头部 -->
    <div class="BoxTop">
      <!-- 头部上部分区域 -->

      <div class="TopMsg">
        <span>首单</span>
        <p>新用户下单立减17元(不与其他活动同... 8个优惠<img src=""></p>
      </div>
      <!-- 切换栏 -->

      <van-tabs color='#3ab991' title-active-color='#3ab991' v-model="active">
  <van-tab title="点餐"></van-tab>
  <van-tab title="评价"></van-tab>
  <van-tab title="商家"></van-tab>

</van-tabs>
   
      <!-- 头部的下部分区域 -->

      <div class="star">
        <div class="starLeft">
          <h1>4.2</h1>
          <p>综合得分</p>
          <p>高于周边商家99%</p>
          </div>
        <div class="starRight">
          <div class="starGroup">
            <van-rate v-model="keys"  class="star-1"/>
          <van-rate v-model="value"  class="star-2"/>
          </div>
          <div class="commentSend">
             <p>服务态度<span>4.1</span></p>
           <p>商品评分<span>4.3</span></p>
         
           </div>
          <p class="SendTime">送达时间 <span>28分钟</span></p> 
          
          
         </div>
      </div>
    </div>

    <div class="space"></div>
    <!-- 评论下部分 -->
    <div class="commentFooter">
      <!-- 下部分的头部 -->
  

   

      <div class="commentHeader">
        
        <a :class="{active:id===0}" @click="id===0">全部24</a>
        <a :class="{active:id===1}" @click="id===1">满意18</a>
        <a :class="{active:id===2}" @click="id===2">不满意6</a>
      </div>
     
      <div class="commentChecked">
         <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
       
        <p>只看有内容的评价</p></div>
      <!-- 用户评论区 -->
      <div class="userComment">
        <!-- 用户头像 -->
        <img src />
        <div class="userinfo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   
   data() {
    return {
       checked: true,
      value: 3,
      keys:3,
      id:0,
      list:['']
    };
  },methods:{
    
  }
  
};
</script>
<style lang='less' scoped>
.commentBox{
  background-color: #ffffff;

.TopMsg {
  padding: 6px;
  border: 1px solid #f5f5f5;
  display: flex;
  width: 80%;
  margin: 5px auto;
  span {
    background-color: #70bc46;
    color: #ffffff;
    padding: 3px;
  }
  p {
    margin-left: 4px;
    line-height: 18px;
  }
}
.commenTab {
  display: flex;
  justify-content: space-around;
 
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;
    width: 33px;
   
  }
}

.star {
  display: flex;
  height: 106px;
  .starLeft {
    width: 30%;
    
    background-color: #ffffff;
    h1{
      color:#ffa113;
      font-size: 16px;
      padding: 27px 0 0 45px;
    }
    p:nth-of-type(1){
      padding: 9px 0 0 40px;
    }
    p:nth-of-type(2){
        color: #b1b5ba;
        padding: 8px 0 0 6px;
    }
  }
  .starRight {
  
    width: 70%;
    
    background-color: #ffffff;
    .starGroup{
      width: 160px;
    .star-1{
      margin: 26px 0 0 31px;
    }
     .star-2{
      margin:10px 0 0 31px;
    }
    }
    .commentSend{
      width: 100px;
      position: relative;
      top:-55px;
      left:160px;
      line-height: 30px;
      p{
        span{
          color:#ffa826;
        }
      }
     
    }
     .SendTime{
       position: relative;
       top:-50px;
       left: 20px;
      span{
        color:#b1b5ba;
      }
    
    }
  }
}
.space {
  background-color: #f3f5f7;
  height: 16px;
 
}
.commentHeader{
 
  height: 72px;
 
   display: flex;
  a{
    margin:17px 0 0 20px;
    background-color: #dbdddf;
     display: inline-block;
    
      width: 56px;
      height: 29px;
      line-height: 29px;
      text-align: center;
  }
  a.active{
    background-color:#07c160;
    color:#ffffff;
  }
}
.commentChecked{
  padding-bottom: 10px;
  margin-left: 20px;
  display: flex;
  p{
    line-height: 20px;
    text-indent: 6px;
  }
}
.userComment{
  border: 1px solid red;
  height: 30px;
}
.userinfo{
  border: 1px solid red;
   height: 50px;

}
}
</style>