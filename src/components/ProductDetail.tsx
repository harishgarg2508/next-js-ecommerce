'use client'; 

import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import Link from 'next/link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddToCartButton from './AddToCartButton';
import ProductType from '@/config/definitions';

interface ProductDetailProps {
    product: ProductType;
}

function ProductDetail({ product }: ProductDetailProps) {
  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Link href="/products">
        <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />} sx={{ mb: 2 }}>
          Back to Products
        </Button>
      </Link>
      <Card>
        <CardMedia component="img" height="400" image={product.thumbnail} alt={product.title} sx={{ objectFit: 'contain' }} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">{product.title}</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>${product.price.toFixed(2)}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}><strong>Category:</strong> {product.category || 'N/A'}</Typography>
          <Typography variant="body2" color="text.secondary">{product.description}</Typography>
        </CardContent>
        <AddToCartButton {...product} />
      </Card>
    </Container>
  );
}

export default ProductDetail;