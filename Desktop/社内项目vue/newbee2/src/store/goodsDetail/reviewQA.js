const url = "http://localhost:3000/goods/detail/review/qa/";

const headers = { Accept: "application/json" };

export default {
  state: {
    QaList: [],
    allQaList: [],
    page: 1,
    upButton: true,
    downButton: true,
  },
  mutations: {
    setSort(state, payload) {
      // state.page = 1;

      if (payload === "created_at") {
        state.allQaList.sort((a, b) => {
          return new Date(b.reviewDate) - new Date(a.reviewDate);
        });
        // state.QaList = state.allQaList.slice(0, 3);
      }
      if (payload === "total_yes") {
        state.allQaList.sort((a, b) => b.count - a.count);
        // state.QaList = state.allQaList.slice(0, 3);
      }
    },

    //换页
    setUpPage(state, payload) {
      state.page--;
      state.QaList = state.allQaList.slice(payload, payload + 3);
    },
    setDownPage(state, payload) {
      state.page++;
      state.QaList = state.allQaList.slice(payload, payload + 3);
    },
    setReviewQA(state, payload) {
      state.QaList = payload[0].reviewQA.slice(0, 3);
      state.allQaList = payload[0].reviewQA;
      console.log("mutations中的QA", state.QaList);
    },
  },

  actions: {
    async setReviewQA(context, payload) {
      const reviewQA = await fetch(url + 10195, { headers });
      const j = await reviewQA.json();
      context.commit("setReviewQA", j);
      console.log("action中的QA666666666", j);
    },
  },
  getters: {
    getReviewQA: (state) => {
      console.log("get中的qa数据", state.QaList);
      return state.QaList;
    },
    getQaCount: (state) => {
      console.log("get中的getQaCount数据", state.QaList);
      return state.allQaList.length;
    },
    getQaPage: (state) => {
      console.log("get中的getQaCount数据", state.QaList);

      return Math.ceil(state.allQaList.length / 3);
    },
    getPage: (state) => {
      return state.page;
    },
    getUpButton: (state) => {
      if (state.page == 1) {
        state.upButton = false;
        return state.upButton;
      } else {
        state.upButton = true;
        return state.upButton;
      }
    },
    getDownButton: (state) => {
      if (state.page == Math.ceil(state.allQaList.length / 3)) {
        state.downButton = false;
        return state.downButton;
      } else {
        state.downButton = true;
        return state.downButton;
      }
    },
  },
};
