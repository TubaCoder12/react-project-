import { createSlice } from "@reduxjs/toolkit";

const saveUser = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: saveUser,
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    Logout: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
    },
  },
});

// Action creators are generated for each case reducer function
export const { Login, Logout } = AuthSlice.actions;

export default AuthSlice.reducer;
