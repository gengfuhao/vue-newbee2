<template>
  <dd>
    <em v-for="(levelThreeCat, index3) in categories3" :key="index3">
      <a :href="levelThreeCat.link">
        {{ levelThreeCat.categoryName }}
      </a>
    </em>
  </dd>
</template>

<script lang="ts">
export default {
  props: {
    categories3: Array,
  },
};
</script>
