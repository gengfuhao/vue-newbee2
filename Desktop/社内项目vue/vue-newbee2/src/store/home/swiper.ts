const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };
export type swiperState = {
  images: [];
};

export default {
  state: {
    images: [],
  },
  mutations: {
    setImages(state: swiperState, payload: []) {
      state.images = payload;
    },
  },
  actions: {
    async setImages({ commit }: { commit: Function }) {
      const images = await fetch(url, { headers });
      const j = await images.json();
      commit("setImages", j);
    },
  },
  getters: {
    getImages: (state: swiperState) => {
      return state.images;
    },
  },
};
