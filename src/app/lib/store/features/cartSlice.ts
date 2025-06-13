import { createSlice,type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ProductType {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    category?: string;
}


export interface CartState {
  items: ProductType[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      state.items.push(action.payload) 
      const existing =  state.items.find((item)=>(item.id === action.payload.id))
      if(!existing){
        state.items.push(action.payload)
      }
      console.log(state.items)
    },
    
    }
})

export const { add } = cartSlice.actions


export default cartSlice.reducer