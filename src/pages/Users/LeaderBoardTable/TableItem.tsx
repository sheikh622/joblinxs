import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { PlayerTableData } from "types/models/PlayerTable";
import Switch from '@mui/material/Switch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getUserBlock,getUserProfile } from "../../../redux/userManagement/actions";
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
  const [blockUser, setBlockUser] = useState(row.isActive);
  useEffect(()=>{
    setBlockUser(row.isActive);
  },[row.isActive])
  const [ProfileUser, setProfileUser] = useState(row.isApproved);

  useEffect(()=>{
    setBlockUser(row.isApproved);
  },[row.isApproved])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [open, setOpen] = useState (false);
  const handleClick = () => setOpen(false);
  
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
          {row.fullName ? row.fullName : "Sunny"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          {row.email ? row.email : "Sunny"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          {row.phone ? row.phone : "092345678"}
        </TableCell>
        <TableCell align="center" className="tableCell">
          <Switch
            {...label}
            checked={ProfileUser}
            onChange={(e) => { setProfileUser(!ProfileUser); dispatch(getUserProfile({ userId: row.id, })) }}
          />
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
                onClick={() => setShow(true)}
              ></DeleteIcon> 
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton>
              <RemoveRedEyeIcon onClick={() => setOpen(true)}>
              </RemoveRedEyeIcon>
              </IconButton>
            </Tooltip>
        </TableCell>

      </TableRow>
      <Modal show={show} onHide={handleClose}/>
      <Profile show={open} onHide={handleClick} />
    </>
  );
};

export default TableItem;
