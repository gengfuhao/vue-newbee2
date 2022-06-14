<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="slide" v-for="slide in slides" :key="slide">
      <a :href="slide.link"><img :alt="slide.title" :src="slide.imgSrc" /></a>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper";

import { onMounted, computed } from "vue";
import { useStore } from "../../store/index";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setImages");
    });
    let slides = computed(() => store.getters.getImages);

    return {
      slides,
      modules: [Navigation, Autoplay, EffectCoverflow, Pagination],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-navigation-size: 50px; /* 设置按钮大小 */
}
img {
  width: 100%;
}
</style>
