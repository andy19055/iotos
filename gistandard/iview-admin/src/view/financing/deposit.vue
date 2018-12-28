<template>
  <div>
    <button class="btn" @click="status(true)" style="width:200px;height:100px;"></button>
    <io-vodal class="wrap" :show="show" :duration="duration" @on-status="status"></io-vodal>
  </div>
</template>

<script>
import ioVodal from "_c/iovodal/iovodal.vue";

export default {
  name: "app",
  components: {
    ioVodal
  },
  data() {
    return {
      duration: 500,
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