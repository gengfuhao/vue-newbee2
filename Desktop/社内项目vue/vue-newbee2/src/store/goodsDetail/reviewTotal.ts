const url = "http://localhost:3000/goods/detail/review/total/";
const headers = { Accept: "application/json" };
type totalState = {
  reviewTotal: {};
};
type totalPayload = [
  {
    goodsId: number;
    ratingAvg: number;
    reviewCount: number;
    titleCount: number;
  }
];
export default {
  state: {
    reviewTotal: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state: totalState, payload: totalPayload) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload[0];
    },
  },
  actions: {
    //asyncronous

    async setReviewTotal({ commit }: { commit: Function }, payload: number) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j: {} = await reviewTotal.json();
      commit("setReviewTotal", j);
    },
  },
  getters: {
    getReviewTotal: (state: totalState) => {
      return state.reviewTotal;
    },
  },
};
