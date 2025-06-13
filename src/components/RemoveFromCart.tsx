'use client'
import { useAppDispatch } from '@/app/lib/hooks'
import { remove } from '@/app/lib/store/features/cartSlice';
import { Button } from '@mui/material';
import React from 'react'

interface RemoveFromCartProps {
    itemId: number;
}

function RemoveFromCart({ itemId }: RemoveFromCartProps) {
    const dispatch =  useAppDispatch();

  return (
    <div>
        <Button color='warning' onClick={()=>dispatch(remove(itemId))} variant="contained">Remove</Button>
    </div>
  )
}

export default RemoveFromCart