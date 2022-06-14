<template>
  <div class="g-layout_lead">
    <div class="g-sm-full g-breadcrumb">
      <div class="swiper-container">
        <ol class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="/ec/"><span itemprop="name">ホーム</span></a>
          </li>
          <span class="material-symbols-outlined"> chevron_right </span>
          <li class="swiper-slide">
            <span itemprop="name"> カート</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="g-layout_head">
    <h1>カート</h1>
  </div>
  <div class="g-layout_body">
    <ul class="g-itemList">
      <li class="g-itemList_item g-media g-media-lg p-cartItem">
        <p class="g-media_head">
          <a class="g-hover" href="/ec/product/7508281/"
            ><img
              class="g-fw g-rc"
              src="https://www.nitori-net.jp/ecstatic/image/product/7508281/750828101.jpg?imwidth=140&amp;imdensity=1&amp;ts=20200318174839796"
              srcset="
                https://www.nitori-net.jp/ecstatic/image/product/7508281/750828101.jpg?imwidth=97&amp;imdensity=1&amp;ts=20200318174839796 2x
              "
              alt="枕カバー(パレット3GY)"
          /></a>
        </p>
        <div class="g-media_body g-units-sm">
          <p class="g-media_h">
            <a href="/ec/product/7508281/">枕カバー(パレット3GY)</a>
          </p>
          <p class="g-font-sm">商品コード　7508281</p>
          <ul class="g-font-sm">
            <li>カラー：グレー</li>
            <li>サイズ：標準サイズ</li>
            <li></li>
          </ul>
          <p class="g-price">599<span>円 （税込）</span></p>
          <div class="g-butterfly g-font-sm">
            <p>2～6日で出荷</p>
          </div>
        </div>
        <div class="g-media_foot">
          <div class="g-hr-sm g-hr-dark g-only-sm"></div>
          <div class="p-cartItem_controls">
            <form
              id="uniAddLaterListEntryForm0"
              name="uniAddLaterListEntryForm0"
              action="/ec/cart/add/laterListEntry"
              method="post"
            >
              <input id="pk" name="pk" value="12606018682924" type="hidden" />
              <div>
                <input
                  type="hidden"
                  name="CSRFToken"
                  value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                />
              </div>
            </form>
            <form
              id="uniDeleteCartEntryForm0"
              name="uniDeleteCartEntryForm0"
              action="/ec/cart/delete/cartEntry"
              method="post"
            >
              <input id="pk" name="pk" value="12606018682924" type="hidden" />
              <div>
                <input
                  type="hidden"
                  name="CSRFToken"
                  value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                />
              </div>
            </form>
            <div class="p-cartItem_pcs">
              <form
                id="uniUpdateQuantityForm0"
                name="uniUpdateQuantityForm0"
                action="/ec/cart/update/quantity"
                method="post"
              >
                <input
                  id="pk"
                  name="pk"
                  value="12606018682924"
                  type="hidden"
                /><input
                  class="g-input g-input-sm g-fw"
                  type="text"
                  name="quantity"
                  value="1"
                  aria-label="個数"
                  onchange="if(this.value&amp;&amp;this.value!=='1') uniUpdateQuantityForm0.submit();"
                  aria-describedby="p-cartItem_pcs0_alert"
                  data-validation-rules='[{"action":"hankaku"},{"rule":"number"}]'
                  maxlength="3"
                />
                <div
                  class="g-formGrid_error-alone"
                  id="p-cartItem_pcs0_alert"
                  role="alert"
                ></div>
                <div>
                  <input
                    type="hidden"
                    name="CSRFToken"
                    value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                  />
                </div>
              </form>
            </div>
            <p class="p-cartItem_btn">
              <a
                class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md"
                href="javascript:chgItem('uniAddLaterListEntryForm','0',false)"
                data-once=""
                ><span>あとで買う</span></a
              >
            </p>
            <p class="p-cartItem_del">
              <a
                class="g-link g-link-gray"
                href="javascript:chgItem('uniDeleteCartEntryForm','0',false)"
                data-once=""
                ><i class="g-i g-i-close" aria-hidden="true"
                  ><span class="material-symbols-outlined"> close </span></i
                ><span>削除</span></a
              >
            </p>
            <div class="p-cartItem_sum">
              <p class="g-price"><span>個別送料</span>0<span>円</span></p>
              <p class="g-price g-lg-price-lg">
                <span>小計</span>599<span>円 （税込）</span>
              </p>
            </div>
          </div>
        </div>
        <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
          <ul class="g-flow-xs g-item_label">
            <li class="g-label-brand">店舗受取可能商品</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  -->
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "../store/index";
const store = useStore();
onMounted(() => {
  store.dispatch("setUser");
});
//引入数据
const userInfo = computed(() => {
  return store.getters.getUserInfo;
});
const AllDisPlay = computed(() => {
  return store.getters.AllReviewDisPlay;
});
console.log("AllReviewDisPlay", AllDisPlay);

