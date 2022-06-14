<template>
  <moveInfoCartVue v-bind="display"></moveInfoCartVue>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
import moveInfoCartVue from "./moveInfoCart.vue";
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
console.log("infocart123", infoCart);
const display = computed(() => {
  return store.getters.getDisplay[0];
});
</script>

<style scoped></style>
