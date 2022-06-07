<template>
  <div class="p-reviw-graph-area">
    <h2 class="g-h-2 g-h-i p-hd">
      <span class="material-symbols-outlined"> cloud </span>
      <span>レビュー</span>
    </h2>
    <div class="p-reviw-graph-area-left-row">
      <span class="p-reviw-graph-area-comp-eva">総合評価</span>
    </div>
    <div
      class="p-reviw-graph-area-score p-reviw-graph-area-average p-reviw-graph-area-average-sm"
    >
      <span class="g-digit p-reviw-graph-area-g-score">
        {{ reviewTotal.ratingAvg }}</span
      >
    </div>

    <!-- star -->
    <div class="p-reviw-graph-area-left-row p-reviw-graph-area-left-row-score">
      <div class="g-score p-reviw-graph-area-g-score">
        <star-rating
          :show-rating="false"
          v-bind:star-size="25"
          :read-only="true"
          v-model:rating="reviewTotal.ratingAvg"
        ></star-rating>
      </div>
    </div>

    <div @click="clickOnePage" style="cursor: pointer" class="p-g-left-row">
      <a class="g-link" id="js-totalrate" data-clickable="">
        <span
          >(<span id="js-reviews">{{ reviewTotal.reviewCount }}</span
          >)</span
        >
      </a>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    reviewTotal: {
      //综合评价分数
      ratingAvg: Number,
      //评价人数
      reviewCount: Number,
    },
  },

  methods: {
    clickOnePage() {
      this.$store.dispatch("setReviews2", {
        goodsId: this.$route.params.goodsId,
        offset: 3,
      });
      this.$store.dispatch("setReviews", {
        goodsId: this.$route.params.goodsId,
        offset: 0,
      });
    },
  },
};
</script>

<style scoped>
.g-score,
.g-sm-score {
  font-size: smaller;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 16px;
}

.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
</style>
