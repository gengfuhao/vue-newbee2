<template>
  <div class="content-container">
    <banner-com></banner-com>
    <hr />
    <sub-banner />
    <hr />
    <ul-container></ul-container>
  </div>
</template>

<script lang="ts">
import UlContainer from "../components/goodsList/UlContainer.vue";
import SubBanner from "../components/goodsList/SubBanner.vue";
import BannerCom from "../components/banner/BannerCom.vue";

export default {
  components: { UlContainer, SubBanner, BannerCom },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
}
</style>
