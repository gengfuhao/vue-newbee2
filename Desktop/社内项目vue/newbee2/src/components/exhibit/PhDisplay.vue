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
                  src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804701.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20220516105128778"
                  alt="面倒なシーツの取りかえがラクちん。"
                  imgcount="0"
                />
              </div>
              <div
                class="swiper-slide p-gallery_item swiper-slide-next"
                data-caption="たて・よこの伸縮性に優れ、無駄なく「のびて、ピタッ！」とつけられる！取り付け、着脱も簡単♪"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-395px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy swiper-lazy-loaded"
                  alt="たて・よこの伸縮性に優れ、無駄なく「のびて、ピタッ！」とつけられる！取り付け、着脱も簡単♪"
                  imgcount="1"
                  src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804702.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210719143628350"
                />
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="使い方‥①角をひっかける。②ビヨーンと伸ばす。③パッとはなす。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-790px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804703.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20201217110218571"
                  alt="使い方‥①角をひっかける。②ビヨーンと伸ばす。③パッとはなす。"
                  imgcount="2"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="伸縮性に優れた生地を使用しているので、シワになりにくく、シーツが浮くことなくきれいなフィット感が得られます。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-1185px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804704.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20201217110218571"
                  alt="伸縮性に優れた生地を使用しているので、シワになりにくく、シーツが浮くことなくきれいなフィット感が得られます。"
                  imgcount="3"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="寝相が悪くてもズレにくく、見た目もすっきり。マットレスや敷きふとんの汚れ防止にも役立ちます。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-1580px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804705.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="寝相が悪くてもズレにくく、見た目もすっきり。マットレスや敷きふとんの汚れ防止にも役立ちます。"
                  imgcount="4"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="ベッド用のマットレスはもちろん、敷きふとんにもご利用いただけます。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-1975px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804706.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="ベッド用のマットレスはもちろん、敷きふとんにもご利用いただけます。"
                  imgcount="5"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="角までピタッ！きれいなフィット感。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-2370px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804707.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="角までピタッ！きれいなフィット感。"
                  imgcount="6"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="裏面ゴム入りなので、きれいにフィット。厚さはなんと38㎝まで対応！"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-2765px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804708.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="裏面ゴム入りなので、きれいにフィット。厚さはなんと38㎝まで対応！"
                  imgcount="7"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="生地は安心の抗菌防臭加工。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-3160px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804709.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="生地は安心の抗菌防臭加工。"
                  imgcount="8"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption="ご家庭の洗濯機で簡単に丸洗いできます。"
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-3555px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804710.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt="ご家庭の洗濯機で簡単に丸洗いできます。"
                  imgcount="9"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-3950px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804711.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt=""
                  imgcount="10"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-4345px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804712.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt=""
                  imgcount="11"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-4740px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804713.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt=""
                  imgcount="12"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-5135px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804714.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210608155127610"
                  alt=""
                  imgcount="13"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-5530px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804715.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20220228122211224"
                  alt=""
                  imgcount="14"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-5925px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804720.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20211118150620783"
                  alt=""
                  imgcount="15"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-6320px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804721.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20211118150620783"
                  alt=""
                  imgcount="16"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-6715px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804722.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20211118150620783"
                  alt=""
                  imgcount="17"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-7110px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804723.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20211118150620783"
                  alt=""
                  imgcount="18"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-7505px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804724.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20220519140642996"
                  alt=""
                  imgcount="19"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 0;
                  transform: translate3d(-7900px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy"
                  data-src="https://www.nitori-net.jp/ecstatic/image/product/7518047/751804798.jpg?ccp=1654128000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210902181649563"
                  alt=""
                  imgcount="20"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 照片下标 -->
      <div class="p-gallery_fraction js-images-count" data-total="21">
        1 / 21
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
          <div class="swiper-wrapper js-gallery-thumbnails">
            <div class="swiper-slide swiper-slide-active" style="width: 395px">
              <div
                class="p-gallery_thumbs_item p-gallery_thumbs_item-active"
                role="button"
                tabindex="0"
                data-index="0"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804701.jpg?imwidth=97&amp;ts=20220516105128778);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="1"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804702.jpg?imwidth=97&amp;ts=20210719143628350);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="2"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804703.jpg?imwidth=97&amp;ts=20201217110218571);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="3"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804704.jpg?imwidth=97&amp;ts=20201217110218571);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="4"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804705.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="5"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804706.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="6"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804707.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="7"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804708.jpg?imwidth=97&amp;ts=20210608155127610);
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
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804709.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="9"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804710.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="10"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804711.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="11"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804712.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="12"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804713.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="13"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804714.jpg?imwidth=97&amp;ts=20210608155127610);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="14"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804715.jpg?imwidth=97&amp;ts=20220228122211224);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="15"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804720.jpg?imwidth=97&amp;ts=20211118150620783);
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
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804721.jpg?imwidth=97&amp;ts=20211118150620783);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="17"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804722.jpg?imwidth=97&amp;ts=20211118150620783);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="18"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804723.jpg?imwidth=97&amp;ts=20211118150620783);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="19"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804724.jpg?imwidth=97&amp;ts=20220519140642996);
                "
              ></div>
              <div
                class="p-gallery_thumbs_item"
                role="button"
                tabindex="0"
                data-index="20"
                style="
                  background-image: url(https://www.nitori-net.jp/ecstatic/image/product/7518047/751804798.jpg?imwidth=97&amp;ts=20210902181649563);
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="p-gallery_controls">
          <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
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
          <div class="p-gallery_btn p-gallery_next">
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

<script>
export default {};
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
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
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