// function hideModal() {
//   // 取消弹窗回调
//   show.value = false;
// }

// function submit() {
//   // 确认弹窗回调
//   show.value = false;
// }
</script>
<style scoped>
.g-layout_lead {
  margin-bottom: calc(40px - 0.75rem);
}
.g-breadcrumb {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 10px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.g-breadcrumb .swiper-slide {
  width: auto;
}
.g-breadcrumb a {
  color: #009e96;
}
a {
  text-decoration: none;
}
.g-breadcrumb .swiper-slide {
  width: auto;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
.p-cartItem {
  grid-template-columns: minmax(100px, 13.33333%) 1fr auto;
}
.p-cartItem .g-media_foot {
  grid-row: 2;

  grid-column: 2;
  margin-left: 0;
}
.g-media,
.g-lg-media {
  display: grid;
  grid-template-rows: auto;
}
.g-media-lg .g-media_head,
.g-lg-media-lg .g-media_head {
  margin-right: 12.5%;
}
a {
  text-decoration: none;
  color: #333;
}
.g-media .g-media_foot,
.g-sm-media .g-media_foot {
  display: block;
  margin-left: 10px;

  grid-row: 1;

  grid-column: 3;
}
.g-hover img,
.g-hover .g-hover_img,
.g-lg-hover img,
.g-lg-hover .g-hover_img {
  transition: opacity 0.2s;
  backface-visibility: hidden;
}
.g-rc,
.g-lg-rc {
  overflow: hidden;
  border-radius: 4px;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.g-media .g-media_body,
.g-lg-media .g-media_body {
  grid-row: 1;
  grid-column: 2;
  display: block;
}
.p-cartItem .g-media_h {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.p-cartItem_controls {
  display: grid;

  grid-template-rows: auto auto;

  grid-template-columns: auto auto;
}
.p-cartItem_controls {
  align-items: center;
  justify-content: flex-start;
}
.g-units-sm > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-sm > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 10px;
}
.g-font-sm,
.g-lg-font-sm {
  font-size: 1.2rem !important;
  line-height: 1.5 !important;
}
.g-units-sm > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-sm > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 10px;
}
.g-hr-sm,
.g-sm-hr-sm {
  margin: 15px 0;
}
.g-hr,
.g-hr-0,
.g-hr-xs,
.g-hr-sm,
.g-sm-hr,
.g-sm-hr-0,
.g-sm-hr-xs,
.g-sm-hr-sm {
  border: 0 solid #f7f7f7;
  border-bottom-width: 1px;
}
.g-browser-helvetica .g-price,
.g-browser-helvetica .g-lg-price {
  letter-spacing: 0.03em;
}
.g-price,
.g-lg-price {
  font-size: 2rem;
}
.g-butterfly,
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
.p-cartItem .g-media_foot {
  margin-left: 20px;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.p-cartItem_pcs {
  max-width: 92px;
}
.p-cartItem_pcs {
  grid-row: 1;

  grid-column: 1;
}
.p-cartItem_pcs .g-input {
  text-align: right;
}
select,
input[type="text"],
input[type="password"],
textarea {
  font-size: 1.6rem;
}
.g-fw,
.g-sm-fw {
  width: 100% !important;
}
.g-input-sm {
  padding: 7px 11px;
}
.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.p-cartItem_btn,
.p-cartItem_del {
  margin-top: 10px;
}
.p-cartItem_btn {
  grid-row: 2;

  grid-column: 1;
}
.g-fw,
.g-sm-fw {
  width: 100% !important;
}
.g-font-md,
.g-sm-font-md {
  font-size: 1.4rem !important;
  line-height: 1.5 !important;
}
.g-btn-em,
.g-sm-btn-em {
  color: #009e96;
}
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

  appearance: none;
}
.p-cartItem_del,
.p-cartItem_sum {
  margin-left: 15px;
}
.p-cartItem_btn,
.p-cartItem_del {
  margin-top: 10px;
}
.p-cartItem_del {
  grid-row: 2;

  grid-column: 2;
}
.g-link,
.g-sm-link {
  display: inline-flex;
  align-items: center;
}
.g-price,
.g-sm-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
</style>
