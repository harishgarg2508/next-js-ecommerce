'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';



export default function Navbar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Guest" secondary="guest@gmail.com" />
                    </ListItem>

                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={5} color="error">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </Box>
    );
}
