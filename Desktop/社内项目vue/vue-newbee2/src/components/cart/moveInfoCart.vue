<template>
  <div class="g-layout_sidebar">
    <div
      class="g-sm-full p-sm-full-cls"
      data-attr='{"lg":{"data-sticky":true}}'
      data-sticky="false"
    >
      <div class="g-lg-sticky">
        <div class="g-pane g-pane-gray">
          <div class="g-position-r g-units-lg js-sku-sidebar">
            <dl class="p-order">
              <dt>納品方法</dt>
              <dd>
                <span>{{ infoCart.deliveryMethod }}</span>
              </dd>
              <dt>配送目安</dt>
              <dd>{{ infoCart.delivery }}</dd>
              <dt>返品・交換</dt>
              <dd>
                {{ infoCart.exchange }}
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/cancel/">
                    <span>返品・交換について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
              <dt>送料</dt>
              <dd>
                <span class="g-label-price">{{ infoCart.postage }}</span>
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/delivery/"
                    ><span>送料について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i
                  ></a>
                </p>
              </dd>
            </dl>

            <p>
              <img :src="infoCart.img" alt="" />
            </p>
            <dl class="p-pcs">
              <dt>
                <label for="p-pieces">数量</label>
              </dt>
              <dd>
                <input
                  class="g-input g-input-sm addToCartQty"
                  id="p-pieces"
                  type="text"
                  name="quantity"
                  v-model.number="mount"
                  size="5"
                  maxlength="3"
                />
              </dd>
            </dl>

            <div v-for="display1 in display">
              <div class="g-flow-0 g-align-fbl">
                <dl class="p-price p-price-area">
                  <dd
                    class="g-price g-price-lg g-price-ra price-size-up g-price-down"
                  >
                    {{ display1.price }}<span>円</span>
                  </dd>
                </dl>
              </div>
              <p class="g-font-sm">値下実施日：{{ display1.dropTime }}</p>
              <p class="g-font-sm">旧価格：{{ display1.oldPrice }}</p>
            </div>
            <Modal
              :show="show"
              :title="title"
              @hideModal="hideModal"
              @submit="submit"
            >
              <p>カートを見るか</p>
            </Modal>
            <div class="g-foot-v">
              <div class="cartBtnArea disp">
                <button
                  @click="upDataCart"
                  class="g-btn g-btn-cv g-btn-c g-fw addToCartBtn"
                  id="p-addItem"
                  type="button"
                >
                  <i class="g-i g-i-add-cart" aria-hidden="true"
                    ><span class="material-symbols-outlined">
                      shopping_cart
                    </span></i
                  >
                  <span>カートに入れる</span>
                </button>
              </div>
            </div>

            <ul class="g-grid-2 g-grid-xs p-misc">
              <li class="g-grid_item p-misc_item">
                <a
                  onclick="jsShopStockClick()"
                  class="g-hover js-popUp-store-inventory"
                  href="#p-stockModal"
                  role="button"
                  aria-expanded="false"
                  data-sku-code="7518047"
                >
                  <div class="p-misc_i g-hover_img">
                    <i class="g-s g-s-stock-g" aria-hidden="true"
                      ><span class="material-symbols-outlined"> home </span></i
                    >
                  </div>
                  <span class="p-misc_label">店舗在庫を確認</span>
                </a>
              </li>
              <li class="g-grid_item p-misc_item">
                <a
                  onclick="jswishclick()"
                  id="addFavoriteA"
                  data="7518047"
                  data-login="anonymous"
                  class="g-hover"
                  data-clickable=""
                >
                  <div class="p-misc_i g-hover_img">
                    <i class="g-s g-s-favorite-g" aria-hidden="true"
                      ><span class="material-symbols-outlined">
                        favorite
                      </span></i
                    >
                  </div>
                  <span class="p-misc_label">お気に入り</span>
                </a>

                <a
                  onclick=""
                  id="addFavoriteDiv"
                  class="g-hover"
                  style="display: none"
                >
                  <div class="p-misc_i g-hover_img">
                    <i class="g-s g-s-favorite"></i>
                  </div>
                  <span class="p-misc_label">お気に入り</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from "vue";
import Modal from "../../pages/PopUps.vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const axios = require("axios");
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setInfoCart", goodsId);
});
//引入数据
const infoCart = computed(() => {
  return store.getters.getInfoCart;
});
const display = computed(() => {
  return store.getters.getDisplay;
});

const mount = ref(1);

const props = defineProps({
  goodsNumber: Number,
});

let title = ref("カートに追加しました");
let show = ref(false);
//监测数据
function upDataCart() {
  // 取消弹窗回调
  show.value = true;
  let article = {
    amount: mount.value,
    goodsNumber: props.goodsNumber,
    userId: "110",
  };
  const headers = {
    Authorization: "Bearer my-token",
    "My-Custom-Header": "foobar",
  };
  axios
    .post("http://localhost:3000/user", article, { headers })
    .then(function (response) {
      console.log(response);
    });

  show.value = true;
}
function hideModal() {
  // 取消弹窗回调
  show.value = false;
}
function submit() {
  // 确认弹窗回调
  show.value = false;
}
</script>

