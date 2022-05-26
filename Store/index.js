import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/index.js";
import productsReducer from "../features/products/index.js";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;
