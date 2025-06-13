'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetchproducts from '@/services/productapi';
import { useAppDispatch } from '@/app/lib/hooks';
export default function PaginationControlled() {
    const [page, setPage] = React.useState(1);
    const skip = (page - 1) * 10;
    const dispatch = useAppDispatch()
    dispatch(setSkip(skip))
    // const products = fetchproducts(skip)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={20} page={page} onChange={handleChange} />
    </Stack>
  );
}
