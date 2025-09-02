import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [], // favourite products ka array
  },
  reducers: {
    addToFavourite: (state, action) => {
      // check karo agar product already favourite me to dobara na add ho
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavourites: (state) => {
      state.items = [];
    },
  },
});

export const { addToFavourite, removeFromFavourite, clearFavourites } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
