<template>
  <div>
    <span class="jian" v-if="foodinfo.count>=1" @click.stop="jian">-</span>
    <span class="num" v-if="foodinfo.count>=1">{{foodinfo.count}}</span>
    <span class="jia" @click.stop="jia">+</span>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "component_name",
  data() {
    return {
      value: 1
    };
  },
  methods: {
    jia() {
      if (this.foodinfo.count) {
        this.foodinfo.count++;
      } else {
        Vue.set(this.foodinfo, "count", 1);
      }
      console.log(this.foodinfo.count);
    },
    jian() {
      this.foodinfo.count--;
    }
  },
  props: {
    foodinfo: Object
  }
};
</script>
<style lang='less' scoped>
.jian {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid green;
  border-radius: 25px;
  color: black;
  background: white;
  font-size: 40px;
  line-height: 12px;
  text-align: center;
  float: left;
}
.num {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin-left: 10px;
}
.jia {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid green;
  border-radius: 25px;
  color: black;
  background: white;
  font-size: 24px;
  line-height: 12px;
  text-align: center;
  float: left;
}
</style>