import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";

const initialState = {
  value: {
    products: PRODUCTS,
    productsByCategory: [],
    productsSelected: {},
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProductByCategory: (state, action) => {
      const productsFiltered = state.value.products.filter(
        (product) => product.category === action.payload
      );
      state.value.productsByCategory = productsFiltered;
    },
    setProductSelected: (state, action) => {
      const productSelected = state.value.productsByCategory.find(
        (product) => product.id === action.payload
      );
      state.value.productsSelected = productSelected;
    },
  },
});

export const { setProductByCategory, setProductSelected } =
  productsSlice.actions;

export default productsSlice.reducer;
