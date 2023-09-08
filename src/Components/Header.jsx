import { AppBar, Toolbar, Typography,Button} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">OPERATION MANAGEMENT </Typography>
      <div>
        <Button component={Link} to="/InventoryHome" color="inherit">
          Inventory
        </Button>
        <Button component={Link} to="/sales" color="inherit">
          Sales
        </Button>
        <Button component={Link} to="/purchaseHome"color="inherit">
          Purchase
        </Button>
        <Button color="inherit">
          Dashboards & Reports 
        </Button>
      
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header