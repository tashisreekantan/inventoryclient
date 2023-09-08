import React, { useEffect, useState } from "react";

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

// import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomerUpdateModal from "../View/SalesComponents/CustomerUpdateModal";
import apiClient from "../CommonFunctions/Axios";

import SalesHeader from "./SalesHeader";

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

export default function Sales() {
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
      const result = await apiClient.post("/getCustomers");
      setItems(result.data.itemList);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getItemData();
  }, [apiCall]);

  const EditItem = (e, item) => {
    e.preventDefault();
    setItem(item);
    setOpen(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SalesHeader/>
      <CustomerUpdateModal
        open={open}
        handleClose={modalClose}
        itemData={item}
        setItemData={setItem}
      />
      <Typography variant="h6" gutterBottom>
        CUSTOMERS
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CUSTOMER NAME</StyledTableCell>

              <StyledTableCell align="right">EMAIL</StyledTableCell>
              <StyledTableCell align="right">PHONE</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((data) => (
              <StyledTableRow key={data.name}>
                <StyledTableCell component="th" scope="row">
                  {data.name}
                </StyledTableCell>
                <StyledTableCell align="right">{data.email}</StyledTableCell>
                <StyledTableCell align="right">{data.phone}</StyledTableCell>

                <StyledTableCell align="right">
                  <EditIcon
                    style={{ cursor: "pointer" }}
                    onClick={(e) => EditItem(e, data)}
                  />
                </StyledTableCell>
                {/* <StyledTableCell align="right">
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    // onClick={() => deleteItem(data._id)}
                  />
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
