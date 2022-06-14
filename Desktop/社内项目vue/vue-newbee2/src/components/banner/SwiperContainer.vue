<template>
  <div id="swiper-div">
    <swiper-com></swiper-com>
  </div>
</template>

<script lang="ts">
import SwiperCom from "./SwiperCom.vue";
export default {
  components: { SwiperCom },
};
</script>

<style>
#swiper-div {
  width: 65%;
}
</style>
