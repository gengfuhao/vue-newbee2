const url = "http://localhost:3000/info/cart/";
const headers = { Accept: "application/json" };

type infoCartState = {
  infoCart: {};
  userInfo: [];
};
type infoCartPayload = [
  {
    goodsId: Number;
    link: String;
    img: String;
    deliveryMethod: String;
    exchange: String;
    postage: String;
    amount: Number;
    delivery: String;
  }
];
type userPayload = [
  {
    amount: String;
    photo: String;
    price: String;
    goodsNumber: String;
    color: String;
    sizeName: String;
    delivery: String;
    id: Number;
    userId: Number;
  }
];
export default {
  state: {
    infoCart: {},
    userInfo: [],
  },
  mutations: {
    setInfoCart(state: infoCartState, payload: infoCartPayload) {
      state.infoCart = payload[0];
    },
    setUser(state: any, payload: userPayload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async setUser({ commit }: { commit: Function }) {
      const reviewRating = await fetch("http://localhost:3000/user", {
        headers,
      });
      const j = await reviewRating.json();
      commit("setUser", j);
      console.log("setUser!!!!!!!!!!setUser!!!!!!", j);
    },

    async setInfoCart({ commit }: { commit: Function }, payload: number) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setInfoCart", j);
    },
  },
  getters: {
    getInfoCart: (state: infoCartState) => {
      console.log("getInfoCart!121232435!!!!!!!", state.infoCart);
      return state.infoCart;
    },
    getUserInfo: (state: infoCartState) => {
      return state.userInfo;
    },
  },
};
