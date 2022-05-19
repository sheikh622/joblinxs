import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppCard, AppGridContainer } from "../../../@crema";
import images from "../../../assets/icon/coming.webp";
const SeekerDetail = (
  {
    detail,
  }
) => {

    return(
    <AppCard >
     
        <div>
          <AppGridContainer sx={{p:6}}>
              
            <Grid item xs={12} md={6}>
              <AppGridContainer>
              <Grid item xs={12} md={12}>
                <Typography variant="h5">
                  <h2 style={{ color: "#0A8FDC", marginTop: "5%",display:"flex" }}>
                
                  </h2>
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
                  Job type
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
                    Can you drive
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  
                   {detail?.canyoudrive ? detail?.canyoudrive : "----"}
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
                    Do you Have Tools
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography id="modal-modal-title" variant="h3" sx={{}}>
                  {detail?.doyouhavetools ? detail?.doyouhavetools : "----"}
                  </Typography>
                </Grid>
              </AppGridContainer>
            </Grid>
          </AppGridContainer>
        </div>
      </AppCard>
    )
};
export default SeekerDetail;