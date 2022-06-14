const url = "http://localhost:3000/goods/display/";
const headers = { Accept: "application/json" };
type displayState = {
  display: [];
  reviewDisplay: [];
  allReviewDisPlay: [];
};
// type displayPayload3 = {
//   goodsId: number;
//   sizeName: string;
//   color: [];
// };
// type InfoList = {
//   titleName: string;
//   integral: string;
//   dropTime: string;
//   goodsNumber: string;
//   color: string;
//   size1: string;
//   size2: string;
//   size3: string;
//   material: string;
//   weight: string;
//   warrantyYears: string;
//   photo: [];
//   price: number;
//   display: string;
//   oldPrice: number;
// };
// type photoList = {
//   photo1: string;
//   photo2: string;
//   photo3: string;
//   photo4: string;
// };

export default {
  state: {
    display: [], //第三层color
    reviewDisplay: [], //第二层size
    allReviewDisPlay: [], //第一层全部数据
  },

  mutations: {
    // 初始化
    setDisplay(state: displayState, payload: any) {
      state.display = payload[0].size[0].color;
      state.reviewDisplay = payload[0].size;
      state.allReviewDisPlay = payload;
      console.log("allreviewDisplay !!!!store", state.allReviewDisPlay);
    },
    // //选择size
    setChange(state: any, payload: string) {
      state.allReviewDisPlay.filter((index: any) => {
        if (index.sizeName === payload) {
          state.reviewDisplay = index.size;
          console.log("state.reviewDisplay!!!!!!!!! ", state.reviewDisplay);

          //改变size 从新初始化color
          let isDisplay = state.reviewDisplay.filter(
            (index: any) => state.display[0].color === index.colorName
          );
          console.log("123123123", isDisplay.length, isDisplay);
          // state.display = [];
          if (isDisplay.length === 0) {
            state.display = state.reviewDisplay[0].color;
          } else {
            state.display = isDisplay[0].color;
          }
        }
      });
    },

    //设置颜色
    setColor(state: any, payload: string) {
      console.log("setColor", state.reviewDisplay);
      state.reviewDisplay.filter((index: any) => {
        if (index.colorName === payload) {
          state.display = index.color;
          console.log("setColor!!!!!!!!!", state.display);
        }
      });
    },
  },
  actions: {
    //asyncronous
    async setDisplay({ commit }: { commit: Function }, payload: string) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      commit("setDisplay", j);
      console.log("action中的display数据123", j);
    },
  },
  getters: {
    getDisplay: (state: displayState) => {
      console.log("in getDisplay method", state.display);
      return state.display;
    },
    getReviewDisplay: (state: displayState) => {
      return state.reviewDisplay;
    },
    getAllReviewDisPlay: (state: displayState) => {
      console.log("getAllReviewDisPlay", state.allReviewDisPlay);

      return state.allReviewDisPlay;
    },
  },
};
