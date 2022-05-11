import React from "react";
import Box from "@mui/material/Box";
import AuthWrapper from "../AuthWrapper";
import LoginPage from "./Login";
import AppLogo from "@crema/core/AppLayout/components/AppLogo";
import { useHistory, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Fonts } from "../../../shared/constants/AppEnums";
import IntlMessages from "@crema/utility/IntlMessages";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { BiLeftArrow } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Checkbox } from "@mui/material";
const Signin = () => {
  const history = useHistory();
  return (
    <AuthWrapper>
      <Box sx={{ width: "70%" }}>
      <Box sx={{ mb: { xs: 6, xl: 8 } }}>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: Fonts.BOLD,
                fontSize: 15,
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "center",
                paddingTop: 1,
              }}
            >
              <IntlMessages id="common.logintitle" />
            </Typography>

          </Box>
        </Box>
        <LoginPage />
        
        {/* <div style={{
          display: "flex",
          alignItems: "center",
          justifySelf: "center",
          justifyContent: "center",
          paddingBottom: 8,
        }}
        >
          <span className="border border-white">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
                paddingLeft: 0,

              }}
            >
              <Tooltip title="facebook">
                <span onClick={() => window.open(`https://www.facebook.com/`, "_blank")} style={{ border: "1px solid #E2E8F0", padding: "10px", borderRadius: "8%" }}>
                  <FacebookOutlinedIcon />
                </span>
              </Tooltip>
            </div>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: 4,
              paddingLeft: 10,
            }}
          >
            <Tooltip title="Google">
              <span onClick={() => window.open(`https://myaccount.google.com/`, "_blank")} style={{ border: "1px solid #E2E8F0", padding: "10px", borderRadius: "8%" }}>
                <GoogleIcon />
              </span>
            </Tooltip>
          </div>
        </div>
        <Box
          sx={{
            color: "grey.500",
            mb: { xs: 5, md: 7 },
            justifyContent: "center",
            justifySelf: "center",
            justifyItems: "center",
          }}
        >
          <span style={{ marginRight: 4 }}>
            <IntlMessages id="common.alreadyHaveAccount" />
          </span>
          <Box
            component="span"
            sx={{
              fontWeight: Fonts.MEDIUM,
              "& a": {
                color: (theme) => theme.palette.primary.main,
                textDecoration: "none",
              },
            }}
          >
            <Link to="/signUp">
              <IntlMessages id="common.signup" />
            </Link>
          </Box>

        </Box> */}
      </Box>
    </AuthWrapper >
  );
};
export default Signin;
