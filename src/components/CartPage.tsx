'use client'

import { useAppSelector } from '@/app/lib/hooks';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  Box,
  Paper
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';
import RemoveFromCart from './RemoveFromCart';

export default function CartPage() {
  const items = useAppSelector(state => state.cart.items)
  console.log(items)

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);


  if (items.length === 0) {
    return (
      <>
      <Link href="/"><Button variant="contained"><KeyboardBackspaceIcon fontSize='large'/></Button></Link>

      
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Shopping Cart
        </Typography>
        <Typography variant="subtitle1">
          Your cart is currently empty.
        </Typography>
      </Container>
      </>
    );
  }

  return (
    <>
      <Link href="/"><Button variant="contained"><KeyboardBackspaceIcon fontSize='large'/></Button></Link>

      <Container sx={{ py: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Your Shopping Cart
        </Typography>

        <Paper elevation={3}>

          <List>
            {items.map((item, index) => (
              <Box key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.title} src={item.thumbnail} variant="square" sx={{ width: 60, height: 60, mr: 2 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                   
                    }
                  />
                  <RemoveFromCart itemId={item.id} />
                </ListItem>
                {index < items.length - 1 && <Divider variant="inset" component="li" />}
              </Box>
            ))}
          </List>
        </Paper>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ mr: 2 }}>Total: ${totalPrice.toFixed(2)}</Typography>
          <Button variant="contained" color="primary" size="large">Proceed to Checkout</Button>
        </Box>
      </Container>
    </>
  );
}
