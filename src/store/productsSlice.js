import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addInitialProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload.newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
    },
    addNewProductPrice: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.products[productIndex].prices = [
        ...state.products[productIndex].prices,
        action.payload.newPrice,
      ];
    },
    updateProductName: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.products[index].name = action.payload.productName;
    },
  },
});

export const {
  addInitialProducts,
  addProduct,
  deleteProduct,
  addNewProductPrice,
  updateProductName,
} = productsSlice.actions;

export default productsSlice.reducer;
