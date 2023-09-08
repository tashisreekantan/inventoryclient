import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, TextField } from "@mui/material";
import apiClient from "../../CommonFunctions/Axios";

export default function CustomerUpdateModal({
  open,
  handleClose,
  itemData,
  setItemData,
}) {
  console.log(itemData);
  const {
    name,
    email,
    phone,

  } = itemData;

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };
  const updateItem = async () => {
    const result = await apiClient.post("/editCustomer", itemData);
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
              value={email}
              name="email"
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              sx={{ marginRight: "8px" }}
              id="outlined-basic1"
              label="Brand"
              variant="outlined"
              value={phone}
              name="phone"
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
