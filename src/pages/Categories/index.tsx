import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
import { Box, Grid, Link, TableContainer, TextField } from "@mui/material";
import { height } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCategory from './Modals/addCategory';
import Modal from './Modals/Modal';
import RequestModal from './Modals/requestModal';
import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from "@mui/material/Tooltip";
import TableCell from "@mui/material/TableCell";
import { useHistory } from "react-router-dom";
import AppAnimate from "../../@crema/core/AppAnimate";
import { AppCard, AppGridContainer } from "../../@crema";


export default function RecipeReviewCard() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [openDel, setOpenDel] = useState(false);
  const handleDelete = () => setOpenDel(false);

  const [request, setRequest] = useState(false);
  const handleClick = () => setRequest(false);
  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <Box>
          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppCard
                contentStyle={{ px: 0 }}
              >
                <TextField
                  sx={{ display: "inline-block", marginLeft: 6 }}
                  placeholder="Search Text"
                  label="Search"
                  // value={search}
                  // onChange={(event: any) => {
                  //   // setSearch(event.target.value);
                  // }}
                />
              </AppCard>
            </Grid>
          </AppGridContainer>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{
              position: "absolute",
              right: 4,
              top: 15,
              color: "gray",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setRequest(true)}
            >
              Users Request
            </Button>
          </Box>
          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <Card sx={{
                maxWidth: 295,
                mt:10,
                height: 142
              }}>
                <Box>
                  <AddCircleIcon
                    sx={{ marginLeft: "20px", display: "flex", fontSize: "bold", marginTop: "28px" }}
                    onClick={() => setShow(true)}
                  />
                  <div className='category' style={{ justifyContent: "center", marginTop: "20px", marginLeft: "20px" }}>
                    <h4>add new Categories</h4>
                  </div>
                </Box>
                <div className='deltebtn' style={{
                  borderTop: '1px solid black',
                  borderRadius: "0px"
                }}></div>
                <TableCell align="center" className="tableCell" style={{ marginTop: "10px", paddingTop: "0px" }} >

                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon
                        htmlColor="#dc3545"
                        sx={{
                          alignContent: "center",
                          marginRight: "168px",
                          padding: "0px",
                          marginTop: "8px",
                        }}
                        // onClick={() => setShow(true)}
                        onClick={() => setOpenDel(true)}
                      ></DeleteIcon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => setShow(true)}
                    >
                      <EditIcon >
                      </EditIcon>
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <AddCategory show={show} onHide={handleClose} />
              </Card>
            </Grid>
          </AppGridContainer>
        </Box>
      </AppAnimate>
      <Modal
        show={openDel}
        onHide={handleDelete}
      // onDelete={handleDelete}
      />
      <RequestModal show={request} onHide={handleClick} />
    </>
  );
}