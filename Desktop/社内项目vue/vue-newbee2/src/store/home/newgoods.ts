const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };
export type newGoodsesState = {
  newGoodses: [];
};

export default {
  state: {
    newGoodses: [],
    // day: { years: [], year: new Date().getFullYear(), month: 0, day: 1 },
  },
  mutations: {
    setNewGoods(state: newGoodsesState, payload: []) {
      state.newGoodses = payload;
    },
  },
  actions: {
    async setNewGoodses({ commit }: { commit: Function }) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setNewGoods", j);
    },
  },
  modules: {},
  getters: {
    getNewGoodses: (state: newGoodsesState) => {
      return state.newGoodses;
    },
  },
};
