import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppCard, AppGridContainer } from "../../../@crema";
import images from "../../../assets/icon/coming.webp";
const SeekerDetail = ({ detail }) => {
  console.log("image", detail?.businessInformation?.businessLicense);
  return (
    <AppCard>
      <div>
        <AppGridContainer sx={{ p: 6 }}>
          <Grid item xs={12} md={6}>
            <AppGridContainer>
              <Grid item xs={12} md={12}>
                <Typography variant="h5">
                  <h2
                    style={{
                      color: "#0A8FDC",
                      marginTop: "5%",
                      display: "flex",
                    }}
                  ></h2>
                </Typography>
                <img
                  src={detail?.profileImg ? detail?.profileImg : images}
                  width="100px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  alt=""
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>frontID</h2>
                </Typography>
                <img
                  src={detail?.frontId ? detail?.frontId : images}
                  width="100px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  alt=""
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <h2 style={{ color: "#0A8FDC", marginTop: "5%" }}>backID</h2>
                </Typography>
                <img
                  src={detail?.backId ? detail?.backId : images}
                  width="100px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  alt=""
                />
              </Grid>
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={8}>
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.fullName ? detail?.fullName : "----"}
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
                  Email
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.email ? detail?.email : "----"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  id="modal-modal-title"
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#0A8FDC",
                  }}
                >
                  Description
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.Description ? detail?.Description : "----"}
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
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.phoneNumber ? detail?.phoneNumber : "----"}
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
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.address ? detail?.address : "----"}
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
                  City
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.city ? detail?.city : "----"}
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
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.postalCode ? detail?.postalCode : "----"}
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
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.province ? detail?.province : "----"}
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
                {detail?.category.map((item: any) => {
                  return (
                    <Typography
                      id="modal-modal-title"
                      variant="h3"
                      sx={{ display: "block" }}
                    >
                      {item} {" , "}
                    </Typography>
                  );
                })}
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  businessInformation:
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
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
                  Lincense
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <h2 style={{ marginTop: "5%" }}></h2>
                </Typography>
                <a
                  href={detail?.businessInformation?.businessLicense}
                  target="_blank"
                >
                  {" "}
                  business License{" "}
                </a>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <h2 style={{ marginTop: "5%", color: "#0A8FDC" }}>
                    businessLogo
                  </h2>
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <h2 style={{ marginTop: "5%" }}></h2>
                </Typography>
                <img
                  src={
                    detail?.businessInformation?.businessLogo
                      ? detail?.businessInformation?.businessLogo
                      : images
                  }
                  width="100px"
                  height="20px"
                  style={{ marginRight: "15px" }}
                  alt=""
                />
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
                  profileType
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.profileType?.name ? detail?.profileType?.name : "----"}
                </Typography>
              </Grid>
            </AppGridContainer>
          </Grid>
        </AppGridContainer>
      </div>
    </AppCard>
  );
};
export default SeekerDetail;
