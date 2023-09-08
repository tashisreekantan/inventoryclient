import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InventoryHeader from "../../Components/InventoryHeader";
import { Paper, Typography, TextField, Select, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import apiClient from "../../CommonFunctions/Axios";

export default function InventoryAdjustmentsForm() {
  const [item, setItem] = useState("");
  const [adjustment, setAdjustment] = useState("");
  const [itemList, setItemList] = useState("");
  const [unit, setUnit] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const getItemList = async () => {
    const result = await apiClient.get("/getItems");
    if (result.data) {
      setItemList(result.data.itemList);
    }
  };
  useEffect(() => {
    getItemList();
  }, []);
  const setItemData = (data) => {
    setItem(data);
    setUnit(data.openingStock);
    setSellingPrice(data.sellingPrice);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const postData = {
      itemId: item._id,
      modeOfAdjustment: adjustment,
      sellingPrice: sellingPrice,
      quantity: unit,
      reason: reason,
      description: description,
      uploadFile: "",
    };
    console.log(postData);
    try {
      const result = await apiClient.post("/addInventoryAdjustments", postData);
      console.log(result.data);
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
          height: "100%",
          mt: 3,
        }}
      >
        <Paper
          sx={{
            backgroundColor: "#003545",
            paddingBottom: "25px",
            textAlign: "center",
            pl: "75px",
            pr: "75px",
          }}
        >
          <Typography variant="h5" sx={{ p: "20px", color: "dark blue" }}>
            INVENTORY ADJUSTMENT FORM
          </Typography>
          {/* --------------Item------------------ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography>Item</Typography>
            <FormControl sx={{ width: "53%" }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={item}
                onChange={(e) => setItemData(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Item
                </MenuItem>
                {itemList.length === 0 ? (
                  <MenuItem value={""} disabled>
                    No Items Created
                  </MenuItem>
                ) : (
                  itemList.map((data) => (
                    <MenuItem key={data._id} value={data}>
                      {data.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
          {/* --------------Mode of Adjustment------------------ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography>Mode Of Adjustment</Typography>
            <FormControl sx={{ width: "53%" }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={adjustment}
                onChange={(e) => setAdjustment(e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Adjustment
                </MenuItem>
                <MenuItem value={"Quantity"}>Quantity</MenuItem>
                <MenuItem value={"Value"}>Value</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* --------------Stock------------------ */}
          {adjustment === "Quantity" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography>Quantity</Typography>
              <TextField
                id="outlined-basic"
                InputProps={{
                  style: { color: "white" },
                }}
                variant="outlined"
                placeholder="Quantity"
                size="small"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </Box>
          ) : (
            ""
          )}
          {/* --------------Selling Price------------------ */}
          {adjustment === "Value" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography>Selling Price</Typography>
              <TextField
                id="outlined-basic"
                InputProps={{
                  style: { color: "white" },
                }}
                variant="outlined"
                placeholder="Selling Price"
                size="small"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </Box>
          ) : (
            ""
          )}

          {/* --------------Reason------------------ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography>Reason</Typography>
            <TextField
              id="outlined-basic"
              InputProps={{
                style: { color: "white" },
              }}
              variant="outlined"
              placeholder="Reason"
              size="small"
              onChange={(e) => setReason(e.target.value)}
            />
          </Box>
          {/* --------------Description------------------ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography>Description</Typography>
            <TextField
              rows={3}
              variant="outlined"
              placeholder="Description"
              size="small"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={submitForm}>
            Sumbit
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
