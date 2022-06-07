<template>
  <section class="g-grid_item g-sm-block-sm" id="js-product-qa">
    <h2 class="g-h-2 g-h-i p-hd">
      <i class="g-s g-s-comment" aria-hidden="true"></i>
      <span>商品Q&A</span>
    </h2>

    <div
      id="ZVCQA"
      data-site-id="21f1714d-68e4-49b8-bc66-fed761ce701a"
      data-item-group-id="7518021s"
      data-needs-login="1"
      data-login-url=""
      data-user-id=""
      data-default-sort-key="created_at"
    >
      <div id="ZVCQuestionsArea">
        <!-- 排序和页面数 -->
        <div class="zv-cqa-step">
          <!-- page数 -->
          <div class="zv-cqa-step-link">
            <span>全{{ qaCount }}件</span>
            <button v-show="upButton" @click="upPage">上一页</button>
            <span>ページ{{ page }}/{{ qaPage }}</span>
            <button v-show="downButton" @click="downPage">下一页</button>
          </div>

          <div class="zv-select-wrap">
            <select
              @change="change"
              id="zv-cqa-select-sort"
              class="zv-select"
              name="sort"
            >
              <option value="total_yes">トップ評価</option>
              <option value="created_at" selected="">新しい順</option>
            </select>
          </div>
        </div>
        <template v-for="(Qa, index) in reviewQA" :key="index">
          <ReviewQaList :Qa="Qa"></ReviewQaList>
        </template>

        <!-- <div class="zv-cqa-step">
          <div class="zv-cqa-step-link">
            <span>全28件</span>

            <span>ページ1/10</span>

            <span class="zv-cqa-next zv-cqa-page-btn"
              ><i class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
                >&gt;</i
              ></span
            >
          </div>
        </div> -->
      </div>

      <!-- <div id="ZVCQAPost">
        <div class="zv-cqa-posting-rule">
          <p class="zv-cqa-posting-rule-title">ご注意ください</p>
          <ul>
            <li>
              「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
            </li>
     
            <li>
              ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの<a
                class="g-link-u"
                href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                target="_blank"
                >ニトリ商品Q&amp;Aについて</a
              >をご確認ください。
            </li>
          </ul>
        </div>

        <input
          type="textbox"
          id="ZVQuestionTextarea"
          class="zv-textbox"
          placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        />
        <div
          id="ZVAskPostArea"
          data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
        >
          <p class="zv-error-message" id="ZVLoginErrorQuestion">
            質問を投稿するにはログインが必要です。
          </p>
          <p class="zv-error-message" id="ZVEmptyErrorQuestion">
            質問を入力してください。
          </p>
          <p class="zv-error-message" id="ZVSpamErrorQuestion">
            しばらく時間をおいて投稿してください。
          </p>
          <button type="button" id="ZVPostQuestionButton" class="zv-btn">
            質問を投稿
          </button>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewQaList from "./ReviewQaList.vue";
//获取id
const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;
//初始化QA
onMounted(() => {
  store.dispatch("setReviewQA", goodsId);
  console.log("goodsidqqqqqqq", goodsId);
});

let reviewQA = computed(() => {
  return store.getters.getReviewQA;
  console.log("reviewQA88888888", store.getters.getReviewQA);
});
let qaCount = computed(() => {
  return store.getters.getQaCount;
  console.log("总件数88888888", store.getters.getQaCount);
});
let qaPage = computed(() => {
  return store.getters.getQaPage;
  console.log("总page数88888888", store.getters.getQaPage);
});
//当前页面数
let page = computed(() => store.getters.getPage);
let upButton = computed(() => store.getters.getUpButton);
let downButton = computed(() => store.getters.getDownButton);

//排序
const change = (e) => {
  store.commit("setSort", e.target.value);
};

//换页
let n = 0;
const upPage = () => {
  n = n - 3;
  store.commit("setUpPage", n);
};
const downPage = () => {
  n = n + 3;
  console.log("page的值   1", page);
  store.commit("setDownPage", n);
};
</script>

<style>
section {
  display: block;
}
.p-hd {
  font-size: 1.8rem;
  margin-bottom: 13px;
}
.g-h-i .g-i:first-child,
.g-h-i .g-s:first-child,
.g-sm-h-i .g-i:first-child,
.g-sm-h-i .g-s:first-child {
  margin-right: 0.5em;
}
.g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
  speak: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
#ZVCQA div.zv-cqa-step {
  box-shadow: 0 1px 0 0 #dbdbdb;
}
#ZVCQA div.zv-cqa-step {
  box-shadow: 0 1px 0 0 #dbdbdb;
}
.zv-cqa {
  margin: 0 0 15px;
  border-bottom: 1px dashed #dbdbdb;
  padding-bottom: 15px;
}
#ZVCQA {
  font-size: 14px;
  margin-bottom: 30px;
  color: #333;
  padding: 0;
}
.g-block-sm,
.g-sm-block-sm {
  margin-top: 30px;
}
</style>
