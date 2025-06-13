import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  page: number;
}
const initialState: PageState = {
  page: 0,
};

const PaginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.number;
    },
  },
});

export const { setPage } = PaginationSlice.actions;
export default PaginationSlice.reducer;