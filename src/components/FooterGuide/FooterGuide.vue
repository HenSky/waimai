<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/msite">外卖</van-tabbar-item>
    <van-tabbar-item icon="search" to="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/order">订单</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'component_name',
  data () {
    return {
      active: 0 // 底部切换标识
    }
  }
}
</script>
<style lang='less' scoped>
</style>
