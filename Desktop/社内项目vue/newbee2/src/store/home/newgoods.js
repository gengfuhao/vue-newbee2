const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

export default {
  state: {
    newGoodses: [],
    day: { years: [], year: new Date().getFullYear(), month: 0, day: 1 },
  },
  mutations: {
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
    },
  },
  actions: {
    async setNewGoodses(state) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
    },
  },
  modules: {},
  getters: {
    getNewGoodses: (state) => {
      return state.newGoodses;
    },
  },
};
