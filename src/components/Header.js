// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import {Divider, Typography} from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
        <Typography variant="h2" gutterBottom>
          Call A Friend
        </Typography>
        <Divider sx={{ mb: 5}}>
        Your friendly contact app
        </Divider>
    </>
  );
};

export default Header;
