<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <star-rating
              :show-rating="false"
              v-bind:star-size="25"
              :read-only="true"
              v-model:rating="rating"
            ></star-rating>
          </p>
          <p class="g-reviewList_user">
            <b>{{ nickName }}</b
            >さん &emsp;{{ reviewDate }}
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ goodsName }}</p>
        <p class="g-reviewList_h">{{ title }}</p>
        <p>
          {{ content }}
        </p>

        <ul class="g-sm-flow-sm g-lg-flow g-reviewList_pics">
          <viewer :images="photo">
            <img
              v-for="minphoto in photo"
              :key="minphoto"
              class="g-fw p-review-gallery_photo"
              :src="minphoto"
              alt=""
              aria-expanded="false"
              aria-controls="p-reviewGallerySwipModal"
            />
          </viewer>
        </ul>

        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike0"
            id="js-hitLike"
            data-count="0"
            data="626fd36d2e90a2006100013d"
            data-clickable=""
          >
            <span @click.once="addCountClick">
              <i
                style="cursor: pointer"
                class="g-s g-s-like-g material-symbols-rounded"
              >
                thumb_up
              </i>
            </span>

            <span>参考になった（{{ newCount }}人）</span></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, defineProps, ref } from "vue";
import { useStore } from "../../store/index";

import StarRating from "vue-star-rating";

const props = defineProps({
  //评价分数
  rating: Number,
  //用户名
  nickName: Number,
  //商品名字
  goodsName: String,
  //参考人数
  count: Number,
  //评价标题
  title: String,
  //评价内容
  content: String,
  //评价日期
  reviewDate: String,

  photo1: String,
  photo2: String,
  photo3: String,
  photo4: String,
  photo5: String,
});
const { rating, nickName, goodsName, title, content, reviewDate } =
  toRefs(props);

let photo = [
  props.photo1,
  props.photo2,
  props.photo3,
  props.photo4,
  props.photo5,
];
let newCount = ref(props.count);

function addCountClick() {
  newCount.value++;
  console.log("!!!!!!!newCount.value", newCount.value);
}
</script>

<style scoped>
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: 30vh;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-flow-sm,
.g-sm-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
  flex-direction: row;
  display: flex;
}
.g-reviewList_pics {
  margin-top: 15px;
  text-align: center;
}
.g-s {
  margin-right: 0.35em;
  display: inline-block;
  vertical-align: middle;
}
.g-reviewList_h {
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.6rem;
  line-height: 1.5;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
li {
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}

b {
  font-weight: bold;
}
</style>
