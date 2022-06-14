import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

import category from "./home/categories";
import newgoods from "./home/newgoods";
import swiper from "./home/swiper";
import review from "./goodsDetail/review";
import reviewTotal from "./goodsDetail/reviewTotal";
import reviewRating from "./goodsDetail/reviewRating";
import reviewQA from "./goodsDetail/reviewQA";
import reviewExibit from "./goodsDetail/reviewExibit";
import infoCart from "./goodsDetail/infoCart";

type State = {};
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  modules: {
    category,
    newgoods,
    swiper,
    review,
    reviewTotal,
    reviewRating,
    reviewQA,
    reviewExibit,
    infoCart,
  },
});
export const useStore = () => {
  return baseUseStore(key);
};
