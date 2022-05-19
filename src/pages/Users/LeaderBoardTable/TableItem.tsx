import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  getUserBlock,
  getUserProfile,
} from "../../../redux/userManagement/actions";
import Modal from "../../Categories/Modals/Modal";
import { useHistory } from "react-router-dom";

interface TableItemProps {
  row: any;
  page: any;
  limit: any;
  type: any;
  search: any;
  adminId: any;
  setAdminId: any;
}
const label = { inputProps: { "aria-label": "Switch demo" } };
const TableItem: React.FC<TableItemProps> = ({
  row,
  page,
  limit,
  type,
  search,
  adminId,
  setAdminId
}) => {
  const dispatch = useDispatch();
  const history: any = useHistory();
  const [blockUser, setBlockUser] = useState(row.isActive);
  useEffect(() => {
    setBlockUser(row.isActive);
  }, [row.isActive]);
  const [ProfileUser, setProfileUser] = useState(row.isApproved);
  useEffect(() => {
    setBlockUser(row.isApproved);
  }, [row.isApproved]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);
  const handleDelete = () =>
    dispatch(
      deleteUser({
        userId: row.id,
        page: page,
        limit: limit,
        type: type,
        search: search,
      })
    );

  return (
    <>
      <TableRow className="item-hover">
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
            color={row?.isApproved === true ? "success" : "error"}
            style={{ marginLeft: "10px" }}
            onClick={() => {
              dispatch(
                getUserProfile({
                  userId: row.id,
                  page: page,
                  limit: limit,
                  adminId: "",
                  type: type,
                  search: search,
                })
              );
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
            checked={row.isActive}
            onChange={(e) => {

              dispatch(getUserBlock({
                userId: row.id,
                page: page,
                limit: limit,
                adminId: "",
                type: type,
                search: search,

              }));
            }}
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
              <RemoveRedEyeIcon
                onClick={() => {
                  history.push({
                    pathname: `/Users/userDetails`,
                    state: { item: type,detail:row },
                  });
                }}
              />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      <Modal
        id={row.id}
        show={show}
        onHide={handleClose}
        onDelete={handleDelete}
        
      />
    </>
  );
};

export default TableItem;
