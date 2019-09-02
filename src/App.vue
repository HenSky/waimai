<template>
  <div id="app">
    <!-- 上半部分路由 -->
    <router-view />
    <!-- v-show主要判断footer组件是否显示 -->
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 导入底部公共组件
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

import { mapActions } from "vuex";
export default {
  name: "component_name",
  mounted() {
    this.getAddress();
  },
  methods: {
    ...mapActions(["getAddress"])
  },
  data() {
    return {};
  },
  components: {
    FooterGuide
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>