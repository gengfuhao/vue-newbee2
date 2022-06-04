const url = "http://localhost:3000/goods/display/";
const headers = { Accept: "application/json" };

export default {
  state: {
    display: [], //第三层
    reviewDisplay: [], //第二层
    allReviewDisPlay: [], //第一层
  },

  mutations: {
    //syncrous
    setDisplay(state, payload) {
      state.display = payload[0].single[0].gray;
      state.reviewDisplay = payload[0].single;
      state.allReviewDisPlay = payload;
      console.log("array push ", payload);
      console.log("array push99999999 ", state.display);
    },
    //选择风格
    setChange(state, payload) {
      state.reviewDisplay = state.allReviewDisPlay.filter(
        (index) => index.sizeName === payload
      );
      console.log("setchange!!!!!!!!!", state.reviewDisplay);
    },
    //设置颜色
    setColor(state, payload) {
      //19-gray  61-black 18-rose
      console.log("changenumber", payload);
      switch (payload) {
        case 19:
          state.display = state.reviewDisplay[0].gray;
          break;
        case 18:
          state.display = state.reviewDisplay[1].black;
          break;
        case 61:
          state.display = state.reviewDisplay[2].rose;
          break;
      }
    },
  },
  actions: {
    //asyncronous
    async setDisplay(context, payload) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      context.commit("setDisplay", j);
      console.log("action中的display数据", j);
    },
  },
  getters: {
    getDisplay: (state) => {
      console.log("in getDisplay method", state.display);
      return state.display;
    },
    getReviewDisplay: (state) => {
      return state.reviewDisplay;
    },
    getAllReviewDisPlay: (state) => {
      return state.allReviewDisPlay;
    },
  },
};
