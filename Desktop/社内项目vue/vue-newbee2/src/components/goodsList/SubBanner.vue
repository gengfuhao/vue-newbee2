<template>
  <div id="sub_banner">
    <hot-image
      v-for="(goods, index) in hotGoods"
      :key="index"
      :goods="goods"
    ></hot-image>
  </div>
</template>

<script lang="ts">
import HotImage from "./HotImage.vue";
import { reactive, onMounted, toRefs } from "vue";
import { defineComponent } from "vue";
import { RESOLVE_FILTER } from "@vue/compiler-core";

export default defineComponent({
  // 已启用类型推断
  components: { HotImage },
  setup() {
    let state = reactive({
      hotGoods: [],
    });
    let { hotGoods } = toRefs(state);

    console.log("qqqqqqqqqqq!", hotGoods);
    onMounted(async () => {
      let url: string = "http://localhost:3000/hotGoodses";
      const headers = { Accept: "application/json" };
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      hotGoods.value = j;
    });

    return {
      hotGoods,
    };
  },
});
</script>

<style>
#sub_banner {
  display: flex;
  width: 1226px;
  flex-shrink: 0;
  justify-content: space-between;
  margin-top: 15px;
  text-decoration: none;
  list-style-type: none;
  font-family: Microsoft Yahei;
  flex-wrap: wrap;
}
</style>
