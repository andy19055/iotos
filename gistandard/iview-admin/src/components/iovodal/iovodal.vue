<template>
  <div class="wrap">
    <vodal
      measure="em"
      :show="status"
      :animation="animation"
      :width="28.5"
      :height="17"
      :duration="duration"
      class="my-dialog"
      @hide="showDialog(false)"
    >
      <div class="header" name="head">提示
        <slot name="head"></slot>
      </div>
      <div class="body" name="body">
        <slot class="body" name="body"></slot>
      </div>
      <button class="vodal-confirm-btn" @click="showDialog(false)">确定</button>
      <button class="vodal-cancel-btn" @click="showDialog(false)">取消</button>
    </vodal>
  </div>
</template>

<script>
import Vue from "vue";
import Vodal from "vodal";

Vue.component(Vodal.name, Vodal);

// types: [
//   "zoom",
//   "fade",
//   "flip",
//   "door",
//   "rotate",
//   "slideUp",
//   "slideDown",
//   "slideLeft",
//   "slideRight"
// ];
export default {
  name: "ioVodal",
  components: {
    // Vue,
    Vodal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: "door"
    },
    paddingTop: {
      type: String,
      default: `paddingTop: ${(window.innerHeight - 440) / 2}px`
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      status: this.show
    };
  },
  methods: {
    showDialog(param) {
      this.status = param;
      this.$emit("on-status", param);
    }
  },
  watch: {
    show(newvalue) {
      this.status = newvalue;
    }
  }
};
</script>

<style>
@import "../../../node_modules/vodal/common.css";
@import "../../../node_modules/vodal/rotate.css";
@import "../../../node_modules/vodal/slide-down.css";
@import "../../../node_modules/vodal/slide-left.css";
@import "../../../node_modules/vodal/slide-right.css";
@import "../../../node_modules/vodal/slide-up.css";
@import "../../../node_modules/vodal/zoom.css";
@import "../../../node_modules/vodal/door.css";
@import "../../../node_modules/vodal/flip.css";

/* -- title -- */
.header {
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9e9;
}

/* -- body -- */

.body {
  padding-top: 15px;
}

/* -- button -- */

.vodal-cancel-btn,
.vodal-confirm-btn {
  position: absolute;
  font: inherit;
  bottom: 16px;
  width: 70px;
  padding: 4px 15px;
  border-radius: 3px;
  transition: background 0.2s;
  border: 1px solid #03a9f4;
}

.vodal-confirm-btn {
  color: #fff;
  right: 102px;
  background: #03a9f4;
}

.vodal-confirm-btn:hover {
  background: #0098e3;
}

.vodal-cancel-btn {
  color: #03a9f4;
  right: 16px;
  background: #fff;
}

.vodal-cancel-btn:hover {
  background: #fafafa;
}

.vodal-cancel-btn:focus,
.vodal-confirm-btn:focus {
  outline: none;
}

.vodal-confirm-btn:active {
  background: #0087d2;
}

.vodal-cancel-btn:active {
  background: #fafafa;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px transparent;
}
</style>