'use client'
import ProductCard from "@/components/card";
import Navbar from "@/components/Navbar";
import PaginationControlled from "@/components/Pagination";
import fetchproducts from "@/services/productapi";
import { Box, Grid } from "@mui/material";
import { useAppSelector } from "../lib/hooks";
import { useEffect, useState } from "react";

interface ProductType {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    category?: string;
}


export default  function ProductPage() {

  const currentPage = useAppSelector((state) => state.page.page);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchproducts(currentPage).then(({ products, total }) => {
      setProducts(products);
      setTotal(total);
    });
  }, [currentPage]);


    return (
        <div>
            <Navbar />

            <Grid container spacing={10} sx={{ padding: 2 }}>


                {products.map((item) => (
                    <Grid key={item.id} >
                        <ProductCard id={item.id} thumbnail={item.thumbnail} price={item.price} title={item.title} description={item.description} category={item.category} />
                    </Grid>
                ))}
            </Grid>
            <Box>
                <PaginationControlled total={total} />
            </Box>

        </div>
    )
}
