import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/ProductInterface";
import { GET } from "../../service/api";

const initialState = {
  products: [] as IProduct[],
  listing_loader: false,
  query_params: {
    size: 10,
    page: 1,
    total: 0,
  },
  selectedProduct: {} as IProduct,
};
const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    updateProductQueryParams: (state, action) => {
      state.query_params = {
        ...state.query_params,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET("products/list").fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload.products;
      state.query_params = {
        ...state.query_params,
        total: action.payload.total,
      };
      state.listing_loader = false;
    });

    builder.addCase(GET("products/list").pending, (state) => {
      state.listing_loader = true;
    });
    builder.addCase(GET("products/list").rejected, (state) => {
      state.listing_loader = false;
      state.products = [];
    });
    builder.addCase(GET("products/details").fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
    });
  },
});

export const { updateProductQueryParams } = ProductSlice.actions;
export default ProductSlice.reducer;
