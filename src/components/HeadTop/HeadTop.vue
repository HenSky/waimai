<template>
  <div>
    <van-nav-bar title="标题" left-arrow>
      <div slot="right">{{right_title}}</div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {};
  },
  props: {
    right_title: String
  }
};
</script>
<style lang='less' scoped>
</style>