<template>
  <div>
    <router-link to="/"><h1>主页</h1></router-link>
    <br /><br />
    <review-container></review-container>
  </div>
</template>

<script>
import ReviewContainer from "../components/review/ReviewContainer.vue";
export default {
  components: { ReviewContainer },
};
</script>

<style scoped></style>
