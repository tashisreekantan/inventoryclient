import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import apiClient from "../../CommonFunctions/Axios";
import { Link, useNavigate } from "react-router-dom";
import InventoryHeader from "../../Components/InventoryHeader";
// import { makeStyles } from "@material-ui/core/styles";
export default function AddItemForm() {
  const redirect = useNavigate()
  const [groupList, setGroupList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemUnit, setItemUnit] = useState("");
  const [itemDimensions, setItemDimensions] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [itemManufacturer, setItemManufacturer] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [itemSellingPrice, setItemSellingPrice] = useState("");
  const [itemCostPrice, setItemCostPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemOpeningStock, setItemOpeningStock] = useState("");
  const [itemReorder, setItemReorder] = useState("");
  const [itemPreferredVendor, setItemPreferredVendor] = useState("");
  const [itemImage, setItemImage] = useState("");

  const [groupId, setGroupId] = useState(""); 
  const getGroupList = async () => {
    const result = await apiClient.get("/getGroup");
    if (result.data) {
      setGroupList(result.data.groupList);
    }
  };
  useEffect(() => {
    getGroupList();
  }, []);
  const addItem = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(itemImage);
    reader.onloadend = async () => {
      const postData = {
        name: itemName,
        unit: itemUnit,
        dimension: itemDimensions,
        weight: itemWeight,
        manufacturer: itemManufacturer,
        brand: itemBrand,
        sellingPrice: itemSellingPrice,
        costPrice: itemCostPrice,
        description: itemDescription,
        openingStock: itemOpeningStock,
        reorder: itemReorder,
        preferredVendor: itemPreferredVendor,
        groupId: groupId,
        encodedUrl: reader.result,
      };
      const result = await apiClient.post("/inventory/addItem", postData);
      if (result.data) {
        redirect("/InventoryHome");
      }
    };
  };

  return (
    <div>
    <InventoryHeader/>
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
        <Typography variant="h5" sx={{ p: "20px", color: "#3f51b5" }}>
          Create Item
          <Button component={Link} to="/">
            <HomeIcon style={{ cursor: "pointer", color: "white" }} />
          </Button>
        </Typography>

        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Enter Item Name Here"
          onChange={(e) => setItemName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Unit"
          onChange={(e) => setItemUnit(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Dimensions"
          onChange={(e) => setItemDimensions(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Weight"
          onChange={(e) => setItemWeight(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Manufacturer"
          onChange={(e) => setItemManufacturer(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Brand"
          onChange={(e) => setItemBrand(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Selling Price"
          onChange={(e) => setItemSellingPrice(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Cost Price"
          onChange={(e) => setItemCostPrice(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "White" },
          }}
          variant="outlined"
          placeholder="Description"
          onChange={(e) => setItemDescription(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Opening Stock"
          onChange={(e) => setItemOpeningStock(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "White" },
          }}
          variant="outlined"
          placeholder="Re-Order"
          onChange={(e) => setItemReorder(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          InputProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          placeholder="Preferred Vendor"
          onChange={(e) => setItemPreferredVendor(e.target.value)}
        />
        <br />

        <TextField
          type="file"
          onChange={(e) => setItemImage(e.target.files[0])}
        />

        <br />
        <FormControl fullWidth>
          <Select
            sx={{ color: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={groupId}
            onChange={(event) => setGroupId(event.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Group
            </MenuItem>
            {groupList.map((data) => {
              return (
                <MenuItem key={data._id} value={data._id}>
                  {data.groupname}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button variant="contained" sx={{ m: 2 }} onClick={(e) => addItem(e)}>
          Submit
        </Button>
      </Paper>
    </Box>
    </div>
  );
}
