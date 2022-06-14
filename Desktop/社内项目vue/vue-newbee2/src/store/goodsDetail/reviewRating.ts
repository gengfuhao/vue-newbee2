const url = "http://localhost:3000/goods/detail/review/rating/";
const headers = { Accept: "application/json" };
type ratingState = {
  reviewRating: {};
};
type ratingPayload = [
  {
    goodsId: number;
    rating: [];
  }
];
export default {
  state: {
    reviewRating: {},
  },
  mutations: {
    //syncrous
    setReviewRating(state: ratingState, payload: ratingPayload) {
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
    async setReviewRating({ commit }: { commit: Function }, payload: number) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setReviewRating", j);
    },
  },
  getters: {
    getReviewRating: (state: ratingState) => {
      return state.reviewRating;
    },
  },
};
