import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, TextField } from "@mui/material";
import apiClient from "../../CommonFunctions/Axios";

export default function ItemUpdateModal({
  open,
  handleClose,
  itemData,
  setItemData,
}) {
  console.log(itemData);
  const {
    brand,
    costPrice,
    description,
    groupName,
    manufacturer,
    name,
    sellingPrice,
    openingStock,
    weight,
    unit,
    reorder,
    preferredVendor,
  } = itemData;

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };
  const updateItem = async () => {
    const result = await apiClient.post("/editItem", itemData);
    if (result.data) {
      handleClose();
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Horizontally center the form items
            alignItems: "center", // Vertically center the form items
          }}
        >
          <Box sx={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              sx={{ marginRight: "8px" }}
              id="outlined-basic1"
              label="Item Name"
              variant="outlined"
              value={name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-basic2"
              label="Group Name"
              variant="outlined"
              value={groupName}
              name="groupName"
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              sx={{ marginRight: "8px" }}
              id="outlined-basic1"
              label="Brand"
              variant="outlined"
              value={brand}
              name="brand"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-basic2"
              label="Manufacturer"
              variant="outlined"
              value={manufacturer}
              name="manufacturer"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              sx={{ marginRight: "8px" }}
              id="outlined-basic1"
              label="Description"
              variant="outlined"
              value={description}
              name="description"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-basic2"
              label="Reorder Point"
              variant="outlined"
              value={reorder}
              name="reorder"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              sx={{ marginRight: "8px" }}
              id="outlined-basic1"
              label="Preferred Vendor"
              variant="outlined"
              value={preferredVendor}
              name="preferredVendor"
            />
            <TextField
              id="outlined-basic2"
              label="Unit"
              variant="outlined"
              value={unit}
              name="unit"
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={updateItem} autoFocus>
              Update
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
