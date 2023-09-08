import React, { useEffect, useState } from "react";
import InventoryHeader from "../../Components/InventoryHeader";
import { Typography, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import apiClient from "../../CommonFunctions/Axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ItemUpdateModal from "./ItemUpdateModal";

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

export default function InventoryHome() {
  const [items, setItems] = useState([]);
  const [apiCall, setApiCall] = useState(0);
  const [item, setItem] = useState({});
  const [open, setOpen] = useState(false);
  const modalClose = () => {
    setOpen(false);
    setApiCall(Math.random());
  };
  const getItemData = async () => {
    try {
      const result = await apiClient.get("/getItems");
      setItems(result.data.itemList);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getItemData();
  }, [apiCall]);
  const deleteItem = async (id) => {
    const result = await apiClient.post("/deleteItem", { itemId: id });
    if (result.data.msg === "200") {
      setApiCall(Math.random());
    }
  };
  const EditItem = (e, item) => {
    e.preventDefault();
    setItem(item);
    setOpen(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <InventoryHeader />
      <ItemUpdateModal
        open={open}
        handleClose={modalClose}
        itemData={item}
        setItemData={setItem}
      />
      <Typography variant="h6" gutterBottom>
        ITEM LIST
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Manufacturer</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((data) => (
              <StyledTableRow key={data.name}>
                <StyledTableCell component="th" scope="row">
                  {data.name}
                </StyledTableCell>
                <StyledTableCell align="right">{data.brand}</StyledTableCell>
                <StyledTableCell align="right">
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
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItem(data._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
