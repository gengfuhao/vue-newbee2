<template>
  <div class="zv-cqa">
    <div class="zv-cqa-question">
      <span class="zv-space">Q. </span>
      <span class="zv-cqa-q-text">{{ Qa.question }}</span>
    </div>
    <div class="zv-cqa-q-info">
      <span class="zv-cqa-q-created-at">投稿日&nbsp;{{ Qa.reviewDate }}</span>
    </div>
    <div class="zv-cqa-answers">
      <div class="zv-cqa-answer zv-cqa-answer-first">
        <span class="zv-space">A. </span>
        <div class="zv-cqa-a-content">
          <div class="zv-cqa-a-text">
            <p class="zv-p">
              {{ Qa.answer }}
            </p>
          </div>

          <div class="zv-cqa-a-info">
            <span class="zv-space"></span>
            <span class="zv-cqa-a-created-at"
              >回答日&nbsp;{{ Qa.reviewDate }}</span
            >
          </div>
          <div class="zv-helpful-form" data-answer-id="249761">
            <span class="zv-space"></span>

            <span class="zv-helpful-col">
              <span
                class="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-249761"
                data-count="249761"
                data-clickable=""
                data-answer-id="249761"
              >
                <i class="zv-helpful zv-helpful-yes-i"></i>
                <span
                  class="zv-helpful zv-helpful-yes zv-helpful-yes-249761"
                  data-count="249761"
                  id="ZVHelpfulYes-249761"
                >
                  <i
                    @click="review.count++"
                    style="cursor: pointer"
                    class="g-s g-s-like-g material-symbols-rounded"
                  >
                    thumb_up
                  </i>
                  参考になった</span
                >
                <span
                  class="zv-helpful zv-helpful-num zv-helpful-yes-num zv-helpful-yes-num-249761"
                  data-count="249761"
                  id="ZVHelpfulYesNum-249761"
                  >({{ Qa.count }}人)</span
                >
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Qa: {
      //获得
      count: Number,
      question: String,
      answer: String,
      reviewDate: String,
    },
  },
};
</script>

<style scoped></style>
