'use client'
import { useAppDispatch } from '@/app/lib/hooks';
import { Button } from '@mui/material'
import React from 'react'
import { add } from '@/app/lib/store/features/cartSlice';
import ProductType from '@/config/definitions';


function AddToCartButton(props:ProductType) {

    const dispatch = useAppDispatch();

      const handleAddToCart = (items:ProductType)=>{
        dispatch(add(items))
      }
    
  return (
    <div>

          <Button 
            sx={{ width: '100%'}}
            variant="contained" 
            color="error"      
            size="large"        
            onClick={()=>handleAddToCart(props)}
          >
          Add to cart
        </Button>
    </div>
  )
}

export default AddToCartButton