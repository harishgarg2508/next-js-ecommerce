import { createSlice,type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

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


export default cartSlice.reducer