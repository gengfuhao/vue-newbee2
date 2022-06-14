//该页面为商品详细页面的数据处理页面

const url =
  "http://localhost:3000/goods/detail/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export type reviewState = {
  reviews: { reviewList: number | string[] };
  reviews2: { reviewList: number | string[] };
  reviewAll: [];
  showed: boolean;
};
export type reviewPayload = [
  {
    goodsId: number;
    offset: number;
    reviewCount: number;
    reviewList: number | string[];
  }
];
export type reviewListPayload = {
  id: number;
  rating: number;
  nickName: string;
  goodsName: string;
  count: number;
  title: string;
  content: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  reviewDate: string;
};

export default {
  state: {
    reviews: { reviewList: [] },
    reviews2: { reviewList: [] },
    reviewAll: [],
    showed: false,
  },
  mutations: {
    setReviews(state: reviewState, payload: reviewPayload) {
      state.reviews = payload[0];
    },
    setReviews2(state: reviewState, payload: reviewPayload) {
      state.reviews2 = payload[0];
    },
    setShowed(state: reviewState) {
      if (state.showed) {
        state.showed = false;
      } else {
        state.showed = true;
      }
    },

    filterReviews(state: any, rating: number) {
      if (state.reviewAll.length === 0) {
        state.reviewAll.push(...state.reviews.reviewList);
        state.reviewAll.push(...state.reviews2.reviewList);
      }
      const arr = state.reviewAll.filter(
        (review: reviewListPayload) => rating == review.rating
      );
      state.reviews.reviewCount = arr.length;
      state.reviews.reviewList = arr.slice(0, 3);
      state.reviews2.reviewList = [];
      if (arr.length > 3) {
        state.reviews2.reviewList = arr.slice(3);
      }
    },
  },
  actions: {
    async setReviews(
      { commit }: { commit: Function },
      payload: { goodsId: string; offset: number }
    ) {
      const { goodsId, offset } = payload;
      const newUrl = url
        .replace(":goodsId", goodsId)
        .replace(":offset", offset + "");
      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();

      if (offset === 0) {
        commit("setReviews", j);
      } else {
        commit("setReviews2", j);
      }
    },
  },
  getters: {
    getReviews: (state: reviewState) => {
      return state.reviews;
    },
    getReviews2: (state: reviewState) => {
      return state.reviews2;
    },
    getShowd: (state: reviewState) => {
      return state.showed;
    },
  },
};
