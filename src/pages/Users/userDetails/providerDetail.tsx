import ReactContentLoaderFacebook from "react-content-loader/dist/web/presets/FacebookStyle";
import React from "react";
import { AppCard, AppGridContainer } from "../../../@crema";
import images from "../../../assets/icon/coming.webp";
import { Grid, Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
const ProviderDetail = ({ detail }) => {

  return (
    <AppCard>
      <div>
        <AppGridContainer sx={{ p: 6 }}>
          <Grid item xs={12} md={12}>
            <Typography variant="h5">
              <h2
                style={{ color: "#0A8FDC", marginTop: "5%", display: "flex" }}
              ></h2>
            </Typography>
            <img
              src={detail.profileImg}
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
              src={detail?.frontId}
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
              src={detail?.backId}
              width="100px"
              height="20px"
              style={{ marginRight: "15px" }}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <AppGridContainer>
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
                  DOB
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.dateofBirth ? detail?.dateofBirth : "----"}
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
                  Personal Attributes
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.personalAttributes
                    ? detail?.personalAttributes
                    : "----"}
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
                  Career Overview
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.carrierOverview ? detail?.carrierOverview : "----"}
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
                  Volunteering History
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.volunteeringHistory
                    ? detail?.volunteeringHistory
                    : "----"}
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
                  Tools Availble
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.toolsAvailable ? detail?.toolsAvailable : "----"}
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
                  Transportation Availble
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.transportationAvailable
                    ? detail?.transportationAvailable
                    : "----"}
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
                    alignContent: "center",
                  }}
                >
                  Work Experience
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  <h2></h2>
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
                  Job Title
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.jobtitle ? detail?.jobtitle : "----"}
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
                  Employment Type
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.employmentType ? detail?.employmentType : "----"}
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
                  Location
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.location ? detail?.location : "----"}
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
                  Start Date
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.startdate ? detail?.startdate : "----"}
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
                  End Date
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.updatedDate ? detail?.updatedDate : "----"}
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
                  Share Your Experience
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {/* {collectionData?.email ? collectionData?.email : "----"} */}
                </Typography>
              </Grid>
            </AppGridContainer>
          </Grid>

        </AppGridContainer>
      </div>
    </AppCard>
  );
};
export default ProviderDetail;
