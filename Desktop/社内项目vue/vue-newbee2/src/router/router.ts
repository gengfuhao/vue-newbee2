import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import infoCart from "../pages/infoCart.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      path: "/goods/detail/:goodsId",
      component: GoodsDetail,
      props: true,
    },
    {
      path: "/info/cart",
      component: infoCart,
      props: true,
    },
  ],
});
