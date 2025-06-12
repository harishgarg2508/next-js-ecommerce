'use client'

import React, { Children } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/lib/store/store'
const StoreProvider = ({children}:{children:React.ReactNode})=>{
  return <Provider store={store}>
    {children}
  </Provider>
}

export default StoreProvider