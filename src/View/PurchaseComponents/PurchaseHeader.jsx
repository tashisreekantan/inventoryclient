import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export const PurchaseHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
        <AppBar position="static">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">PURCHASE </Typography>
      <div>
      <Button
            color="inherit"
            onClick={handleClick}
            aria-controls="inventory-menu"
            aria-haspopup="true"
          >
            Vendors
          </Button>
          <Menu
            id="inventory-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/addVendors">
              New Vendor Registration
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/purchaseHome"
            >
              Display
            </MenuItem>
          </Menu>

        {/* <Button component={Link} to="/InventoryHome" color="inherit">
          Vendors
        </Button> */}
        <Button component={Link} to="/sales" color="inherit">
          Purchase Orders
        </Button>
        <Button color="inherit">
          Bills and Payments
        </Button>
        <Button color="inherit">
          Vendor Credit
        </Button>
        <Button color="inherit"
        component={Link} to="/">
          <HomeIcon  
          style={{ cursor: "pointer" ,color:"white"}}
          
          />
        </Button>
        
      
      </div>
    </Toolbar>
  </AppBar>
    </div>
  )
}
