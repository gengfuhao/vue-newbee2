<template>
  <div>
    <hot-image-link v-bind="goods"></hot-image-link>
  </div>
</template>

<script lang="ts">
import HotImageLink from "./HotImageLink.vue";
export default {
  components: {
    HotImageLink,
  },
  props: {
    goods: Object,
  },
};
</script>

<style scoped></style>
