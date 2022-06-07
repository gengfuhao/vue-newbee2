import { createStore } from "vuex";
import category from "./home/categories";
import newgoods from "./home/newgoods";
import swiper from "./home/swiper";
import review from "./goodsDetail/review";
import reviewTotal from "./goodsDetail/reviewTotal";
import reviewRating from "./goodsDetail/reviewRating";
import reviewQA from "./goodsDetail/reviewQA";
import reviewExibit from "./goodsDetail/reviewExibit";

export default createStore({
  modules: {
    category,
    newgoods,
    swiper,
    review,
    reviewTotal,
    reviewRating,
    reviewQA,
    reviewExibit,
  },
});
