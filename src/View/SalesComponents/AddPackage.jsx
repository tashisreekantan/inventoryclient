import React, { useState } from "react";
import SalesHeader from "../../Components/SalesHeader";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import apiClient from "../../CommonFunctions/Axios";

export const AddPackage = () => {
  const [packages, setPackage] = useState({
    itemName: "",
    Quantity: "",
    Weight: "",
    Receiver: "",
    Location: "",
    dateOfDelivery: "",
  });
  const handleChange = (e) => {
    setPackage({ ...packages, [e.target.name]: e.target.value });
  };
  const addPackage = async (e) => {
    e.preventDefault();
    try {
      const result = await apiClient.post("/addPackage", packages);
      const { msg } = result.data;
      alert("success")
      console.log(msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <SalesHeader />
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
            ADD NEW PACKAGE HERE
          </Typography>
          <TextField
            id="outlined-basic"
            InputProps={{
              style: { color: "white" },
            }}
            placeholder="Item Name"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            sx={{ marginBottom: "10px", color: "white" }}
            name="itemName"
          />
          <TextField
            id="outlined-basic"
            placeholder="Quantity"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            InputProps={{
              style: { color: "white" },
            }}
            sx={{ marginLeft: "10px" }}
            name="Quantity"
          />
          <br />
          <TextField
            id="outlined-basic"
            InputProps={{
              style: { color: "white" },
            }}
            placeholder="Weight"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            sx={{ marginBottom: "10px", color: "white" }}
            name="Weight"
          />
          <TextField
            id="outlined-basic"
            placeholder="Receiver"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            InputProps={{
              style: { color: "white" },
            }}
            sx={{ marginLeft: "10px" }}
            name="Receiver"
          />
          <br/>
          <TextField
            id="outlined-basic"
            InputProps={{
              style: { color: "white" },
            }}
            placeholder="Location"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            sx={{ marginBottom: "10px", color: "white" }}
            name="Location"
          />
          <TextField
            id="outlined-basic"
            placeholder="Date of Delivery"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            InputProps={{
              style: { color: "white" },
            }}
            sx={{ marginLeft: "10px" }}
            name="dateOfDelivery"
          />
          <br/>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={(e) => addPackage(e)}
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </div>
  );
};
