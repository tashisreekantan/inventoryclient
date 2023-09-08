import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const SalesHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [packageAnchorEl, setPackageAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePackageClick = (event) => {
    setPackageAnchorEl(event.currentTarget);
  };

  const handlePackageClose = () => {
    setPackageAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">SALES</Typography>
        <div>
          <Button
            color="inherit"
            onClick={handleClick}
            aria-controls="inventory-menu"
            aria-haspopup="true"
          >
            CUSTOMER
          </Button>
          <Menu
            id="inventory-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/addCustomer">
              New Customer Registration
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/sales"
            >
              Display
            </MenuItem>
          </Menu>
          <Button component={Link} to="/salesOrder" color="inherit">
            Sales Orders
          </Button>
      
          <Button
          color="inherit"
          onClick={handlePackageClick}
          aria-controls="package-menu"
          aria-haspopup="true"
        >
          Packages
        </Button>
        <Menu
          id="package-menu"
          anchorEl={packageAnchorEl}
          open={Boolean(packageAnchorEl)}
          onClose={handlePackageClose}
        >
          <MenuItem
            onClick={handlePackageClose}
            component={Link}
            to="/addPackage"
          >
            New Package
          </MenuItem>
          <MenuItem
            onClick={handlePackageClose}
            component={Link}
            to="/displayPackages"
          >
            Display Packages
          </MenuItem>
        </Menu>
          <Button component={Link} to="/item" color="inherit">
            Delivery Challans
          </Button>
          <Button component={Link} to="/itemGroup" color="inherit">
            Invoices
          </Button>
          <Button component={Link} to="/itemGroup" color="inherit">
            Payments Received
          </Button>
          <Button component={Link} to="/item" color="inherit">
            Sales Returns
          </Button>
          <Button component={Link} to="/itemGroup" color="inherit">
            Credit Notes
          </Button>
          <Button color="inherit" component={Link} to="/">
            <HomeIcon style={{ cursor: "pointer", color: "white" }} />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SalesHeader;
