const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

export default {
  state: {
    images: [],
  },
  mutations: {
    setImages(state, payload) {
      state.images.push(...payload);
    },
  },
  actions: {
    async setImages(state) {
      const images = await fetch(url, { headers });
      const j = await images.json();
      state.commit("setImages", j);
    },
  },
  getters: {
    getImages: (state) => {
      return state.images;
    },
  },
};
