'use client'
import { Badge, IconButton } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppSelector } from "@/app/lib/hooks";

function AddToCart() {
    const items = useAppSelector((state)=>state.cart.items) 
    console.log(items);
  return (
    <div>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={items.length} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
}

export default AddToCart;
