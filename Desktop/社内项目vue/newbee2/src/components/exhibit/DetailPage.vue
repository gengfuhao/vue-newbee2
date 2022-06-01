<template>
  <h1>商品详情</h1>

  <div class="g-grid_item js-sku-details" id="p-specGridItem">
    <div class="g-units-lg">
      <dl class="p-customize js-sku-variations" data-index="0">
        <dt>
          サイズ：<b id="">{{ changeName }}</b>
        </dt>

        <dd>
          <div class="g-select g-select-sm js-sku-variations-dropdown">
            <i class="g-i g-i-dropdown" aria-hidden="true"> </i>
            <select
              @change="change"
              name=""
              required=""
              aria-required="true"
              aria-label="サイズの選択"
              data-control="#p-eo-label-"
            >
              <option
                value="7518021"
                data-code="05700010035"
                data-label="スモールシングル-シングル"
                selected=""
                data-parent=""
              >
                スモールシングル-シングル
              </option>
              <option
                value="7518022"
                data-code="05700010036"
                data-label="セミダブル-ダブル"
                data-parent=""
              >
                セミダブル-ダブル
              </option>
              <option
                value="7518023"
                data-code="05700010037"
                data-label="ワイドダブル-クイーン"
                data-parent=""
              >
                ワイドダブル-クイーン
              </option>
            </select>
          </div>
        </dd>

        <dt>カラー：<b id="p-customize1カラー"></b></dt>

        <dd>
          <ul class="g-flow-sm">
            <li>
              <label class="g-checkable g-checkable-circle">
                <input
                  @click="tm(19)"
                  type="radio"
                  name="1カラー"
                  value="00100070019"
                  data-parent="05700010035"
                  data-index="0"
                  data-label="グレー"
                  data-control="#p-customize1カラー"
                />
                <span
                  ><span class="g-checkable_checked"></span
                  ><img
                    src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8965479792670/BasicColor_GRY.jpg"
                    alt="グレー"
                /></span>
              </label>
            </li>
            <li>
              <label class="g-checkable g-checkable-circle">
                <input
                  @click="tm(61)"
                  type="radio"
                  name="1カラー"
                  checked=""
                  value="00100160061"
                  data-parent="05700010035"
                  data-index="0"
                  data-label="ブラック"
                  data-control="#p-customize1カラー"
                />
                <span
                  ><span class="g-checkable_checked"></span
                  ><img
                    src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8965479071774/BasicColor_BK.jpg"
                    alt="ブラック"
                /></span>
              </label>
            </li>
            <li>
              <label class="g-checkable g-checkable-circle">
                <input
                  @click="tm(18)"
                  type="radio"
                  name="1カラー"
                  value="00100250018"
                  data-parent="05700010035"
                  data-index="0"
                  data-label="ローズ"
                  data-control="#p-customize1カラー"
                />
                <span
                  ><span class="g-checkable_checked"></span
                  ><img
                    src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8966164185118/BasicColor_RO.jpg"
                    alt="ローズ"
                /></span>
              </label>
            </li>
          </ul>
        </dd>
      </dl>

      <div class="js-catch-copy"></div>

      <div class="g-units-xs js-sku-price">
        <div>
          <div class="g-flow-0 g-align-fbl">
            <dl class="p-price">
              <dd class="g-price g-price-lg price-size-up g-price-down">
                <span>円</span>
              </dd>
            </dl>
          </div>

          <p class="g-font-sm">値下実施日：2021/11/22</p>
          <p class="g-font-sm">旧価格：1,990円</p>
        </div>

        <div class="g-butterfly">
          <p class="p-point">
            獲得ポイント<span class="g-digit">14 pt </span> 付与
          </p>
          <p class="g-font-sm p-point-link">
            <a class="g-link" href="/ec/userguide/memberscardpoint/">
              <span>ポイントについて</span>
              <i class="g-i g-i-info" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
      <p class="js-sku-delivery"></p>
    </div>

    <div class="g-block-sm js-sku-cutlock"></div>
    <section class="g-block-sm p-spec" id="js-product-spec">
      <h2 class="g-h-2 g-h-i p-hd">
        <i class="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span>
      </h2>
      <ul class="g-flow-xs p-featureIcons js-pictograms">
        <li>
          <img
            src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878560215070/pic01062.jpg"
            alt=""
          />
        </li>
      </ul>
      <div id="p-specMore" aria-hidden="true" data-accordion-more="">
        <ul
          class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"
        ></ul>
        <table class="g-table-a js-sku-specs">
          <tbody>
            <tr>
              <th>商品コード</th>
              <td>7518037</td>
            </tr>
            <tr>
              <th>カラー</th>
              <td>ブラック</td>
            </tr>
            <tr>
              <th>サイズ</th>
              <td>幅80×奥行170×高さ40cm</td>
            </tr>
            <tr>
              <th>素材</th>
              <td>ポリエステル　レーヨン</td>
            </tr>
            <tr>
              <th>重量</th>
              <td>約490g</td>
            </tr>
            <tr>
              <th>保証年数</th>
              <td>1年</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="g-foot-v g-foot-sm" style="">
        <p class="g-align-tc">
          <a
            class="g-btn g-btn-w-md displaymorespec"
            href="#p-specMore"
            role="button"
            aria-expanded="false"
            aria-controls="p-specMore"
            data-label="閉じる"
            data-accordion='{"scroll":false}'
          >
            <span>仕様・サイズをもっと見る</span>
            <i class="g-i g-i-arrow-d" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </section>

    <div class=""></div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;
