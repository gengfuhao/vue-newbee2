const url = "http://localhost:3000/goods/detail/review/rating/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviewRating: {},
  },
  mutations: {
    //syncrous
    setReviewRating(state, payload) {
      // state.reviewRating.push(payload);
      //state.reviewRating = payload
      state.reviewRating = payload[0];
      // console.log(
      //   "array push333333333mutation " +
      //     state.reviewRating.push(payload[0].view)
      // );
    },
  },
  actions: {
    //asyncronous
    async setReviewRating(state, payload) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      state.commit("setReviewRating", j);
    },
  },
  getters: {
    getReviewRating: (state) => {
      return state.reviewRating;
    },
  },
};
