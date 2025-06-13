import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from './storage'
import cartReducer from '@/app/lib/store/features/cartSlice'

const persistConfig = {
  key: 'root',
  // storage,
  whitelist: ['cart'] 
}

// const persistedReducer = persistReducer(persistConfig, cartReducer)

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
    //     }
    //   })
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']