//初始化QA
onMounted(() => {
  store.dispatch("setDisplay", goodsId);
  console.log("goodsidqqqqqqq", goodsId);
});

let display = computed(() => {
  return store.getters.getDisplay;
});
console.log("------", display);
let changeName = computed(() => {
  console.log("eeeeeeee", store.getters.getChangeName);
  return store.getters.getChangeName;
});

const change = (number) => {
  console.log("eeeeeeee", number.target.value);
  store.commit("setChange", number.target.value);
};
//点击事件
const tm = (number) => {
  store.commit("setColor", number);
  console.log("tttttttttttttttt", number);
};
</script>

<style scoped>
.p-featureIcons {
  padding-bottom: 15px;
}
.p-featureIcons img {
  width: 50px;
}
.g-table-a th,
.g-table-a td,
.g-sm-table-a th,
.g-sm-table-a td {
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
.g-table-a th,
.g-sm-table-a th {
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  background-color: #f7f7f7;
}
.displaymorespec,
.displaymoredesc {
  padding: 0px 10px;
}
.displaymorespec span,
.displaymoredesc span {
  min-height: 28px;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 7px;
  display: inline-block;
  text-align: center;
  transform: none;
  width: 100%;
}
.g-table-a,
.g-sm-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
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
.g-foot-sm,
.g-sm-foot-sm {
  margin-top: 15px;
}
.g-foot-v,
.g-sm-foot-v {
  display: flex;
  flex-direction: column;
}
#p-specMore .p-sku-manuals {
  margin-top: 0 !important;
  display: block;
  text-align: right;
  margin-bottom: 0;
}
#p-specMore[data-accordion-more][aria-hidden="true"] {
  height: 200px;
}
[data-accordion-more][aria-hidden="true"] {
  position: relative;
  overflow: hidden;
  height: 160px;
}

.g-h-i .g-i:first-child,
.g-h-i .g-s:first-child,
.g-sm-h-i .g-i:first-child,
.g-sm-h-i .g-s:first-child {
  margin-right: 0.5em;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.g-block-sm,
.g-sm-block-sm {
  margin-top: 30px;
}
.g-units-xs > *:nth-child(n + 2):not(.g-units_ignore),
.g-sm-units-xs > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 5px;
}
.g-butterfly,
.g-sm-butterfly {
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
.g-font-sm,
.g-sm-font-sm {
  font-size: 1.2rem !important;
  line-height: 1.58333 !important;
}
.g-price,
.g-sm-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.g-price-down,
.g-sm-price-down {
  color: #eb6157;
}
dd.price-size-up {
  font-size: 3.5rem;
}
.g-browser-helvetica .g-price,
.g-browser-helvetica .g-sm-price {
  letter-spacing: 0.03em;
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
.p-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.g-flow-0,
.g-sm-flow-0 {
  margin-bottom: 0;
  margin-left: 0;
}
.js-sku-price,
.bundle-js-price {
  width: 100%;
}
* {
  box-sizing: border-box;
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
  margin: 0px;
}
.g-flow-sm,
.g-sm-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-flow,
.g-sm-flow,
.g-flow-0,
.g-sm-flow-0,
.g-flow-xs,
.g-sm-flow-xs,
.g-flow-sm,
.g-sm-flow-sm,
.g-flow-lg,
.g-sm-flow-lg,
.g-flow-xl,
.g-sm-flow-xl {
  display: flex;
  flex-wrap: wrap;
}

ul {
  padding: 0px;
  list-style: none;
  margin: 0px;
}
.g-checkable,
.g-sm-checkable {
  font-size: 1.6rem;
}
.g-checkable-circle,
.g-sm-checkable-circle {
  border-radius: 50%;
}
.g-checkable-circle,
.g-checkable-square,
.g-sm-checkable-circle,
.g-sm-checkable-square {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-sm-checkable-img,
.g-sm-checkable-circle,
.g-sm-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable,
.g-sm-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable,
.g-sm-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-sm-checkable input[type="radio"],
.g-sm-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
button,
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
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
.g-checkable input:checked + span .g-checkable_off,
.g-checkable input:not(:checked) + span .g-checkable_on,
.g-checkable input:not(:checked) + span .g-checkable_checked,
.g-checkable
  input[type="checkbox"][aria-invalid="true"]
  + span
  .g-checkable_off,
.g-checkable
  input[type="checkbox"]:not([aria-invalid="true"])
  + span
  .g-checkable_invalid,
.g-sm-checkable input:checked + span .g-checkable_off,
.g-sm-checkable input:not(:checked) + span .g-checkable_on,
.g-sm-checkable input:not(:checked) + span .g-checkable_checked,
.g-sm-checkable
  input[type="checkbox"][aria-invalid="true"]
  + span
  .g-checkable_off,
.g-sm-checkable
  input[type="checkbox"]:not([aria-invalid="true"])
  + span
  .g-checkable_invalid {
  display: none;
}
.g-checkable-circle .g-checkable_checked,
.g-sm-checkable-circle .g-checkable_checked {
  border-radius: 50%;
}
.g-checkable .g-checkable_checked,
.g-sm-checkable .g-checkable_checked {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0 2px #009e96 inset;
}
.g-checkable-circle img,
.g-sm-checkable-circle img {
  overflow: hidden;
  border-radius: 50%;
}
.g-checkable-circle img,
.g-checkable-square img,
.g-sm-checkable-circle img,
.g-sm-checkable-square img {
  max-height: 100%;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.g-flow-sm,
.g-sm-flow-sm {
  margin-bottom: 20px;
  margin-left: -10px;
}
</style>
