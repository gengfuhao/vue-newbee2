<template>
  <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p>
  <div>
    <div v-for="(review, index) in reviews" :key="index">
      <review-com :review="review"></review-com>
      <p
        style="border-top: 1px dashed #cccccc; height: 1px; overflow: hidden"
      ></p>
    </div>

    <div v-show="!showed" v-for="(review, index) in reviews2" :key="index">
      <review-com :review="review"></review-com>
      <p
        style="border-top: 1px dashed #cccccc; height: 1px; overflow: hidden"
      ></p>
    </div>
  </div>
  <!-- <div>
    <span @click="showMeMore">{{ btnText }}</span>
  </div> -->
  <p class="g-align-tc">
    <a
      @click="showMeMore"
      class="g-link displaymorereview"
      role="button"
      aria-expanded="false"
      aria-controls="p-reviewMore"
      data-label="閉じる"
      data-accordion='{"scroll":false}'
    >
      <i class="g-i g-i-arrow-d"></i>
      <span style="cursor: pointer"
        >{{ btnText }}（3/<span id="js-reviews-more">{{ reviewCount }}</span
        >）</span
      ></a
    >
  </p>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewCom from "./ReviewCom.vue";
const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;

let btnText = ref("レビューをもっと見る");

//初始化 0--2个展示
onMounted(() => {
  store.dispatch("setReviews", { goodsId: goodsId, offset: 0 });
  store.dispatch("setReviews", { goodsId: goodsId, offset: 3 });
});
let reviews = computed(() => store.getters.getReviews.reviewList);
let reviews2 = computed(() => store.getters.getReviews2.reviewList);
let reviewCount = computed(() => store.getters.getReviews.reviewCount);
let showed = computed(() => store.getters.getShowd);
// computed出来的。。。放在一个叫object的value属性的地方 使用的时候一般要.value
// let reviewCount = reviews.value.length + reviews2.value.length;
// let reviewCount = computed(() => {
//   if (
//     store.getters.getReviews.reviewList != undefined &&
//     store.getters.getReviews2.reviewList != undefined
//   ) {
//     return (
//       store.getters.getReviews.reviewList.length +
//       store.getters.getReviews2.reviewList.length
//     );
//   }
// });

// 点击事件
const showMeMore = () => {
  showed = !showed;
  store.commit("changeShowed", showed);
  if (showed) {
    btnText.value = "レビューをもっと見る";
  } else {
    btnText.value = "閉じる";
  }
};

// computed: {
//   // btnText(){
//   //   return showed === true ? "关闭" : "打开";
//   // }
//   console.log("revivalist里的reviewcount数据是", reviewCount);
//   console.log("revivalist里的review2数据是", reviews2);
//   console.log("revivalist里的review数据是", reviews);
//   console.log("revivalist里的showed数据是", showed);
// }
</script>

<style scoped>
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
}
a {
  text-decoration: none;
  color: #333;
}
.g-link,
.g-sm-link {
  display: inline-flex;
  align-items: center;
}
.g-align-tc,
.g-sm-align-tc {
  text-align: center !important;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_label {
  margin-bottom: 15px;
}

.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 3px 5px;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #fff;
}
</style>
