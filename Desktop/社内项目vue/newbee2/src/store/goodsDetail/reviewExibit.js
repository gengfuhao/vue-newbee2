const url = "http://localhost:3000/goods/display/";
const headers = { Accept: "application/json" };

export default {
  state: {
    display: [], //第三层
    reviewDisplay: [], //第二层
    allReviewDisPlay: [], //第一层
    changeName: "スモールシングル - シング",
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
      if (payload === "7518021") {
        state.reviewDisplay = state.allReviewDisPlay[0].single;
        state.display = state.reviewDisplay[0].gray;
        state.changeName = "スモールシングル-シングル";
        console.log("state.allReviewDisPlay[0].single", state.reviewDisplay);
        console.log("sstate.display", state.display);
      }
      if (payload === "7518022") {
        state.reviewDisplay = state.allReviewDisPlay[1].double;
        state.display = state.reviewDisplay[0].gray;
        state.changeName = "セミダブル-ダブル-シングル";
        console.log("state.allReviewDisPlay[2].double", state.reviewDisplay);
        console.log("sstate.display", state.display);
      }
      if (payload === "7518023") {
        state.reviewDisplay = state.allReviewDisPlay[2].queen;
        state.display = state.reviewDisplay[0].gray;
        state.changeName = "ワイドダブル-クイーン";
        console.log("state.allReviewDisPlay[3].queen", state.reviewDisplay);
        console.log("state.display", state.display);
      } else {
        state.reviewDisplay = state.allReviewDisPlay[0].single;
      }
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
      return state.display[0];
    },
    getChangeName: (state) => {
      return state.changeName;
    },
  },
};
