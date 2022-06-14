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

<script>
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
import DetailPage from "./DetailPage.vue";
import PhDisplay from "./PhDisplay.vue";

export default {
  components: {
    DetailPage,
    PhDisplay,
  },
  setup() {
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
    return {
      display,
    };
  },
};
</script>

<style>
.g-layout-detail .g-layout_body {
  grid-row: 3;
  grid-column: 1;
}
</style>
