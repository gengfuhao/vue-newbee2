<template>
  <h1>照片展示</h1>
  <div class="p-grid_gallery g-grid_item g-sm-full">
    <div
      class="p-gallery p-gallery-static"
      aria-hidden="true"
      data-breakpoints=""
      captionlength="1"
    >
      <div class="p-gallery_top">
        <div
          class="p-gallery_photo"
          role="button"
          aria-expanded="false"
          aria-controls="p-galleryModal"
          tabindex="0"
        >
          <div
            class="swiper-container p-gallery_photo_el swiper-container-fade swiper-container-horizontal"
          >
            <!-- 大照片 -->
            <div class="swiper-wrapper js-gallery-images">
              <div
                class="swiper-slide p-gallery_item swiper-slide-active"
                data-caption="面倒なシーツの取りかえがラクちん。"
                style="
                  width: 395px;
                  opacity: 1;
                  transform: translate3d(0px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy swiper-lazy-loaded"
                  :src="bigPhotoUrl"
                  alt="面倒なシーツの取りかえがラクちん。"
                  imgcount="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 照片下标 -->
      <div class="p-gallery_fraction js-images-count" data-total="3">1 / 3</div>

      <div class="captionArea-static fixed" style="height: auto">
        <div
          class="p-gallery_caption captionText-static"
          short="面倒なシーツの取りかえがラクちん。"
          show="short"
          long="面倒なシーツの取りかえがラクちん。"
          rowcount="1"
          index="0"
        >
          たて・よこの伸縮性に優れ、無駄なく「のびて、ピタッ！」とつけられる！取り付け、着脱も簡単♪
        </div>
        <div class="" id="js-caption-more-static" aria-hidden="false">
          <p class="g-align-tc">
            <a
              class="g-link displayMoreGalleryCaption"
              captiontype="static"
              aria-expanded="false"
              data-label="閉じる"
              style="display: none"
            >
              <i class="g-i g-i-arrow-d"
                ><span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span></i
              ><span style="display: block">もっと見る</span>
            </a>
          </p>
        </div>
      </div>

      <div class="p-gallery_thumbs">
        <div
          class="swiper-container p-gallery_thumbs_el swiper-container-horizontal"
        >
          <div
            class="swiper-wrapper js-gallery-thumbnails"
            style="transition-duration: 1ms"
            :style="{
              transform: 'translate3d(-' + moveNumber + 'px, 0px, 0px)',
            }"
          >
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 395px"
              v-for="photo in newPhoto"
            >
              <div
                v-for="photo1 in photo"
                class="p-gallery_thumbs_item p-gallery_thumbs_item-active"
                role="button"
                tabindex="0"
                data-index="0"
                :style="{ backgroundImage: 'url(' + photo1 + ')' }"
                @click="bigPhoto(photo1)"
              ></div>
            </div>
          </div>
        </div>
        <div class="p-gallery_controls">
          <div
            class="p-gallery_btn p-gallery_prev swiper-button-disabled"
            @click="leftMove"
          >
            <i class="g-i g-i-arrow-l" aria-hidden="true"
              ><span class="material-symbols-outlined">
                arrow_back_ios
              </span></i
            >
          </div>
          <div
            class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets"
          >
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></span
            ><span class="swiper-pagination-bullet"></span
            ><span class="swiper-pagination-bullet"></span>
          </div>
          <div class="p-gallery_btn p-gallery_next" @click="rightMove">
            <i class="g-i g-i-arrow-r" aria-hidden="true"
              ><span class="material-symbols-outlined">
                arrow_forward_ios
              </span></i
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, toRefs, ref } from "vue";
import { useStore } from "../../store/index";
const store = useStore();

let newPhoto = computed(() => {
  let imgs = store.getters.getDisplay[0].photo;
  let count = Math.ceil(imgs.length / 2);
  count = imgs.length % 2 ? count++ : count;
  let idx = 0;
  let newphoto = [];
  while (idx < count) {
    newphoto.push(imgs.slice(idx * 2, idx * 2 + 2));
    idx++;
  }
  return newphoto;
});
let moveNumber = ref(0);

//右移点击事件
let rightMove = () => {
  let n = (newPhoto.value.length - 1) * 395;

  if (moveNumber.value < n) {
    moveNumber.value = moveNumber.value + 395;
  } else {
    moveNumber.value = moveNumber.value;
  }
  console.log("moveNumber!!!", moveNumber.value, n);
};
//左移点击事件
let leftMove = () => {
  if (moveNumber.value > 0) {
    moveNumber.value = moveNumber.value - 395;
  }
};
//点击事件 给大图传参
let bigPhotoUrl = ref(store.getters.getDisplay[0].photo[0]);
// console.log("bigPhotoUrl!!!!!", bigPhotoUrl);
let bigPhoto = (e) => {
  // console.log("bigPhoto!!!!!!!!", e);
  bigPhotoUrl.value = e;
};

