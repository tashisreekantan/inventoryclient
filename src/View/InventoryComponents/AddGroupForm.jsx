import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import apiClient from "../../CommonFunctions/Axios";
import InventoryHeader from "../../Components/InventoryHeader";

export default function AddGroupForm() {
  const [groupName, setGroupName] = useState("");
  const addGroup = async (e) => {
    e.preventDefault();
    try {
      if (!groupName) {
        return console.log("All fields are mandatory");
      } else {
        const postData = { groupname: groupName };
        const result = await apiClient.post("/addGroup", postData);
        const { msg } = result.data;
        console.log(msg);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <InventoryHeader />
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
          }}
        >
          <Typography variant="h5" sx={{ p: "20px" }}>
            Create Group
          </Typography>

          <TextField
            id="outlined-basic"
            InputProps={{
              style: { color: "white" },
            }}
            variant="outlined"
            placeholder="Enter group Name Here"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <br />

          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={(e) => addGroup(e)}
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
