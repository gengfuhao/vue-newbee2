<template>
  <ul class="flex-ul">
    <template v-for="(goods, index) in getNewGoodses" :key="index">
      <goods-li :goods="goods"></goods-li>
    </template>
  </ul>
</template>

<script lang="ts">
import GoodsLi from "./GoodsLi.vue";
import { mapActions, mapGetters } from "vuex";

import { defineComponent } from "vue";
export default defineComponent({
  // 已启用类型推断
  components: {
    GoodsLi,
  },
  methods: {
    ...mapActions(["setNewGoodses"]),
  },
  computed: {
    ...mapGetters(["getNewGoodses"]),
  },
  mounted(): void {
    this.setNewGoodses();
  },
});
</script>

<style>
.flex-ul {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  flex-wrap: wrap;
}
</style>
