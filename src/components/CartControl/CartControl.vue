<template>
  <div>
    <span class="jian">-</span>
    <span class="num">1</span>
    <span class="jia">+</span>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  name: "component_name",
    return {
      value: 1
    };
  }
}
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