// console.log("newphoto外!!!!!!!!!", newPhoto);
// let newPhotoDisplay = computed(() => store.getters.getDisplay[0].photoDisplay);

// console.log("newPhotoDisplay!!!!!!!!!", newPhotoDisplay);
// onMounted(() => {
//   // console.log("newphoto!!!!!!!!!", this.display1.photo);
// });
</script>

<style scoped>
.p-grid_gallery {
  margin: auto !important;
}
.p-gallery-static .p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(-n + 4) {
  margin-top: 0;
}
.p-gallery-static .p-gallery_thumbs_item-active {
  box-shadow: 0 0 0 2px #009e96 inset;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 20px) / 2 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 2);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
.p-gallery_thumbs_item,
.p-galleryReview_thumbs_item {
  background-position: center;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(4n) {
  margin-right: 0;
}
.p-gallery-static .p-gallery_controls {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.p-gallery-static .p-gallery_prev {
  transform: translateX(-10px);
}
.p-gallery_btn {
  font-size: 2.4rem;
  display: flex;
  width: 100px;
  height: 80px;
  align-items: center;
  justify-content: center;
}
.p-gallery-static .p-gallery_next {
  transform: translateX(10px);
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;

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
.p-gallery_btn.swiper-button-disabled .g-i {
  color: #808080;
}
.g-i-arrow-r,
.g-i-arrow-l,
.g-i-arrow-u,
.g-i-arrow-d,
.g-i-arrow-d2 {
  transition: transform 0.3s;
}
.p-gallery-static .p-gallery_pagination {
  flex-grow: 1;
  text-align: center;
}
.p-gallery .swiper-pagination-bullet-active {
  background: #009e96;
}
.p-gallery .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  opacity: 1;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet {
  display: inline-block;
  border-radius: 100%;
}
.p-gallery-static .p-gallery_next {
  transform: translateX(10px);
}
.g-i-arrow-r {
  transition: transform 0.3s;
  color: #009e96;
}

.g-i-arrow-l {
  transition: transform 0.3s;
  color: #009e96;
}
.p-grid .g-grid_item {
  max-width: 395px;
  width: 100% !important;
  margin-top: 40px;
  padding: 0 !important;
}

* {
  box-sizing: border-box;
}
.p-gallery_top {
  position: relative;
  margin: auto;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_photo[role="button"] {
  transition: opacity 0.2s;
}
.p-gallery_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-fade .swiper-slide {
  transition-property: opacity;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
}
.p-gallery_item img {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100%;
  margin: auto;
  width: 100%;
}
.img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-gallery-static .p-gallery_fraction {
  display: none;
}
.p-gallery_fraction {
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 10px auto;
  padding: 7px 10px;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
.captionArea-static.fixed {
  min-height: 45px !important;
}
.p-gallery-static .p-gallery_caption {
  margin-bottom: 5px;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_caption {
  margin-top: 10px;
  overflow-wrap: break-word;
}
.g-align-tc {
  text-align: center !important;
}
.displayMoreGalleryCaption {
  cursor: pointer;
}
.g-link .g-i:first-child {
  margin-right: 0.35em;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
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
.g-i-arrow-d {
  transition: transform 0.3s;
  color: #009e96;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link .g-i:first-child {
  margin-right: 0.35em;
}
/* 
.p-gallery-static {
  max-width: 415px;
}
.p-gallery_top {
  position: relative;
  margin: auto;
}
.p-gallery-static .p-gallery_photo[role="button"] {
  transition: opacity 0.2s;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.p-gallery_photo_el,
.p-galleryReview_photo_el {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.swiper-container {
  margin: 0 auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(-n + 4) {
  margin-top: 0;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
.p-gallery-static .p-gallery_thumbs_item-active {
  box-shadow: 0 0 0 2px #009e96 inset;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.p-gallery_thumbs_item {
  background-position: center;
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  animation: swiper-preloader-spin 1s steps(12, end) infinite;
}
.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;

  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
}

.p-gallery-static .p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}


[aria-hidden="true"]:not([data-breakpoints]):not([data-accordion-more]):not(.g-i):not(.g-s) {
  display: none;
}
p {
  margin: 0px;
}
.p-gallery-static .p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
} */
</style>
