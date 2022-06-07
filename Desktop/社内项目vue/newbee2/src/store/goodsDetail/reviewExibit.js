const url = "http://localhost:3000/goods/display/";
const headers = { Accept: "application/json" };

export default {
  state: {
    display: [], //第三层
    reviewDisplay: [], //第二层
    allReviewDisPlay: [], //第一层
  },

  mutations: {
    //初始化
    setDisplay(state, payload) {
      state.display = payload[0].single[0].gray;
      state.reviewDisplay = payload[0].single;
      state.allReviewDisPlay = payload;
      console.log("array push ", payload);
      console.log("array push99999999 ", state.display);
    },
    //选择风格
    setChange(state, payload) {
      state.allReviewDisPlay.filter((index) => {
        if (index.sizeName === payload) {
          state.reviewDisplay = index.single || index.double || index.queen;
          //改变风格 从新初始化颜色
          state.display = state.reviewDisplay[0].gray;
          console.log("setchange!!!!!!!!!", state.reviewDisplay);
        }
      });
    },
    //设置颜色
    setColor(state, payload) {
      console.log("setColor", state.reviewDisplay);
      state.reviewDisplay.filter((index) => {
        if (index.colorName === payload) {
          state.display = index.gray || index.black || index.rose;
          console.log("setColor!!!!!!!!!", state.display);
        }
      });
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
