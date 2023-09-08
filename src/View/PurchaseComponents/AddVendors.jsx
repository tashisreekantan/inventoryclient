import React, { useState } from 'react'
import apiClient from '../../CommonFunctions/Axios';
import { PurchaseHeader } from './PurchaseHeader';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

export const AddVendors = () => {
    const [vendor, setVendor] = useState({
        name: "", 
        email: "",
        phone: "",
        location: "",
      });
      const handleChange = (e) => {
        setVendor({ ...vendor, [e.target.name]: e.target.value });
      };
      const addVendor = async (e) => {
        e.preventDefault();
        try {
          const result = await apiClient.post("/addVendor", vendor);
          const { msg } = result.data;
          console.log(msg);
        } catch (error) {
          console.log(error.message);
        }
      };  
  return (
    <div>
        <PurchaseHeader/>
         <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "#003545",
          textAlign: "center",
          pl: "75px",
          pr: "75px",
          "margin-bottom": "200px",
        }}
      >
        <Typography variant="h5" sx={{ p: "20px", color: "#3f51b5" }}>
          ADD NEW VENDOR HERE
        </Typography>
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          placeholder="Name"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          sx={{ marginBottom: "10px", color: "white" }}
          name="name"
        />
        <TextField
          id="outlined-basic"
          placeholder="Phone_No"
          onChange={(e) => handleChange(e)}
          variant="outlined"
          InputProps={{
            style: { color: "white" },
          }}
          sx={{ marginLeft: "10px" }}
          name="phone"
        />
        <br />
        <TextField
          sx={{ width: "440px" }}
          id="outlined-basic"
          placeholder="Location"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          InputProps={{
            style: { color: "white" },
          }}
          name="location"
        />
        <br />
        <TextField
          sx={{ width: "440px" }}
          id="outlined-basic"
          placeholder="Email_Id"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          InputProps={{
            style: { color: "white" },
          }}
          name="email"
        />
        <br />
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={(e) => addVendor(e)}
        >
          Submit
        </Button>
      </Paper>
    </Box>
    </div>
  )
}
 