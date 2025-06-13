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
    add: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if(existingItem){
        alert("Item already in cart")
      } else{
        state.items.push(action.payload);
      }
    },

    remove: (state, action: PayloadAction<number>) => { 
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    }
})

export const { add,remove } = cartSlice.actions


export default cartSlice.reducer