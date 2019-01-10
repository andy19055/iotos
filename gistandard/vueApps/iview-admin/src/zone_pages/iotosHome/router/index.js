import Vue from "vue";
import Router from "vue-router";
import Index from "../components/index.vue";
// import HelloWorld from "../components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    }
  ]
});
