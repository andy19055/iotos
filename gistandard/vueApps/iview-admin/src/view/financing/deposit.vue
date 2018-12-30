<template>
  <iframe src="http://localhost:8081/#/dashboard" width="100%" height="100%" style="border:none"></iframe>
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