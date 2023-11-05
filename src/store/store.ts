import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/Product.Slice";
const store = configureStore({
  reducer: {
    ProductSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
