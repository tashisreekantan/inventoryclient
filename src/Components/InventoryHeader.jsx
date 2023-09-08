import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const InventoryHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">INVENTORY</Typography>
        <div>
          <Button component={Link} to="/item" color="inherit">
            Create Item
          </Button>
          <Button component={Link} to="/itemGroup" color="inherit">
            Create Group
          </Button>
          <Button
            color="inherit"
            onClick={handleClick}
            aria-controls="inventory-menu"
            aria-haspopup="true"
          >
            Inventory Adjustments
          </Button>
          <Menu
            sx={{ marginLeft: "10px" }}
            id="inventory-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/newAdjustments"
              >
                New Adjustments
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/viewAllAdjustments"
              >
                View All Adjustments
              </MenuItem>
              {/* <MenuItem
                onClick={handleClose}
                component={Link}
                to="/generateReports"
              >
                Generate Reports
              </MenuItem> */}
            </Box>
          </Menu>
          <Button color="inherit"
        component={Link} to="/">
          <HomeIcon 
          style={{ cursor: "pointer" ,color:"white"}}
          
          />
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default InventoryHeader;
