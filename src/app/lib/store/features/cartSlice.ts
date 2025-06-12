import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export interface CartState {
  items: string[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      state.items.push(action.payload) 
    },
    
    }
})

export const { add } = cartSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer