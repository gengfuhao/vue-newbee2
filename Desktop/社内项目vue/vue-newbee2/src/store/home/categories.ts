const url = "http://localhost:3000/categories";
const headers = { Accept: "application/json" };

export type categoriesState = {
  categories: [];
};

export default {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state: categoriesState, payload: []) {
      state.categories = payload;
    },
  },
  actions: {
    async setCategories({ commit }: { commit: Function }) {
      const categories = await fetch(url, { headers });
      const j = await categories.json();
      commit("setCategories", j);
    },
  },
  getters: {
    getCategories: (state: any) => {
      return state.categories;
    },
  },
};
