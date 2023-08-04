import { createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
    },
  },
});

// use slice
export const login = async (dispatch, user) => {
  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  try {
    const response = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const { loginSuccess, loginFailure } = userSlice.actions; // need to export even though its in same file
export default userSlice.reducer;