import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/app/lib/cartSlice/CartSlice'


export const makeStore = () =>{
return configureStore({
  reducer: {
        cart:cartReducer
  }
})

}
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']