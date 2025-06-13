
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AddToCartButton from './AddToCartButton';
import ProductType from '@/config/definitions';

export default function ProductCard(props: ProductType) {
  const { id, title, thumbnail, price, category } = props;
  


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
          href={`/productdetails/${id}`} 
          color="neutral"
          textColor="text.primary"
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
        <AddToCartButton {...props} /> 
  
    </Card>
  );
}
