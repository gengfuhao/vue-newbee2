<template>
  <div class="g-bodyArea g-inner">
    <div class="g-layout-detail">
      <complex></complex>
      <send-info-cart></send-info-cart>
      <ReviewQA></ReviewQA>
      <review-total></review-total>
      <div id="n-review-btn" class="n-review-btn">
        <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
          <span>商品レビューを書く</span
          ><i class="g-i g-i-arrow-r" aria-hidden="true"></i>
        </button>
      </div>
      <hr />
      <review-list></review-list>
    </div>
  </div>
</template>

<script>
import complex from "../../components/exhibit/complex.vue";
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";
import ReviewQA from "./ReviewQA.vue";
import { defineComponent } from "vue";
import sendInfoCart from "../cart/sendInfoCart.vue";

export default defineComponent({
  // 已启用类型推断
  components: {
    complex,
    ReviewList,
    ReviewTotal,
    ReviewQA,
    sendInfoCart,
  },
  setup() {
    const route = useRoute();
    const goodsId = route.params.goodsId;
    return {
      goodsId,
    };
  },
});
</script>

<style scoped>
.g-btn,
.g-sm-btn {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.n-review-btn {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
}
.n-review-btn button span {
  padding: 5px 30px !important;
  color: #009e96;
}
.g-btn > .g-i,
.g-btn > .g-s,
.g-sm-btn > .g-i,
.g-sm-btn > .g-s {
  font-size: 1.4rem;
  -ms-grid-row-align: center;
  align-self: center;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.g-i::before {
  float: left;
}
.g-i-arrow-r::before {
  content: "\EA05";
}
.g-inner,
.g-lg-inner {
  width: 100%;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout-detail {
  grid-template-rows: auto auto auto auto auto;

  grid-template-columns: 1fr 330px;
}
.g-layout-sidebar,
.g-layout-detail .g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout-easyorder {
  display: grid;
}
</style>
