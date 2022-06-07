<template>
  <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
    <div class="g-score p-reviw-graph-area-score">
      <star-rating
        :show-rating="false"
        v-bind:star-size="25"
        :read-only="true"
        v-model:rating="Rating1.rating"
      ></star-rating>
    </div>

    <div
      class="a-meter g-mater-visble active"
      id="js-mater5"
      data-rate="5"
      style="
        box-shadow: rgb(235, 97, 87) -2px 0px 0px -1px inset,
          rgb(235, 97, 87) 0px 0px 0px 1px inset;
      "
    >
      <div
        class="a-meter-bar"
        :style="{
          width: Rating1.percentage + '%',
        }"
      ></div>
    </div>

    <a
      @click="clickRating(Rating1.rating)"
      style="cursor: pointer"
      class="g-link g-link-visble"
      id="js-rate5"
      data-rate="5"
      title="レビューの49％に星5つが付いています。"
      data-clickable
      >{{ Rating1.ratingCount }}人</a
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },
  props: {
    Rating1: {
      //获得 1 2 3 4 5 个星星的总人数

      rating: Number,
      ratingCount: Number,
      percentage: Number,
    },
  },

  methods: {
    clickRating(rating) {
      //  this.$store.commit('JIA',this.n)
      let showed = this.$store.getters.getShowd;
      showed = !showed;

      this.filterReviews(rating);
      this.changeShowed(showed);
    },
    ...mapMutations(["filterReviews", "changeShowed"]),
  },
};

// const showMeMore = () => {
//   showed = !showed;
//   store.commit("changeShowed", showed);
//   if (showed) {
//     btnText.value = "レビューをもっと見る";
//   } else {
//     btnText.value = "閉じる";
//   }
// };
</script>
<style scoped>
.p-reviw-graph-area-row-sm {
  display: flex;
  flex-wrap: wrap;
}
.a-meter {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px #f1f1f1;
  background-color: #dbdbdb;
  height: 10px;
  width: calc(100% - 110px - 4em);
  margin-left: 0px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.a-meter .a-meter-bar {
  -webkit-transition: width 0.5s ease;
  transition: width 0.5s ease;
  float: left;
  font-size: 0;
  width: 0;
}
.a-meter .a-meter-bar {
  border-radius: 4px;
  box-shadow: inset -2px 0 0 -1px #a4433c, inset 0 0 0 1px #8d3a34;
  background-color: #e52113;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
}
.g-link-visble {
  text-decoration: underline;
}
.g-score,
.g-sm-score {
  font-size: smaller;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 16px;
}
element.style {
  box-shadow: rgb(235 97 87) -2px 0px 0px -1px inset,
    rgb(235 97 87) 0px 0px 0px 1px inset;
}
element.style {
  width: 49%;
  box-shadow: rgb(235 97 87) -2px 0px 0px -1px inset,
    rgb(235 97 87) 0px 0px 0px 1px inset;
}
</style>
