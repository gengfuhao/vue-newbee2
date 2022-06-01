<template>
  <div class="g-layout_body">
    <div class="p-grid g-lg-grid-2 g-grid-lg">
      <!-- <PhDisplay></PhDisplay> -->

      <DetailPage></DetailPage>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import DetailPage from "./DetailPage.vue";
import PhDisplay from "./PhDisplay.vue";
//获取id
const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;
//初始化QA
onMounted(() => {
  store.dispatch("setDisplay", goodsId);
  console.log("goodsidqqqqqqq", goodsId);
});

// let qaCount = computed(() => {
//   return store.getters.getQaCount;
//   console.log("总件数88888888", store.getters.getQaCount);
// });
// let qaPage = computed(() => {
//   return store.getters.getQaPage;
//   console.log("总page数88888888", store.getters.getQaPage);
// });
// //当前页面数
// let page = computed(() => store.getters.getPage);
// let upButton = computed(() => store.getters.getUpButton);
// let downButton = computed(() => store.getters.getDownButton);

// //排序
// const change = (e) => {
//   store.commit("setSort", e.target.value);
// };

// //换页
// let n = 0;
// const upPage = () => {
//   n = n - 3;
//   store.commit("setUpPage", n);
// };
// const downPage = () => {
//   n = n + 3;
//   console.log("page的值   1", page);
//   store.commit("setDownPage", n);
// };
</script>

<style>
.g-lg-grid-2 {
  display: flex;
  flex-wrap: wrap;
}
</style>
