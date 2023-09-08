import React, { useState } from 'react'
import InventoryHeader from '../../Components/InventoryHeader'
import { Typography, Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  

export const ViewAdjustments = () => {
    const [items,setItems]=useState([]);
    const [price,setPrice]=usestate([])
  return (
    <div>
        <InventoryHeader/>
        <Typography variant="h6" gutterBottom>
        ADJUSTMENTS LIST
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item </StyledTableCell>
              <StyledTableCell align="right">Selling Price</StyledTableCell>
              <StyledTableCell align="right">Opening Stock</StyledTableCell>
              <StyledTableCell align="right">Reason</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {items.map((data) => (
              <StyledTableRow key={data.name}>
                <StyledTableCell component="th" scope="row">
                  {data.name}
                </StyledTableCell>
                <StyledTableCell align="right">{data.brand}</StyledTableCell>
                <StyledTableCel align="right">
                  {data.manufacturer}
                </StyledTableCell>
                <StyledTableCell align="right">{data.unit}</StyledTableCell>
                <StyledTableCell align="right">
                  {data.sellingPrice}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box>
                    <Avatar src={data.image} />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon
                    style={{ cursor: "pointer" }}
                    onClick={(e) => EditItem(e, data)}
                  />
               
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
