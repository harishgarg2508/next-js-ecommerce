import ProductCard from "@/components/card";
import Navbar from "@/components/Navbar";
import PaginationControlled from "@/components/Pagination";
import fetchproducts from "@/services/productapi";
import { Box, Grid } from "@mui/material";

interface ProductType {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    category?: string;
}


export default async function ProductPage() {

    const products: ProductType[] = await fetchproducts()

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
                <PaginationControlled />
            </Box>

        </div>
    )
}
