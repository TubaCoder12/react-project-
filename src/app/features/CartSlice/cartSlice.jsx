import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    shippingCharges: 250,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1; // already in cart -> increase quantity
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    // ✅ decrease quantity
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    // ✅ increase quantity explicitly
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
