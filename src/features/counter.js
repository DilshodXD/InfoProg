import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, payload) => {
      state.count += 1;
    },
    decrement: (state, payload) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
