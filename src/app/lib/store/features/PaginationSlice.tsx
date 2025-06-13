import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationType {
  value?: number;
  total?: number
}


const initialState: PaginationType={
  value: 0,
  total: 0
}

const paginationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<number>) => {
     state.value=action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrent,setTotal } = paginationSlice.actions;
export default paginationSlice.reducer;