import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Link, TableContainer } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import IntlMessages from "../../../@crema/utility/IntlMessages";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Button } from "reactstrap";
import { Modal } from "reactstrap";
import { ModalFooter } from "reactstrap";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { AppGridContainer } from "../../../@crema";
import images from "../../../assets/icon/coming.webp";

const userDetails = () => {
    return (
        <>
            <Breadcrumbs
                aria-label="breadcrumb"
                sx={{ mb: 5, display: "inline-block", ml: "1" }}
            >
                <Link underline="hover" color="inherit" style={{ color: "blue" }} href="/Users">
                    /UserManagement
                </Link>
            </Breadcrumbs>
            <div>

                <AppGridContainer >
                    <Grid
                        item
                        xs={12}
                        md={4}

                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{

                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Full Name
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}

                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            kjfnwjkfsjkfw
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Phone Number
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{

                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Address
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Postal Code
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Province
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            DOB
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",

                            }}
                        >
                            Experience
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{


                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                            {/* {collectionData?.email ? collectionData?.email : "----"} */}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "#0A8FDC",
                            }}
                        >
                            Category
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h3"
                            sx={{

                            }}
                        >
                            <h2>kjfnwjkfsjkfw</h2>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                    >
                        <Typography
                            variant="h5"
                        >
                            <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>businessLogo</h2>
                        </Typography>
                        <img src={images} width="100px" height="20px" style={{ marginRight: "15px" }} alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}

                    >
                        <Typography
                            variant="h5"
                        >
                            <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>businessLicense</h2>
                        </Typography>
                        <img src={images} width="100px" height="20px" style={{ marginRight: "15px" }} alt="" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                    >
                        <Typography
                            variant="h5"
                        >
                            <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>frontID</h2>
                        </Typography>
                        <img src={images} width="100px" height="20px" style={{ marginRight: "15px" }} alt="" />

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                    >
                        <Typography
                            variant="h5"
                        >
                            <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>backID</h2>
                        </Typography>
                        <img src={images} width="100px" height="20px" style={{ marginRight: "15px" }} alt="" />

                    </Grid>
                </AppGridContainer>

            </div>
        </>
    );
};
export default userDetails;