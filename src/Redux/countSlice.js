import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});
export const { increaseCount, decreaseCount } = countSlice.actions;
export const countReducer = countSlice.reducer;
