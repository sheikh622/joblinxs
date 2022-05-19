import { Grid, Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { AppCard, AppGridContainer } from "../../../@crema";
import images from "../../../assets/icon/coming.webp";
import { useHistory } from "react-router-dom";
import SeekerDetail from "./seekerDetail";
import ProviderDetail from "./providerDetail";
const UserDetails = ({
  
}) => {
  const history: any = useHistory();
  const {
    location: { state },
  } = history;
  const userType: any = history?.location?.state?.item;
  const detail: any = history?.location?.state?.detail;

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ mb: 5, display: "inline-block", ml: "1" }}
      >
        <Link
          underline="hover"
          color="inherit"
          style={{ color: "blue" }}
          href="/Users"
        >
          /UserManagement
        </Link>
      </Breadcrumbs>
      <Typography
        id="modal-modal-title"
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "black",
          mb: 6,
          mt: 2,
        }}
      >
        User Details
      </Typography>
      {userType === "provider" ? <ProviderDetail detail={detail} /> : <SeekerDetail detail={detail}/>}
    </>
  );
};
export default UserDetails;
