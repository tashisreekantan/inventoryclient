import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import image from "../assets/background.jpg"; // Make sure this path is correct and the image file exists

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh', // You can adjust the height or other styles as needed
  };

  return (
    <Box 
    sx={containerStyle}
    >
      <Header />
    </Box>
  );
};

export default Home;
