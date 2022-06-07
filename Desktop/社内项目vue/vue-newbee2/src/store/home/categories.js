const url = "http://localhost:3000/categories";
const headers = { Accept: "application/json" };

export default {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.categories.push(...payload);
    },
  },
  actions: {
    async setCategories(state) {
      const categories = await fetch(url, { headers });
      const j = await categories.json();
      state.commit("setCategories", j);
    },
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
  },
};
