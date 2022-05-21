import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppCard, AppGridContainer } from "../../../@crema";
import moment from "moment";
import images from "../../../assets/icon/coming.webp";
import { DataGrid } from "@mui/x-data-grid";
import { style } from "@mui/system";
import { Table } from "reactstrap";
const ProviderDetail = ({ detail }) => {
  let arr = detail?.workExperience.map((item, index) => {
    return {
      id: index,
      JobTitle: item?.jobTitle ? item?.jobTitle : "----",
      employmenttype: item?.employmentType ? item?.employmentType : "----",
      Location: item?.location ? item?.location : "----",
      StartDate: item?.startDate
        ? moment(item?.startDate).format("DD-MM-YYYY")
        : "----",
      EndDate: item?.endDate
        ? moment(item?.endDate).format("DD-MM-YYYY")
        : "----",
      Detail: item?.details ? item?.details : "----",
    };
  });

  return (
    <AppCard>
      <div>
        <AppGridContainer sx={{ p: 6 }}>
          <Grid item xs={12} md={12}>
            <Typography variant="h5">
              <h2
                style={{ color: "#0A8FDC", marginTop: "5%", display: "flex" }}
              >
                Profile Picture
              </h2>
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={8}>
                <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.email ? detail?.email : "----"}
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
                    color: "Black",
                    alignContent: "center",
                  }}
                >
                  Work Experience
                </Typography>
              </Grid>

              <Grid style={{ height: 400, width: "100%", marginTop: "5%" }}>
              
                    <DataGrid 
                      columns={[
                        { field: "JobTitle" },
                        { field: "employmenttype" },
                        { field: "Location" },
                        { field: "StartDate" },
                        { field: "EndDate" },
                        { field: "Detail" },
                      ]}
                      rows={arr}
                    />
                
              </Grid>
             
            </AppGridContainer>
          </Grid>
        </AppGridContainer>
      </div>
    </AppCard>
  );
};
export default ProviderDetail;
