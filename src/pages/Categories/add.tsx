import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { AppGridContainer } from "../../@crema";
import Modal from "./Modals/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

const   Category = ({
  item,
  setShow,
  setActiveButton,
  setSelectedItem,
//   setListingId,
}) => {
  const history = useHistory();

  const [search, setSearch] = useState<string>("");
  const [openDel, setOpenDel] = useState(false);
  const handleDelete = () => setOpenDel(false);
  const [request, setRequest] = useState(false);
  const handleClick = () => setRequest(false);

  return (
    <>
      {/* <AppAnimate animation="transition.slideUpIn" delay={200}> */}
      {/* <AppGridContainer>
        <Box sx={{ width: "100%", px: "10px" }}>
          <Grid item xs={12} md={12}> */}

      <Card
        sx={{
          mt: 10,
          height: 122,
          display: "flex",
        }}
      >
        <Grid item xs={12} md={3}>
          <div
            style={{
              padding: "25px",
              height: "120px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src={item?.categoryImg ? item?.categoryImg : "----"}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </div>
          <Divider orientation="vertical" flexItem />
          <div>
            <Tooltip title="Delete">
              <DeleteIcon htmlColor="#dc3545" />
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton style={{}} onClick={() => setShow(true)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />

        <Grid
          item
          xs={12}
          md={9}
          sx={{
            width: 30,
            marginTop: 3,
          }}
        >
          <div>
            <Typography
              id="modal-modal-title"
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0A8FDC",
                fontSize: "16px",
              }}
            >
              {item?.title ? item?.title : "----"}
            </Typography>

            <Typography
              id="modal-modal-title"
              variant="h3"
              sx={{
                fontSize: "14px",
              }}
            >
              {item?.details ? `${item?.details.slice(0, 100)}......` : "----"}
            </Typography>
          </div>
        </Grid>

        <div>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon
                htmlColor="#dc3545"
                onClick={() => {
                  setOpenDel(true);
                //   setListingId(item.id);
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton
              style={{}}
              onClick={() => {
                setSelectedItem(item);
                setActiveButton("edit");
                setShow(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Card>
      <Modal show={openDel} onHide={handleDelete} onDelete={handleDelete} />
    </>
  );
};
export default Category;
