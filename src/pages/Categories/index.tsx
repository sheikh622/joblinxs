import AddCircleIcon from "@mui/icons-material/AddCircle";
import Vector from "../../assets/icon/Vector.png";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppCard, AppGridContainer } from "../../@crema";
import AppAnimate from "../../@crema/core/AppAnimate";
import AddCategory from "./Modals/addCategory";
import Modal from "./Modals/Modal";
import RequestModal from "./Modals/requestModal";
import Divider from "@mui/material/Divider";
import Category from "./add";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, deleteCategory } from "../../redux/Category/actions";

export default function RecipeReviewCard() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const CategoryData: any = useSelector(
    (state: any) => state?.Category.getCategoryList?.categories
  );

  console.log("CategoryData", CategoryData);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [totalCategories, settotalCategories] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [listingId, setListingId] = useState<string>("");

  const [openDel, setOpenDel] = useState(false);
  const [request, setRequest] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<any>({
    title: "",
    details: "",
  });

  const handleClose = () => setShow(false);
  // const handleDelete = () => setOpenDel(false);
  const handleClick = () => setRequest(false);
  // const handleDelete = () =>
  //   dispatch(
  //     deleteCategory({
  //       id: listingId,
  //     })
  //   );
  useEffect(() => {
    dispatch(
      getCategoryList({
        search: search,
      })
    );
  }, [search]);
  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <Box>
          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppCard contentStyle={{ px: 0 }}>
                <TextField
                  sx={{ display: "inline-block", marginLeft: 6 }}
                  placeholder="Search Text"
                  label="Search"
                  value={search}
                  onChange={(event: any) => {
                    setSearch(event.target.value);
                  }}
                />
              </AppCard>
            </Grid>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{
                position: "absolute",
                right: 20,
                top: 20,
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
          </AppGridContainer>

          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppGridContainer>
                {" "}
                {CategoryData?.map((value: any, index: any, row: any) => {
                  return (
                    <Grid item xs={12} md={4}>
                      <Category
                        item={value}
                        setShow={setShow}
                        setActiveButton={setActiveButton}
                        setSelectedItem={setSelectedItem}
                        // setListingId={setListingId}
                      />
                    </Grid>
                  );
                })}
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      mt: 10,
                      height: 122,
                      display: "flex",
                    }}
                  >
                    <Grid item xs={4} md={3}>
                      <Box>
                        <img
                          src={Vector}
                          alt=""
                          style={{
                            marginLeft: "20px",
                            display: "flex",
                            fontSize: "bold",
                            marginTop: "35px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setShow(true);
                            setSelectedItem("");
                            setActiveButton("add");
                          }}
                        />
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8} md={9}>
                      <div
                        className="category"
                        style={{
                          justifyContent: "center",
                          marginTop: "40px",
                          marginLeft: "20px",
                        }}
                      >
                        <h4>Add New Categories</h4>
                      </div>
                    </Grid>
                    <div
                      className="deltebtn"
                      style={{
                        borderTop: "1px solid black",
                        borderRadius: "0px",
                      }}
                    ></div>
                    <Divider orientation="horizontal" flexItem />

                    <AddCategory
                      show={show}
                      onHide={handleClose}
                      activeButton={activeButton}
                      selectedItem={selectedItem}
                    />
                  </Card>
                </Grid>
              </AppGridContainer>
            </Grid>
          </AppGridContainer>
        </Box>
      </AppAnimate>
      <Modal show={openDel} 
      // onHide={handleDelete}
      //  onDelete={handleDelete}
        />
      <RequestModal show={request} onHide={handleClick} />
    </>
  );
}
