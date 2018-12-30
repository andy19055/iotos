<template>
  <div>
    <button @click="show = true" style="width:200px;height:100px;">
      <a href="http://localhost:8081/#/dashboard">打开数据大屏</a>
    </button>
    <io-vodal class="wrap" :show="show" :duration="duration" @on-status="status">
      <span slot="head">测试DEMO</span>
      <input type="textarea" slot="body" value="哈哈哈哈哈">
    </io-vodal>
  </div>
</template>

<script>
import ioVodal from "_c/iovodal/iovodal.vue";
import DragList from "_c/drag-list";

export default {
  name: "app",
  components: {
    ioVodal
  },
  data() {
    return {
      duration: 300,
      show: false
    };
  },
  methods: {
    status(param) {
      this.show = param;
    }
  }
};
</script>