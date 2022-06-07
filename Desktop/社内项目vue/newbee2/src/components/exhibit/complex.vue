<template>
  <div class="g-layout_body">
    <div class="p-grid g-lg-grid-2 g-grid-lg">
      <template v-for="(display1, value) in display" :key="value">
        <PhDisplay :display1="display1"></PhDisplay>
        <DetailPage :display1="display1"></DetailPage>
      </template>
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
let display = computed(() => {
  return store.getters.getDisplay;
});
</script>

<style>
.g-layout-detail .g-layout_body {
  grid-row: 3;
  grid-column: 1;
}
</style>
