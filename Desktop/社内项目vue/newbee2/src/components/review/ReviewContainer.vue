<template>
  <complex></complex>
  <!-- <ReviewQA></ReviewQA> -->
  <review-total></review-total>
  <div id="n-review-btn" class="n-review-btn">
    <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
      <span>商品レビューを書く</span
      ><i class="g-i g-i-arrow-r" aria-hidden="true"></i>
    </button>
  </div>
  <hr />
  <review-list></review-list>
</template>

<script setup>
import complex from "../exhibit/complex.vue";
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";
import ReviewQA from "./ReviewQA.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
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
/* .g-btn {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
} */
</style>
