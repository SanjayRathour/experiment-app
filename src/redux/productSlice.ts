import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [],
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
      console.log("remove from selected");
      const filteredProducts = state.selectedProducts.filter(
        (product: any) => action.payload.id != product.id
      );
      state.selectedProducts = filteredProducts;
    },
    setProducts: (state: any, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToSelected, removeFromSelected, setProducts } =
  productSlice.actions;

export default productSlice.reducer;
