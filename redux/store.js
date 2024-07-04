import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import localStorageMiddleware from "./middlewares/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

