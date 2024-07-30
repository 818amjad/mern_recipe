// src/components/Navbar.js
import React from 'react';
import { AppBar, Button, Toolbar, Typography, Container, Box } from '@mui/material';


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          RECIPE
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
