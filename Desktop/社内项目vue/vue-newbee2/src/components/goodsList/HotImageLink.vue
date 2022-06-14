<template>
  <router-link :to="link"> <img :src="imgSrc" :alt="name" /></router-link>
</template>

<script lang="ts">
export default {
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false, //不允许被继承
};
</script>

<style scoped>
img {
  height: 250px;
  opacity: 0.8;
  margin: 10px;
}
</style>
