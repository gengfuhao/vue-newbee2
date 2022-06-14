<template>
  <div class="g-grid_item js-sku-details" id="p-specGridItem">
    <div class="g-units-lg">
      <dl class="p-customize js-sku-variations" data-index="0">
        <dt>
          サイズ：<b id="">{{ sizeName }}</b>
        </dt>
        <dd>
          <div class="g-select g-select-sm js-sku-variations-dropdown">
            <select
              @change="change"
              aria-required="true"
              data-control="#p-eo-label-"
            >
              <option
                ref="cvs"
                v-for="(changeName1, index) in changeName"
                :key="index"
                :value="changeName1.sizeName"
              >
                {{ changeName1.sizeName }}
              </option>
            </select>
          </div>
        </dd>

        <dt>
          カラー：<b id="p-customize1カラー">{{ display1.color }}</b>
        </dt>

        <dd>
          <ul class="g-flow-sm">
            <li v-for="(setColor1, index) in setColor" :key="index">
              <label class="g-checkable g-checkable-circle">
                <input
                  @click="tm(setColor1.colorName)"
                  type="radio"
                  name="カラー"
                  value="setColor1.colorName"
                />
                <span
                  ><span class="g-checkable_checked"></span
                  ><img :src="setColor1.colorUrl" alt="图"
                /></span>
              </label>
            </li>
          </ul>
        </dd>
      </dl>

      <div class="js-catch-copy">{{ display1.display }}</div>

      <div class="g-units-xs js-sku-price">
        <div>
          <div class="g-flow-0 g-align-fbl">
            <dl class="p-price">
              <dd class="g-price g-price-lg price-size-up g-price-down">
                {{ display1.price }} <span>円</span>
              </dd>
            </dl>
          </div>

          <p class="g-font-sm">値下実施日：{{ display1.dropTime }}</p>
          <p class="g-font-sm">旧価格：{{ display1.oldPrice }}</p>
        </div>

        <div class="g-butterfly">
          <p class="p-point">
            獲得ポイント<span class="g-digit">{{ display1.integral }}pt </span>
            付与
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
      <div id="p-specMore" :aria-hidden="open" data-accordion-more="">
        <ul
          class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"
        ></ul>

        <table class="g-table-a js-sku-specs">
          <tbody>
            <tr>
              <th>商品コード</th>
              <td>{{ display1.goodsNumber }}</td>
            </tr>
            <tr>
              <th>カラー</th>
              <td>{{ display1.color }}</td>
            </tr>
            <tr>
              <th>サイズ</th>
              <td>
                幅{{ display1.size1 }}×奥行{{ display1.size2 }}×高さ{{
                  display1.size3
                }}cm
              </td>
            </tr>
            <tr>
              <th>素材</th>
              <td>{{ display1.material }}</td>
            </tr>

            <tr>
              <th>重量</th>
              <td>約{{ display1.weight }}</td>
            </tr>
            <tr>
              <th>保証年数</th>
              <td>{{ display1.warrantyYears }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="g-foot-v g-foot-sm" style="">
        <p class="g-align-tc" @click="openClick">
          <a
            class="g-btn g-btn-w-md displaymorespec"
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

<script>
import { onMounted, computed, ref, toRefs } from "vue";
import { useStore } from "../../store/index";
export default {
  props: {
    display1: {
      price: Number,
      oldPrice: Number,
      dropTime: String,
      integral: Number,
      goodsNumber: Number,
      color: String,
      size1: Number,
      size2: Number,
      size3: Number,
      material: String,
      weight: String,
      warrantyYears: String,
      display: String,
    },
  },
  computed: {
    sizeName() {
      console.log("1111111111111", this.$refs.cvs);
      return this.$refs.cvs;
    },
  },
  setup() {
    const store = useStore();
    //风格选择
    let changeName = computed(() => store.getters.getAllReviewDisPlay);

    let sizeName = ref("123");

    const change = (event) => {
      sizeName.value = event.target.value;
      console.log("event!!!!!!!!", event.target.value);
      store.commit("setChange", event.target.value);
    };
    onMounted(() => {});
    //获取color 和渲染color
    let setColor = computed(() => {
      console.log("eeeeeeee", store.getters.getReviewDisplay);
      return store.getters.getReviewDisplay;
    });
    //颜色点击事件
    const tm = (color) => {
      store.commit("setColor", color);
    };
    //展开点击事件
    let open = ref(false);
    const openClick = () => {
      open.value = !open.value;
    };
    return {
      open,
      openClick,
      tm,
      setColor,
      change,
      changeName,
      sizeName,
    };
  },
};
</script>

<style scoped>
g-lg-grid-2
  > .g-grid_item:nth-last-child(-n + 2):nth-child(2n + 1)
  ~ *
  .g-lg-grid-1
  > .g-grid_item,
.g-lg-grid-2 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item,
.g-lg-grid-4 > .g-grid_item,
.g-lg-grid-5 > .g-grid_item,
.g-lg-grid-6 > .g-grid_item {
  box-sizing: content-box;
}
.p-grid .g-grid_item {
  margin: auto !important;

  max-width: 395px;
  width: 100% !important;
  margin-top: 40px;
  padding: 0 !important;
}
.g-lg-grid-2 > .g-grid_item {
  box-sizing: content-box;
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
  margin: 0;
}
.p-customize dt {
  margin-bottom: 7px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select-sm select {
  height: 34px;
  padding-right: 33px;
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
.g-select select {
  width: 100%;
  padding: 0 39px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;
  appearance: none;
}
.g-select option {
  color: #333;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.p-customize dd + dt {
  margin-top: 15px;
}
.p-customize dt {
  margin-bottom: 7px;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
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
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 40px;
  height: 40px px;
}
.g-checkable-circle,
.g-lg-checkable-circle {
  border-radius: 50%;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;

  appearance: none;
}
button,
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
}
.g-checkable > span,
.g-lg-checkable > span {
  line-height: normal;
  display: inline-flex;
  vertical-align: bottom;
  align-items: center;
}
.g-checkable-img > span,
.g-checkable-circle > span,
.g-checkable-square > span,
.g-lg-checkable-img > span,
.g-lg-checkable-circle > span,
.g-lg-checkable-square > span {
  width: 100%;
  justify-content: center;
}
.g-checkable-circle .g-checkable_checked,
.g-lg-checkable-circle .g-checkable_checked {
  border-radius: 50%;
}
.g-checkable .g-checkable_checked,
.g-lg-checkable .g-checkable_checked {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0 2px #009e96 inset;
}
/* 控制光圈 */
/* .g-checkable input:checked + span .g-checkable_off,
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
} */
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
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 20px;
}
.js-sku-price,
.bundle-js-price {
  display: inline-block;
  max-width: 420px;
}
.js-sku-price,
.bundle-js-price {
  width: 100%;
}
.g-flow-0,
.g-lg-flow-0 {
  margin-bottom: 0;
  margin-left: 0;
}
.g-align-fbl,
.g-lg-align-fbl {
  align-items: baseline !important;
}
.p-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.g-browser-helvetica .g-price,
.g-browser-helvetica .g-lg-price {
  letter-spacing: 0.03em;
}
dd.price-size-up {
  font-size: 3.5rem;
}
.g-price-down,
.g-lg-price-down {
  color: #eb6157;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.g-font-sm,
.g-lg-font-sm {
  font-size: 1.2rem !important;
  line-height: 1.5 !important;
}
.g-units-xs > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-xs > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 5px;
}
.g-butterfly,
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.p-point .g-digit {
  font-size: larger;
  margin: 0 5px 0 1em;
  color: #eb6157;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.js-sku-price .p-point-link,
.bundle-js-price .p-point-link {
  width: auto;
}
.js-sku-price .p-point-link,
.bundle-js-price .p-point-link {
  text-align: right;
  flex-grow: 1;
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
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
.p-hd {
  font-size: 2rem;
  margin-bottom: 13px;
}
.p-featureIcons {
  padding-bottom: 15px;
}
.g-flow-xs,
.g-lg-flow-xs {
  margin-bottom: -5px;
  margin-left: -5px;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-flow-xs > *,
.g-lg-flow-xs > * {
  margin-bottom: 5px;
  margin-left: 5px;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-featureIcons img {
  width: 60px;
}
#p-specMore[data-accordion-more][aria-hidden="true"] {
  height: 200px;
}
[data-accordion-more][aria-hidden="true"] {
  position: relative;
  overflow: hidden;
  height: 160px;
}
#p-specMore .p-sku-manuals {
  margin-top: 0 !important;
  display: block;
  text-align: right;
  margin-bottom: 0;
}
.g-table-a,
.g-lg-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.g-table-a th,
.g-lg-table-a th {
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  background-color: #f7f7f7;
}
.g-table-a th,
.g-table-a td,
.g-lg-table-a th,
.g-lg-table-a td {
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
.g-table-a td,
.g-lg-table-a td {
  width: 100%;
}
.g-foot-sm,
.g-lg-foot-sm {
  margin-top: 20px;
}
.g-foot-v,
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.displaymorespec,
.displaymoredesc {
  padding: 0px 15px;
  display: inline-flex;
  min-width: 60px;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
}
a {
  text-decoration: none;
  color: #333;
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
</style>
