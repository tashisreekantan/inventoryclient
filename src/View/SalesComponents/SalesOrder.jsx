import React from 'react'
import SalesHeader from '../../Components/SalesHeader'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'

export const SalesOrder = () => {
  return (
    <div>
        <SalesHeader/>
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
           NEW SALES ORDER
        </Typography>
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          placeholder="Customer Name"
          variant="outlined"
        //   onChange={(e) => handleChange(e)}
          sx={{ marginBottom: "10px", color: "white" }}
          name="customer_name"
        />
        <TextField
          id="outlined-basic"
          placeholder="Item"
        //   onChange={(e) => handleChange(e)}
          variant="outlined"
          InputProps={{
            style: { color: "white" },
          }}
          sx={{ marginLeft: "10px" }}
          name="product"
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          placeholder="Number of Items"
          variant="outlined"
        //   onChange={(e) => handleChange(e)}
          sx={{ marginBottom: "10px", color: "white" }}
          name="number_of_item"
        />
        <TextField
          id="outlined-basic"
          placeholder="Price"
        //   onChange={(e) => handleChange(e)}
          variant="outlined"
          InputProps={{
            style: { color: "white" },
          }}
          sx={{ marginLeft: "10px" }}
          name="price"
        />
        <br />
        <TextField
          sx={{ width: "440px" }}
          id="outlined-basic"
          placeholder="Phone No"
          variant="outlined"
        //   onChange={(e) => handleChange(e)}
          InputProps={{
            style: { color: "white" },
          }}
          name="phone"
        />
        <br />
        <Button
          variant="contained"
          sx={{ m: 2 }}
        //   onClick={(e) => addCustomer(e)}
        >
          Submit
        </Button>
      </Paper>
    </Box>
    </div>
  )
}
