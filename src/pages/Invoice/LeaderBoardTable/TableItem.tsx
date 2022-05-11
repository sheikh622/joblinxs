import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { PlayerTableData } from "types/models/PlayerTable";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "../../../shared/Modals/Modal";
import { getAdminBlock,deletePost  } from "../../../redux/Invoice/actions";
import { Link } from "@mui/material";
import { useHistory } from "react-router-dom";

interface TableItemProps {
  row: PlayerTableData;
}

const label = { inputProps: { "aria-label": "Switch demo" } };
const TableItem: React.FC<TableItemProps> = ({ row }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete =() => dispatch(
    deletePost({
      id: row.id,
     
    })
  )
  const [blockAdmin, setBlockAdmin] = useState(row.status==="active"?true:false);
  // const adminBlock = useSelector((state: any) => state.block);
  return (
    <>
      <TableRow
        sx={{
          "& .tableCell": {
            fontSize: 13,
            padding: 2,
            whiteSpace: "nowrap",
            "&:first-of-type": {
              pl: 5,
            },
            "&:last-of-type": {
              pr: 5,
            },
          },
        }}
        className="item-hover"
      >
        <TableCell align="center" className="tableCell">
          {row.firstName ? row.firstName : "Sunny"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          {row.lastName ? row.lastName : "Sunny"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          {row.phone ? row.phone : "092345678"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          <Switch
            {...label}
            checked={blockAdmin}
            onChange={(e) =>  { setBlockAdmin(!blockAdmin);dispatch(getAdminBlock({adminId:row.id, }))}}
          />
        </TableCell>
        <TableCell align="center" className="tableCell">
          
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon
                htmlColor="#dc3545"
                onClick={() => setShow(true)}
              ></DeleteIcon> 
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
          <IconButton onClick={() => { history.push({
            pathname: `/adminManagement/addAdmin`,
            state: { item:row ,from:"edit"},
          })}}
          >
            <EditIcon >
              </EditIcon>
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      <Modal  id={row.id} show={show} onHide={handleClose} onDelete={handleDelete} />
    </>
  );
};
export default TableItem;
