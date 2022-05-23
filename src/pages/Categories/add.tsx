import IntlMessages from "@crema/utility/IntlMessages";
import { Box, Button, Grid, TableRow } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import Modal from "./Modals/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
// import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { AppCard, AppGridContainer } from "../../@crema";
import RecipeReviewCard from "./index";
const Category = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [search, setSearch] = useState<string>("");
  const [openDel, setOpenDel] = useState(false);
  const handleDelete = () => setOpenDel(false);
  const [request, setRequest] = useState(false);
  const handleClick = () => setRequest(false);

  return (
    <>
      {/* <AppAnimate animation="transition.slideUpIn" delay={200}> */}
      <AppGridContainer>
        <Box>
          <Grid item xs={12} md={12}>
            <Card
              sx={{
                width: 305,
                mt: 18,
                height: 122,
                display: "flex",
              }}
            >
              <Grid item xs={12} md={4}>
                <TableRow className="item-hover">
                  <TableCell>
                    <Box>
                      <Tooltip title="Delete">
                        <DeleteIcon
                          htmlColor="#dc3545"
                          sx={{
                            marginLeft: "15px",
                            display: "flex",
                            fontSize: "bold",
                            marginTop: "70%",
                          }}
                          // onClick={() => setShow(true)}
                          onClick={() => setOpenDel(true)}
                        />
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton style={{}} onClick={() => setShow(true)}>
                          <EditIcon
                            sx={{
                              marginLeft: "15px",
                              //   marginRight: "12px",
                              display: "flex",
                              fontSize: "bold",
                              // mt:22,
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                // style={{ display: "flex" }}
              />
              {/* <Divider orientation="vertical" flexItem /> */}
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  width: 30,
                  marginTop: 3,
                }}
              >
                <div>
                  {/* <input type="text" className="form-control" id="usr" name="username" aria-label="cetagory"/> */}

                  <h4 style={{ marginLeft: "20px" }}>fjgafjag</h4>
                  <h5 style={{ marginLeft: "20px" }}>fjkfgjkef</h5>
                </div>
              </Grid>
            </Card>

            {/* <TableCell
              align="center"
              className="tableCell"
              style={{ marginTop: "10px", paddingTop: "0px" }}
            >
              
                <IconButton></IconButton>
              </Tooltip>
            
            </TableCell> */}
          </Grid>
          {/* </AppCard> */}
        </Box>
      </AppGridContainer>
      {/* </AppAnimate> */}
      {/* <RecipeReviewCard /> */}  

      <Modal show={openDel} onHide={handleDelete} onDelete={handleDelete} />
    </>
  );
};
export default Category;
