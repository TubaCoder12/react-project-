import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth/Auth";
import favouritesReducer from "./features/Favourite/favourite";
import cartReducer from "./features/CartSlice/cartSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouritesReducer,
    cart: cartReducer,
  },
  devTools: true, // 🔥 yeh add karna zaroori hai
});
