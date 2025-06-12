'use client'
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useAppDispatch } from '@/app/lib/hooks';
import { add } from '@/app/lib/store/features/cartSlice';
interface PropType{
      id:string;
    title:string;
    thumbnail:string;
    price:number;
    description:string;
    category?:string;
}

export default function ProductCard(props: PropType) {
  const { id, title, thumbnail, price, category } = props;
  const dispatch = useAppDispatch();

  const handleAddToCart = (productId:string)=>{
    console.log("adding to cart")
    dispatch(add(productId))
  }


  return (
    <Card sx={{ width: 250, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={thumbnail}
            alt={title}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{category || 'Uncategorized'}</Typography>
        <Link
          href={`/products/${id}`} 
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
         
        >
          ${price} 
        </Typography>
       
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg" onClick={()=>handleAddToCart(id)}>
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
