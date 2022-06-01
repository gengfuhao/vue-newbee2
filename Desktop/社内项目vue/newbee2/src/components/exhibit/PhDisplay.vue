<template>
  <h1>照片展示</h1>

  <div class="p-grid_gallery g-grid_item g-sm-full">
    <div
      class="p-gallery p-gallery-static"
      aria-hidden="true"
      data-breakpoints=""
      captionlength="1"
    >
      <!-- 大照片 -->
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
            <div class="swiper-wrapper js-gallery-images">
              <!-- 大照片 -->
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
                  src="https://www.nitori-net.jp/ecstatic/image/product/7518037/751803701.jpg?ccp=1654045200&amp;imwidth=415&amp;imdensity=1&amp;ts=20211122100709528"
                  alt="面倒なシーツの取りかえがラクちん。"
                  imgcount="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="captionArea-static fixed" style="height: auto">
        <div
          class="p-gallery_caption captionText-static"
          short="面倒なシーツの取りかえがラクちん。"
          show="short"
          long="面倒なシーツの取りかえがラクちん。"
          rowcount="1"
          index="0"
        >
          面倒なシーツの取りかえがラクちん。
        </div>
        <div id="p-galleryCaptionMore-static" aria-hidden="true"></div>
        <div class="" id="js-caption-more-static" aria-hidden="false">
          <p class="g-align-tc">
            <a
              class="g-link displayMoreGalleryCaption"
              captiontype="static"
              aria-expanded="false"
              data-label="閉じる"
              style="display: none"
            >
              <i class="g-i g-i-arrow-d"></i><span>もっと見る</span>
            </a>
          </p>
        </div>
      </div>

      <div class="p-gallery_thumbs">
        <div
          class="swiper-container p-gallery_thumbs_el swiper-container-horizontal"
        >
          <div class="swiper-wrapper js-gallery-thumbnails">
            <div class="swiper-slide swiper-slide-active" style="width: 395px">
              <div
                class="p-gallery_thumbs_item p-gallery_thumbs_item-active"
                role="button"
                tabindex="0"
                data-index="0"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803701.jpg?imwidth=97&amp;ts=20211122100709528);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="1"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803702.jpg?imwidth=97&amp;ts=20210719143628350);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="2"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803703.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="3"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803704.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="4"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803705.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="5"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803706.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="6"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803707.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="7"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803708.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
            </div>

            <div class="swiper-slide swiper-slide-next" style="width: 395px">
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="8"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803709.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="9"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803710.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="10"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803711.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="11"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803712.jpg?imwidth=97&amp;ts=20201217102211461);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="12"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803713.jpg?imwidth=97&amp;ts=20210115145137734);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="13"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803714.jpg?imwidth=97&amp;ts=20210115145137734);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="14"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803715.jpg?imwidth=97&amp;ts=20210115145137734);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="15"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803716.jpg?imwidth=97&amp;ts=20210510163755262);
                "
              ></div>
            </div>

            <div class="swiper-slide" style="width: 395px">
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="16"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803717.jpg?imwidth=97&amp;ts=20220519140642996);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="17"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518037/751803798.jpg?imwidth=97&amp;ts=20220328115225081);
                "
              ></div>
            </div>
          </div>
        </div>

        <div class="p-gallery_controls">
          <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
            <i class="g-i g-i-arrow-l" aria-hidden="true"></i>
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
          <div class="p-gallery_btn p-gallery_next">
            <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.p-grid_gallery {
  margin: auto !important;
}
.p-gallery_photo,
.p-galleryReview_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.p-gallery_photo_el,
.p-galleryReview_photo_el {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
.p-gallery_item img,
.p-galleryReview_item img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100%;
  margin: auto;
  width: 100%;
}
.captionArea-modal.fixed {
  min-height: 50px !important;
  margin: 0 5px 5px;
}
.captionText-modal {
  margin: 5px auto !important;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
</style>
