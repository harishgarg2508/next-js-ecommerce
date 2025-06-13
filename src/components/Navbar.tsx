'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AddToCart from './addToCart';
import Link from 'next/link';
import { useAppSelector } from '@/app/lib/hooks';


export default function Navbar() {
    const user = useAppSelector(state=>state.user)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={user.displayName || 'User Avatar'} src={user.photoURL || undefined} />
                        </ListItemAvatar>
                        <ListItemText primary={user.displayName} secondary={user.email} />
                    </ListItem>

                   <Link href="/cart"><AddToCart/></Link> 
               
                </Toolbar>
            </AppBar>

        </Box>
    );
}
