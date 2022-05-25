import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: {
    uuid: "",
    group: "",
    cart: [],
    products: [],
    loaded: false,
  },
  selectedProducts: [],
};

export const productSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    addToSelected: (state: any, action: PayloadAction<any>) => {
      state.selectedProducts = [...state.selectedProducts, action.payload];
    },
    removeFromSelected: (state: any, action: PayloadAction<any>) => {
      const filteredProducts = state.selectedProducts.filter(
        (product: any) => action.payload.id != product.id
      );
      state.selectedProducts = filteredProducts;
    },
    setProducts: (state: any, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    resetProducts: (state: any) => {
      return { ...initialState };
    },
    setProductLoaded: (state: any) => {
      state.products.loaded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToSelected,
  removeFromSelected,
  setProducts,
  resetProducts,
  setProductLoaded,
} = productSlice.actions;

export default productSlice.reducer;
