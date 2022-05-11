import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { PlayerTableData } from "types/models/PlayerTable";
import Switch from '@mui/material/Switch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getUserBlock } from "../../../redux/userManagement/actions";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../Modal/Profile"
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "../../Categories/Modals/Modal"
interface TableItemProps {
  row: PlayerTableData;
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const TableItem: React.FC<TableItemProps> = ({ row }) => {
  const dispatch = useDispatch();
  const [blockUser, setBlockUser] = useState(row.status === "active" ? true : false);
  // const [show, setShow] = useState(false);
  const [open, setOpen] = useState (false);
  // const handleClick = () => setOpen(false);
  const handleClose = () => setOpen(false);
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
          <Switch
            {...label}
            checked={blockUser}
            onChange={(e) => { setBlockUser(!blockUser); dispatch(getUserBlock({ userId: row.id, })) }}
          />
        </TableCell>
        <TableCell align="center" className="tableCell">        
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon
                htmlColor="#dc3545"
                onClick={() => setOpen(true)}
              ></DeleteIcon> 
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      <Modal show={open} onHide={handleClose}/>
    </>
  );
};
export default TableItem;
