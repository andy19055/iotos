<template>
  <Modal title="Title" v-model="openMenu" :closable="false">
    <div class="circle">
      <div class="ring">
        <a href="javascript:void(0)" class="menuItem fa fa-home fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-comment fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-play fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-camera fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-music fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-user fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-trash-o fa-2x"></a>
        <a href="javascript:void(0)" class="menuItem fa fa-star fa-2x"></a>
      </div>
      <a href="javascript:void(0)" class="center fa fa-th fa-2x"></a>
    </div>
  </Modal>
</template>
<script>
  export default {
    name: "MenuDialog",
    props: {
      openMenu: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data() {
      return {};
    },
    mounted() {
      var items = document.querySelectorAll(".menuItem");
      for (var i = 0, l = items.length; i < l; i++) {
        items[i].style.left =
          (
            50 -
            35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
          ).toFixed(4) + "%";

        items[i].style.top =
          (
            50 +
            35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
          ).toFixed(4) + "%";
      }
      document.querySelector(".center").onclick = function(e) {
        e.preventDefault();
        document.querySelector(".circle").classList.toggle("open");
      };
    }
  };
</script>
