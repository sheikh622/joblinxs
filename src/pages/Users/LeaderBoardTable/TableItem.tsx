import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { PlayerTableData } from "types/models/PlayerTable";
import Switch from '@mui/material/Switch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getUserBlock, getUserProfile, deleteUser } from "../../../redux/userManagement/actions";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "../../Categories/Modals/Modal";
import { Box, Button, Grid, Link, TableContainer, TextField } from "@mui/material";

interface TableItemProps {
  row: any;
  page: any;
  limit: any;
  adminId: any;
  type: any;
  search: any;
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const TableItem: React.FC<TableItemProps> = ({ row, page,
  limit,
  adminId,
  type,
  search,
}) => {
  const dispatch = useDispatch();
  const [blockUser, setBlockUser] = useState(row.isActive);
  useEffect(() => {
    setBlockUser(row.isActive);
  }, [row.isActive])
  const [ProfileUser, setProfileUser] = useState(row.isApproved);
  useEffect(() => {
    setBlockUser(row.isApproved);
  }, [row.isApproved])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);
  const handleDelete = () => dispatch(
    deleteUser({
      userId: row.id,
    })
  )
  console.log("open------------", open)
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
          <Button
            variant="outlined"
            color={row?.isApproved === true ? (
              "success"
            ) : (
              "error"
            )}
            style={{ marginLeft: "10px" }}

            onClick={() => {
              dispatch(getUserProfile({
                userId: row.id,
                page: page,
                limit: limit,
                adminId: "",
                type: type,
                search: search,
              }))
            }}
          >
            {row?.isApproved === true ? (
              <span>Approved</span>
            ) : (
              <span>Pending</span>
            )}
          </Button>

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
          <Link href="/Users/userDetails">
            <Tooltip title="Profile">
              <IconButton>
                <RemoveRedEyeIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Tooltip>
          </Link>
        </TableCell>
      </TableRow>
      <Modal id={row.id} show={show} onHide={handleClose} onDelete={handleDelete} />
    </>
  );
};

export default TableItem;
