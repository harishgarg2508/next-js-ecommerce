'use client'

import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

import { AppStore, makeStore } from '@/app/lib/store/store'
const StoreProvider = ({children}:{children:React.ReactNode})=>{
    const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()

    //add initial data
        // storeRef.current.dispatch(add("testProductId"))

  }
      return <Provider store={storeRef.current}>{children}</Provider>

}

export default StoreProvider