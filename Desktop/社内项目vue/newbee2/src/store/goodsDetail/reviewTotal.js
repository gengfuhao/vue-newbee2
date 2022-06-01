const url = "http://localhost:3000/goods/detail/review/total/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviewTotal: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state, payload) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload[0];
    },
  },
  actions: {
    //asyncronous
    async setReviewTotal(state, payload) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      state.commit("setReviewTotal", j);
    },
  },
  getters: {
    getReviewTotal: (state) => {
      return state.reviewTotal;
    },
  },
};