<style scoped>
.g-layout-detail .g-layout_sidebar {
  grid-row: 3/5;
  grid-column: 2;
  margin-left: 40px;
}
.p-sm-full-cls {
  position: sticky;
  top: 40px;
}
.g-pane,
.g-lg-pane {
  padding: 30px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.g-pane,
.g-lg-pane {
  display: block;
}
.g-position-r,
.g-lg-position-r {
  position: relative;
}
.p-order {
  border-bottom: 1px solid #dbdbdb;
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
a {
  text-decoration: none;
  color: #333;
}
.p-order dt {
  float: left;
  clear: left;
}
.p-order dt,
.p-order dd {
  padding: 10px 0;
}
* {
  box-sizing: border-box;
}
.p-order dd {
  font-weight: bold;
  overflow: hidden;
  text-align: right;
}
.p-order dt:nth-of-type(n + 2),
.p-order dd:nth-of-type(n + 2) {
  border-top: 1px solid #dbdbdb;
}
.p-order_help {
  margin-top: 2px;
  font-size: 1.2rem;
  line-height: 1.5;
}
.p-order_help {
  font-size: 0.7rem;
  line-height: 1.58333;
  font-weight: normal;
}
a {
  text-decoration: none;
}
.p-order_help a {
  color: #808080;
}
.g-label-price {
  color: #eb6157;
  border: 1px solid #eb6157;
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
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-pcs {
  display: flex;
  align-items: center;
}
.p-pcs dt {
  font-weight: bold;
  margin-right: 25px;
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
.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  appearance: none;
}
.g-input-sm {
  padding: 7px 11px;
}
.g-input {
  padding: 15px 14px 14px;
}
.g-input-sm {
  padding: 8px 11px 7px;
}
.g-input[size] {
  width: 100%;
}
.g-input[size="5"] {
  max-width: calc(0.65em * 5 + 30px);
}
.g-flow-0,
.g-lg-flow-0 {
  margin-bottom: 0;
  margin-left: 0;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
.g-align-fbl,
.g-lg-align-fbl {
  align-items: baseline !important;
}
.p-price-area {
  display: inline;
  flex-wrap: wrap;
  align-items: baseline;
}
.p-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.g-flow-0 > *,
.g-lg-flow-0 > * {
  margin-bottom: 0;
  margin-left: 0;
}
.g-browser-helvetica .g-price,
.g-browser-helvetica .g-lg-price {
  letter-spacing: 0.03em;
}
dd.price-size-up {
  font-size: 3.5rem;
}
.g-price-ra {
  text-align: right;
}
.g-price-lg,
.g-lg-price-lg {
  font-size: 2.6rem;
}
.g-price,
.g-lg-price {
  font-size: 2rem;
}
.g-price-down,
.g-lg-price-down {
  color: #eb6157;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.g-price-down,
.g-sm-price-down {
  color: #eb6157;
}
dd.price-size-up > span {
  font-size: 1.6rem;
}
.g-price span,
.g-sm-price span {
  font-size: 1.1rem;
  font-weight: normal;
  margin-right: 0.2em;
  margin-left: 0.2em;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
.g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 20px;
}
.g-foot-v,
.g-foot-h,
.g-lg-foot-v,
.g-lg-foot-h {
  margin-top: 30px;
}
.g-foot-v,
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.cartBtnArea {
  position: relative;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
}
.g-btn-c,
.g-lg-btn-c {
  justify-content: center;
}
.g-btn-cv,
.g-lg-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
button,
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
}
.g-btn-c > .g-i:first-child,
.g-btn-c > .g-i:last-child,
.g-btn-c > .g-s:first-child,
.g-btn-c > .g-s:last-child,
.g-lg-btn-c > .g-i:first-child,
.g-lg-btn-c > .g-i:last-child,
.g-lg-btn-c > .g-s:first-child,
.g-lg-btn-c > .g-s:last-child {
  margin: 0;
}
.g-btn > .g-i:first-child,
.g-btn > .g-s:first-child,
.g-lg-btn > .g-i:first-child,
.g-lg-btn > .g-s:first-child {
  margin-left: 8px;
}
.g-btn-cv .g-i-add-cart,
.g-lg-btn-cv .g-i-add-cart {
  font-size: 2.6rem;
}
.g-btn > .g-i,
.g-btn > .g-s,
.g-lg-btn > .g-i,
.g-lg-btn > .g-s {
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
}
.g-btn-c > span,
.g-lg-btn-c > span {
  flex: 0 1 auto;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.p-misc {
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-grid-1 > .g-grid_item:nth-child(1n + 1),
.g-grid-2 > .g-grid_item:nth-child(2n + 1),
.g-grid-3 > .g-grid_item:nth-child(3n + 1),
.g-grid-4 > .g-grid_item:nth-child(4n + 1),
.g-grid-5 > .g-grid_item:nth-child(5n + 1),
.g-grid-6 > .g-grid_item:nth-child(6n + 1) {
  padding-left: 0;
}
.g-grid-2.g-grid-xs > .g-grid_item,
.g-grid-2.g-lg-grid-xs > .g-grid_item,
.g-lg-grid-2.g-grid-xs > .g-grid_item,
.g-lg-grid-2.g-lg-grid-xs > .g-grid_item {
  width: calc((100% - 10px) / 2 - 0.1px);
  padding: 5px 5px;
}
.p-misc a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  align-items: center;
}
.p-misc_i {
  font-size: 2.4rem;
  display: flex;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  border: 2px solid #dbdbdb;
  border-radius: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
}
.g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  /* background: url(/ec/_ui/responsive/common/images/icon.svg?ts=20200115)
    no-repeat; */
  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
  speak: none;
}
.g-s-stock-g {
  background-position: -71em -71em;
}
.p-misc_label {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}
.g-btn-cv .g-i-add-cart,
.g-lg-btn-cv .g-i-add-cart {
  font-size: 2.6rem;
}
.g-btn-c > .g-i + span,
.g-btn-c > .g-s + span,
.g-lg-btn-c > .g-i + span,
.g-lg-btn-c > .g-s + span {
  padding: 5px 10px;
  transform: none;
}
.g-btn-c > span,
.g-lg-btn-c > span {
  flex: 0 1 auto;
}
</style>
